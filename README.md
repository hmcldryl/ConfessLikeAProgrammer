# ConfessLikeAProgrammer

I made this to confess to my crush.

It's a fake Command Prompt (that black window on Windows). When your crush types `run code`, your confession shows up letter by letter, like a hacker movie. Then they answer `yes` or `no`, and you can even get an email telling you what they picked. 👀

## Live Demo

Visit [https://hmcldryl.github.io/ConfessLikeAProgrammer](https://hmcldryl.github.io/ConfessLikeAProgrammer) to see the project in action.

## Features

- Terminal-like interface with Windows CMD styling
- Interactive command input system
- Typewriter effect for message display
- Color-coded text for different types of messages
- Responsive window controls (minimize, maximize, close)
- Email notification system when response is received
- Mobile-friendly design

## Available Commands

- `run code` - Start the confession program
- `cls` - Clear the screen
- `help` - Show available commands

---

# 📖 Step-by-step Guide (even if you're not into IT/CS, you got this!)

No need to install anything. All you need is a browser (Chrome, Edge, etc.) and a Gmail account. This takes around 15–20 minutes.

Here's what we'll do:

1. Create a GitHub account (this is where your website will live)
2. Copy this project to your account
3. Put in your names and your message
4. *(Optional)* Set up email so you know their answer right away
5. Publish the website so you get a link you can send
6. Test it, then send it to your crush!

> ⚠️ **Heads up:** Your website and message are **public**. Anyone with the link, or anyone who looks at your GitHub account, can see the message. So don't put anything too personal in it (address, phone number, etc.).

---

## Step 1: Create a GitHub account

> Already have a GitHub account? Skip to Step 2.

GitHub is like Google Drive, but for code. This is where we'll put the website, and GitHub will also host it for free.

1. Go to [https://github.com/signup](https://github.com/signup).
2. Enter your email, create a password, and pick a **username**.
   - Tip: Your username will show up in your website's link (e.g. `https://juandelacruz.github.io/...`), so pick one you won't be embarrassed by.
3. Solve the puzzle/verification, then click **Create account**.
4. Check your email for a code from GitHub. Type it in to verify your account.
5. If they ask you questions (like "how many team members"), you can skip them or pick the free/personal options.

Done! You now have a GitHub account. 🎉

## Step 2: Copy (Fork) the project

"Forking" means copying my project into your own account, so you can edit it without touching mine.

1. Make sure you're logged in to GitHub.
2. Go here: [https://github.com/hmcldryl/ConfessLikeAProgrammer](https://github.com/hmcldryl/ConfessLikeAProgrammer)
3. In the upper right of the page, click the **Fork** button.
4. On the next page, leave the settings as they are and click **Create fork**.
5. Wait a few seconds. When it's done, you'll be on your copy. You'll see `your-username/ConfessLikeAProgrammer` at the top.

## Step 3: Put in your names and message

Everything you need to change is in one file: `script.js`.

1. In your fork (the `your-username/ConfessLikeAProgrammer` page), click the file **`script.js`**.
2. On the right side, click the **pencil icon ✏️** (Edit this file).
3. At the very top of the file, you'll see `CONFIG`. Change these:

   ```javascript
   yourName: "YOUR_NAME",
   crushName: "CRUSH_NAME",
   ```

   Replace what's inside the quotes `" "`. Example:

   ```javascript
   yourName: "Juan",
   crushName: "Maria",
   ```

   > Tip: Use one word with no spaces, because the names also show up in the "folder path" on screen (e.g. `C:\Users\Juan\HelloMaria>`).

4. Below that are `confession`, `yesReply`, and `noReply`. This is where your message goes. Each line looks like this:

   ```javascript
   { text: "Your message here\n\n", style: "message-text" },
   ```

   - **`text`** — the message itself. Replace the parts inside `[ ]`, and delete the `[ ]` too.
   - **`style`** — the color of the text. You can use:
     - `"message-text"` - white, normal message
     - `"code-block"` - light blue
     - `"heart-text"` - pink, for the sweet lines 💕
     - `"loading-text"` - sky blue, for "Loading..." vibes
     - `"system-text"` - teal, looks like a system message
     - `"path-text"` - yellow
     - `"error-text"` - red
   - **`{crush}`** and **`{you}`** — automatically replaced with your names. So `"Hi {crush},"` becomes `"Hi Maria,"`.
   - **`\n`** — means a new line (like pressing Enter). **`\n\n`** means a new line plus one blank line.

   **Be careful with a few things** so nothing breaks:
   - Don't delete the `"` at the start and end of the text.
   - If you want to use `"` inside your message, use `'` (single quote) instead, or add a backslash before it: `\"`.
   - Don't forget the comma `,` at the end of each line.
   - To add a new line, copy a whole `{ text: ..., style: ... },` line and paste it below.
   - To remove a line you don't need, just delete the whole line.

5. When you're done, click the green **Commit changes...** button in the upper right, then **Commit changes** again in the popup. ("Commit" basically means "save".)

> We'll come back to `scriptUrl` in Step 4.

## Step 4 (Optional): Get an email when they answer

If you want to get an email when they answer `yes` or `no`, do this step. If not, skip to Step 5. The website still works without it.

We'll use **Google Apps Script**, a free Google tool that can send emails for you.

### 4.1 Create an Apps Script project

1. Go to [https://script.google.com](https://script.google.com) and log in with your Gmail.
2. Click **New project** (upper left).
3. An editor will open with `function myFunction() { }` in it. **Delete all of it.**
4. Go back to GitHub, open the file [`appscript/Code.gs`](appscript/Code.gs), and copy everything in it. (There's a copy button in the upper right of the file, the icon with two squares.)
5. Paste it into the Apps Script editor.
6. Find this line at the top:

   ```javascript
   const YOUR_EMAIL = "your-email@gmail.com";
   ```

   Replace it with your email. This is where their answer will be sent.
7. At the top, click **Untitled project** to rename it, e.g. `ConfessLikeAProgrammer`.
8. Click the **Save** icon 💾 (or press `Ctrl + S`).

### 4.2 Give the script permission (and test it)

1. In the toolbar at the top, there's a dropdown next to **Run** and **Debug**. Select **`testEmail`**.
2. Click **Run**.
3. It will ask for permission. Click **Review permissions**, then choose your Google account.
4. You'll see **"Google hasn't verified this app"**. This is normal. You made the app yourself, so Google hasn't reviewed it. It's safe because the script is only yours.
   - Click **Advanced** (lower left).
   - Click **Go to ConfessLikeAProgrammer (unsafe)**.
   - Click **Allow**.
5. Check your Gmail. You should have an email with the subject **"ConfessLikeAProgrammer test"**. If it's there, it works! 🎉

### 4.3 Deploy it as a Web App

We need a link so your website can talk to this script.

1. In the upper right, click **Deploy** → **New deployment**.
2. Next to "Select type", click the **gear icon ⚙️** → choose **Web app**.
3. Set it up like this:
   - **Description:** anything, e.g. `v1`
   - **Execute as:** `Me (your-email@gmail.com)`
   - **Who has access:** `Anyone` ← **this one is important**, otherwise you won't get any emails.
4. Click **Deploy**.
5. It will give you a **Web app URL** that looks like `https://script.google.com/macros/s/AKfy..../exec`. Click **Copy**.

### 4.4 Put the URL in your website

1. Go back to your GitHub fork, open `script.js` again, and click the pencil icon ✏️.
2. Find this:

   ```javascript
   scriptUrl: "PASTE_YOUR_APPS_SCRIPT_URL_HERE",
   ```

3. Replace it with the URL you copied (keep the quotes):

   ```javascript
   scriptUrl: "https://script.google.com/macros/s/AKfy..../exec",
   ```

4. Click **Commit changes...** → **Commit changes**.

> **Note:** If you change the Apps Script code later, you need to deploy it again: **Deploy** → **Manage deployments** → pencil icon ✏️ → under **Version** choose **New version** → **Deploy**. Otherwise the old version keeps running.

Want to read more about Apps Script?
- [Apps Script Overview](https://developers.google.com/apps-script/overview)
- [Web Apps guide](https://developers.google.com/apps-script/guides/web)
- [GmailApp reference](https://developers.google.com/apps-script/reference/gmail/gmail-app)

## Step 5: Publish the website (GitHub Pages)

GitHub Pages is GitHub's free hosting. This is what gives your website a link.

1. In your fork, click the **Settings** tab (the one with the gear icon ⚙️ at the top of the page).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **`main`** and **`/ (root)`**, then click **Save**.
5. Wait about 1–3 minutes. Refresh the page, and you'll see **"Your site is live at ..."** at the top.

Your link will look like this:

```
https://your-username.github.io/ConfessLikeAProgrammer
```

> Every time you change a file (Step 3 or 4.4), the website updates automatically after 1–3 minutes. If you don't see the change yet, refresh with `Ctrl + Shift + R`.

## Step 6: Test it before sending!

1. Open your link.
2. Type `run code` and press Enter. Read through the whole message and check for typos.
3. Type `yes` or `no` to test the ending.
   - If you set up email (Step 4), you should get an email within a few seconds.
   - To try again, just refresh the page.
4. If everything looks good, send the link to your crush! Good luck! 🍀

## Troubleshooting

- **The page is blank, or nothing happens after `run code`** — Something in `script.js` probably got broken while editing. Usually it's a missing `"` or `,`, or a `"` inside your message. Check the last thing you changed. You can also open your website, press `F12`, and look at the **Console** tab to see which line has the error.
- **404 / "There isn't a GitHub Pages site here"** — Wait a few more minutes, then double check the settings in Step 5.
- **No email arrived** — Check that:
  - The email in `YOUR_EMAIL` is correct.
  - "Who has access" in the deployment is set to **Anyone**.
  - The `scriptUrl` in `script.js` is correct and complete (it should end with `/exec`).
  - It's not in your Spam folder.
  - In Apps Script, click **Executions** (left sidebar, the list icon) to see if there are any errors.

---

## For the techy folks 🤓

### Project Structure

```
├── index.html        # Page structure
├── style.css         # All the styles
├── script.js         # CONFIG (names, messages, Apps Script URL) + terminal logic
└── appscript/
    └── Code.gs       # Google Apps Script for email notifications
```

### Run locally

```bash
git clone https://github.com/hmcldryl/ConfessLikeAProgrammer.git
```

Then open `index.html` in your browser. No build step, no dependencies.

### Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome Icons
- Google Apps Script (for email notifications)

### Notes

- The site sends `POST { response, crush }` to the Apps Script URL using `mode: "no-cors"`, so the response is opaque and no CORS headers are needed on the Apps Script side.
- If `scriptUrl` is still the placeholder, the request is skipped.

### Customization

If you want to change the look, everything is in `style.css`. These are the CSS classes for text colors:

- `.system-text` - Teal, used for system messages
- `.path-text` - Yellow, used for directory paths
- `.code-block` - Light blue, used for code-like text
- `.message-text` - White, used for main message content
- `.loading-text` - Sky blue, used for loading messages
- `.heart-text` - Pink, used for emotional content
- `.error-text` - Red, used for error messages

## Contributing

Feel free to fork this project and use it for your own crush. Who knows, it might work for you too.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created with ❤️ by Daryll Homecillo
