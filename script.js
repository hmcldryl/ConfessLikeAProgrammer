// =====================================================================
//  CONFIG - ito lang yung kailangan mong palitan
// =====================================================================
//  Placeholders you can use inside any text below:
//    {you}   -> replaced with yourName
//    {crush} -> replaced with crushName
//
//  Available styles (colors):
//    "message-text" - white, normal message
//    "code-block"   - light blue
//    "heart-text"   - pink, for kilig lines
//    "loading-text" - sky blue, for "loading..." lines
//    "system-text"  - teal, for system messages
//    "path-text"    - yellow
//    "error-text"   - red
//
//  "\n" means new line. "\n\n" means new line + one empty line.
// =====================================================================
const CONFIG = {
  yourName: "YOUR_NAME",
  crushName: "CRUSH_NAME",

  // Paste your Google Apps Script Web App URL here (see README, Step 4).
  // Leave as is if you don't want email notifications.
  scriptUrl: "PASTE_YOUR_APPS_SCRIPT_URL_HERE",

  // Lines shown one by one after typing "run code"
  confession: [
    { text: "Compiling thoughts...\n", style: "loading-text" },
    { text: "Loading emotions...\n", style: "loading-text" },
    { text: "Gathering courage...\n\n", style: "loading-text" },
    { text: "Hi {crush},\n\n", style: "message-text" },
    { text: "[Opening line mo dito. Example: I hope you're doing well. I've been meaning to say this for a while...]\n\n", style: "message-text" },
    { text: "[Introduce yourself. Example: I'm {you}, ...]\n\n", style: "code-block" },
    { text: "[Paano mo siya nakilala or bakit mo siya nagustuhan.]\n\n", style: "message-text" },
    { text: "[Something sweet about them.] 😊\n\n", style: "heart-text" },
    { text: "[Your invite. Example: I'd love to take you out for coffee or dinner this Valentine's—]\n", style: "message-text" },
    { text: "[Example: somewhere we can chika and get to know each other better.]\n\n", style: "code-block" },
    { text: "What do you say? ", style: "message-text" },
    { text: "❤️\n\n", style: "heart-text" },
    { text: '[Respond by typing "yes" or "no"]\n\n', style: "loading-text" },
  ],

  // Shown if they type "yes"
  yesReply: [
    { text: "\n❤️ [Your reply if YES. Example: Thank you! I'll make it special!]\n", style: "heart-text" },
    { text: "[Example: I'll contact you soon with the details!]\n\n", style: "message-text" },
  ],

  // Shown if they type "no"
  noReply: [
    { text: "\n[Your reply if NO. Example: Aw, thanks for being honest! No stress at all~] 😊\n", style: "message-text" },
    { text: "[Example: Keep being you! Who knows, maybe we'll bump into each other next time!] 🌟\n\n", style: "message-text" },
  ],
};
// =====================================================================
//  Wag mo na galawin yung nasa baba nito unless alam mo ginagawa mo :)
// =====================================================================

const fill = (text) =>
  text.replaceAll("{you}", CONFIG.yourName).replaceAll("{crush}", CONFIG.crushName);

const PROMPT = `C:\\Users\\${CONFIG.yourName}\\Hello${CONFIG.crushName}> `;

const terminal = document.getElementById("terminal");
const input = document.getElementById("cmd-input");
let confessionShown = false;

document.getElementById("window-title").textContent =
  `Command Prompt - hello_${CONFIG.crushName.toLowerCase()}.exe`;
document.getElementById("prompt").textContent = PROMPT;
terminal.innerHTML =
  createColoredSpan("Microsoft Windows [Version 10.0.19045.3803] (c) Microsoft Corporation. All rights reserved.", "system-text") + "\n" +
  createColoredSpan(PROMPT.trim(), "path-text") + "\n" +
  createColoredSpan("Type 'run code' to start the program or 'help' for available commands.", "message-text") + "\n";

async function typeText(text, className, speed = 50) {
  const lines = text.split(/\n/);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!terminal.lastChild || terminal.lastChild.className !== className) {
      const span = document.createElement("span");
      span.className = className;
      terminal.appendChild(span);
    }

    for (let char of line) {
      terminal.lastChild.textContent += char;
      await new Promise((resolve) => setTimeout(resolve, speed));
      terminal.scrollTop = terminal.scrollHeight;
    }

    if (i < lines.length - 1) {
      terminal.appendChild(document.createTextNode("\n"));
    }
  }
}

async function typeLines(lines) {
  for (const line of lines) {
    await typeText(fill(line.text), line.style);
  }
}

function sendResponse(response) {
  if (!CONFIG.scriptUrl.startsWith("https://")) return;
  fetch(CONFIG.scriptUrl, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ response, crush: CONFIG.crushName }),
    headers: { "Content-Type": "application/json" },
  });
}

document.querySelector(".close").addEventListener("click", () => {
  const confirmation = confirm("Are you sure you want to close this program?");
  if (confirmation) window.close();
});

document.querySelector(".minimize").addEventListener("click", () => {
  document.body.style.opacity = "0.5";
  setTimeout(() => (document.body.style.opacity = "1"), 1000);
});

document.querySelector(".maximize").addEventListener("click", () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else document.exitFullscreen();
});

document.querySelector(".terminal-content").addEventListener("click", () => {
  input.focus();
});

input.addEventListener("keypress", async function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    const promptEcho = document.createElement("span");
    promptEcho.className = "path-text";
    promptEcho.textContent = PROMPT;
    terminal.appendChild(promptEcho);
    terminal.appendChild(document.createTextNode(`${command}\n`));
    input.value = "";

    if (command === "run code" && !confessionShown) {
      confessionShown = true;
      await typeLines(CONFIG.confession);
    } else if ((command === "yes" || command === "no") && confessionShown) {
      await typeLines(command === "yes" ? CONFIG.yesReply : CONFIG.noReply);
      sendResponse(command);
      await typeText("You may now exit the program...\n", "system-text");
      input.disabled = true;
      input.style.display = "none";
    } else if (command === "cls") {
      terminal.innerHTML = "";
    } else if (command === "help") {
      terminal.innerHTML += createColoredSpan(`Available commands:\nrun code - Start the program\ncls      - Clear screen\nhelp     - Show this help message\n`, "system-text");
    } else if (command !== "") {
      const err = document.createElement("span");
      err.className = "error-text";
      err.textContent = `'${command}' is not recognized as an internal or external command.\n`;
      terminal.appendChild(err);
    }
    terminal.scrollTop = terminal.scrollHeight;
  }
});

document.querySelector(".window-controls").addEventListener("mouseup", (e) => {
  e.stopPropagation();
  setTimeout(() => input.focus(), 0);
});

function createColoredSpan(text, className) {
  return `<span class="${className}">${text}</span>`;
}

input.focus();
