# ConfessLikeAProgrammer

Ginawa ko 'to para mag confess sa crush ko. HAHAHAHA!

Basically, it's a fake Command Prompt (yung black na window sa Windows) na pag tinype ni crush yung `run code`, lalabas yung confession mo letter by letter, parang hacker movie. Tapos sasagot siya ng `yes` or `no`, and pwede ka pang makatanggap ng email kung ano sagot niya. 👀

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

# 📖 Step-by-step Guide (kahit hindi ka IT/CS, kaya mo 'to!)

Chill lang, walang kailangan i-install. Browser lang (Chrome, Edge, etc.) tsaka Gmail account. Mga 15–20 minutes lang 'to.

Ito yung gagawin natin:

1. Gagawa ng GitHub account (dito naka-save yung website mo)
2. Kokopyahin yung project na 'to papunta sa account mo
3. Ilalagay yung pangalan niyo tsaka yung message mo
4. *(Optional)* I-setup yung email para malaman mo agad sagot niya
5. I-publish yung website para may link ka na pwedeng i-send
6. I-test, tapos send na kay crush!

> ⚠️ **Heads up:** Yung website at yung message mo ay **public**. Ibig sabihin, kahit sino na may link or maghanap sa GitHub account mo, makikita yung message. So wag kang maglagay ng sobrang personal na info (address, phone number, etc.).

---

## Step 1: Gumawa ng GitHub account

> Kung may GitHub account ka na, skip mo na 'to, go to Step 2.

GitHub = parang Google Drive pero para sa code. Dito natin ilalagay yung website, tapos sila na din mag-ho-host nito for free.

1. Punta ka sa [https://github.com/signup](https://github.com/signup).
2. Ilagay yung email mo, gawa ng password, tapos pili ng **username**.
   - Tip: Yung username mo ay makikita sa link ng website mo (e.g. `https://juandelacruz.github.io/...`), so pili ka ng hindi cringe. HAHAHA
3. Sagutan yung puzzle/verification, tapos click **Create account**.
4. Check mo email mo, may code silang isesend. I-type mo lang yun para ma-verify yung account.
5. Kung may mga tanong sila (like "how many team members", etc.), pwede mo lang i-skip or piliin yung free/personal options.

Done! May GitHub account ka na. 🎉

## Step 2: Kopyahin (Fork) yung project

Ang "fork" ay basically kokopyahin mo yung project ko papunta sa account mo, para pwede mo siyang i-edit nang hindi naaapektuhan yung akin.

1. Make sure naka-login ka sa GitHub.
2. Punta ka dito: [https://github.com/hmcldryl/ConfessLikeAProgrammer](https://github.com/hmcldryl/ConfessLikeAProgrammer)
3. Sa upper right ng page, click mo yung **Fork** button.
4. Sa next page, wag mo nang galawin yung settings. Click mo lang **Create fork**.
5. Hintayin lang saglit. Pag tapos, mapupunta ka sa copy mo, makikita mo sa taas na `your-username/ConfessLikeAProgrammer`.

## Step 3: Ilagay yung names at message mo

Lahat ng kailangan mong palitan ay nasa isang file lang: `script.js`.

1. Sa fork mo (yung page na `your-username/ConfessLikeAProgrammer`), click mo yung file na **`script.js`**.
2. Sa right side, click mo yung **pencil icon ✏️** (Edit this file).
3. Sa pinakataas ng file, makikita mo yung `CONFIG`. Ito yung papalitan mo:

   ```javascript
   yourName: "YOUR_NAME",
   crushName: "CRUSH_NAME",
   ```

   Palitan mo yung nasa loob ng quotes `" "`. Example:

   ```javascript
   yourName: "Juan",
   crushName: "Maria",
   ```

   > Tip: Mas okay kung isang word lang at walang space, kasi lalabas din 'to sa "folder path" sa screen (e.g. `C:\Users\Juan\HelloMaria>`).

4. Tapos sa baba, may `confession`, `yesReply`, at `noReply`. Dito mo ilalagay yung message mo. Bawat line ganito yung itsura:

   ```javascript
   { text: "Yung message mo dito\n\n", style: "message-text" },
   ```

   - **`text`** — yung mismong message. Palitan mo lang yung nasa loob ng `[ ]`, tapos burahin mo na din yung `[ ]`.
   - **`style`** — yung kulay ng text. Pwede mong gamitin:
     - `"message-text"` - white, normal na message
     - `"code-block"` - light blue
     - `"heart-text"` - pink, para sa mga kilig lines 💕
     - `"loading-text"` - sky blue, para sa "Loading..." vibes
     - `"system-text"` - teal, parang system message
     - `"path-text"` - yellow
     - `"error-text"` - red
   - **`{crush}`** at **`{you}`** — automatic na mapapalitan ng pangalan niyo. So `"Hi {crush},"` magiging `"Hi Maria,"`.
   - **`\n`** — ibig sabihin new line (enter). Yung **`\n\n`** naman ay new line + isang blank line.

   **Ingat lang sa ilang bagay** para di masira:
   - Wag mong buburahin yung `"` sa start at end ng text.
   - Kung gusto mong gumamit ng `"` sa loob ng message mo, gamitin mo nalang `'` (single quote) or lagyan mo ng backslash: `\"`.
   - Wag mong kakalimutan yung comma `,` sa dulo ng bawat line.
   - Pwede kang mag-add ng bagong line, i-copy mo lang yung buong `{ text: ..., style: ... },` tapos i-paste sa baba.
   - Pwede ka din magbura ng line na di mo kailangan, burahin mo lang yung buong line.

5. Pag tapos ka na, click mo yung green na **Commit changes...** button sa upper right, tapos **Commit changes** ulit sa popup. (Ang "commit" ay basically "save".)

> Yung `scriptUrl` naman, babalikan natin yan sa Step 4.

## Step 4 (Optional): Email notification pag sumagot na siya

Kung gusto mong makatanggap ng email pag nag `yes` or `no` na siya, gawin mo 'to. Kung ayaw mo, skip mo na, go to Step 5. Gagana pa din yung website kahit wala 'to.

Gagamit tayo ng **Google Apps Script** — free tool ni Google na pwedeng mag-send ng email for you.

### 4.1 Gumawa ng Apps Script project

1. Punta ka sa [https://script.google.com](https://script.google.com) tapos login gamit yung Gmail mo.
2. Click mo yung **New project** (upper left).
3. May lalabas na editor na may laman na `function myFunction() { }`. **Burahin mo lahat** yan.
4. Balik ka sa GitHub, open mo yung file na [`appscript/Code.gs`](appscript/Code.gs), tapos i-copy mo lahat ng laman. (May copy button sa upper right ng file, yung icon na dalawang square.)
5. I-paste mo sa Apps Script editor.
6. Hanapin mo 'tong line na 'to sa taas:

   ```javascript
   const YOUR_EMAIL = "your-email@gmail.com";
   ```

   Palitan mo ng email mo, dito mo kasi matatanggap yung sagot niya.
7. Sa taas, click mo yung **Untitled project** para i-rename, e.g. `ConfessLikeAProgrammer`.
8. Click mo yung **Save** icon 💾 (or `Ctrl + S`).

### 4.2 Bigyan ng permission yung script (i-test na din)

1. Sa toolbar sa taas, may dropdown katabi ng **Run** at **Debug**. Piliin mo yung **`testEmail`**.
2. Click mo **Run**.
3. Hihingi siya ng permission. Click **Review permissions**, tapos piliin yung Google account mo.
4. Lalabas yung **"Google hasn't verified this app"**. Normal lang 'to, kasi ikaw mismo gumawa ng app, hindi pa siya na-review ni Google. Safe 'to kasi sa'yo lang 'tong script.
   - Click mo **Advanced** (sa lower left).
   - Click mo **Go to ConfessLikeAProgrammer (unsafe)**.
   - Click **Allow**.
5. Check mo yung Gmail mo, dapat may email ka na with subject **"ConfessLikeAProgrammer test"**. Kung meron, gumagana na! 🎉

### 4.3 I-deploy as Web App

Kailangan natin ng link para makausap ng website mo yung script na 'to.

1. Sa upper right, click mo **Deploy** → **New deployment**.
2. Sa tabi ng "Select type", click mo yung **gear icon ⚙️** → piliin **Web app**.
3. I-setup mo ng ganito:
   - **Description:** kahit ano, e.g. `v1`
   - **Execute as:** `Me (your-email@gmail.com)`
   - **Who has access:** `Anyone` ← **important 'to**, kasi kung hindi, di ka makakatanggap ng email.
4. Click **Deploy**.
5. Ibibigay niya yung **Web app URL**, mukhang ganito: `https://script.google.com/macros/s/AKfy..../exec`. Click **Copy**.

### 4.4 Ilagay yung URL sa website

1. Balik ka sa GitHub fork mo, open mo ulit yung `script.js`, click mo yung pencil icon ✏️.
2. Hanapin mo 'to:

   ```javascript
   scriptUrl: "PASTE_YOUR_APPS_SCRIPT_URL_HERE",
   ```

3. Palitan mo ng URL na kinopya mo (dapat nasa loob pa din ng quotes):

   ```javascript
   scriptUrl: "https://script.google.com/macros/s/AKfy..../exec",
   ```

4. Click **Commit changes...** → **Commit changes**.

> **Note:** Kung babaguhin mo ulit yung code sa Apps Script in the future, kailangan mo siyang i-deploy ulit: **Deploy** → **Manage deployments** → pencil icon ✏️ → sa **Version** piliin **New version** → **Deploy**. Kung hindi, yung luma pa din yung tatakbo.

Kung gusto mo pa magbasa about Apps Script:
- [Apps Script Overview](https://developers.google.com/apps-script/overview)
- [Web Apps guide](https://developers.google.com/apps-script/guides/web)
- [GmailApp reference](https://developers.google.com/apps-script/reference/gmail/gmail-app)

## Step 5: I-publish yung website (GitHub Pages)

GitHub Pages = free hosting ni GitHub. Dito magkakaroon ng link yung website mo.

1. Sa fork mo, click mo yung **Settings** tab (yung may gear icon ⚙️, nasa taas ng page).
2. Sa left sidebar, click mo **Pages**.
3. Sa **Build and deployment**, under **Source**, piliin mo **Deploy from a branch**.
4. Under **Branch**, piliin mo **`main`** tapos **`/ (root)`**, then click **Save**.
5. Hintayin mo mga 1–3 minutes. I-refresh mo yung page, tapos sa taas lalabas yung **"Your site is live at ..."**.

Yung link mo ay magiging ganito:

```
https://your-username.github.io/ConfessLikeAProgrammer
```

> Kada may babaguhin ka sa files (Step 3 or 4.4), automatic na mag-u-update yung website after 1–3 minutes. Kung di pa nagbabago, try mo i-refresh with `Ctrl + Shift + R`.

## Step 6: I-test bago i-send!

1. Open mo yung link mo.
2. Type `run code` tapos Enter. Basahin mo kung tama lahat ng message at walang typo. HAHAHA
3. Type `yes` or `no` para ma-test yung ending.
   - Kung naka-setup yung email (Step 4), dapat may email ka nang matatanggap in a few seconds.
   - Kung gusto mong ulitin, i-refresh mo lang yung page.
4. Kung okay na lahat, send mo na kay crush yung link! Good luck! 🍀

## Troubleshooting

- **Blank yung page or walang lumalabas pag nag `run code`** — May mali sigurong na-edit sa `script.js`. Usually, kulang ng `"`, `,`, or may `"` sa loob ng message. Check mo ulit yung huling binago mo. Pwede mo din i-open yung website, press `F12`, tapos tingnan yung **Console** tab, nandun yung error kung saang line.
- **404 / "There isn't a GitHub Pages site here"** — Hintay ka lang ng ilang minutes, tapos check mo ulit kung tama yung settings sa Step 5.
- **Walang dumating na email** — Check mo:
  - Tama ba yung email sa `YOUR_EMAIL`?
  - Naka **Anyone** ba yung "Who has access" sa deployment?
  - Tama at buo ba yung `scriptUrl` sa `script.js` (dapat nagtatapos sa `/exec`)?
  - Check mo din yung Spam folder.
  - Sa Apps Script, click mo yung **Executions** (sa left sidebar, yung icon na parang list) para makita kung may error.

---

## Para sa mga techy 🤓

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

Kung gusto mo pang galawin yung itsura, nasa `style.css` lahat. Ito yung mga CSS classes para sa kulay ng text:

- `.system-text` - Teal, used for system messages
- `.path-text` - Yellow, used for directory paths
- `.code-block` - Light blue, used for code-like text
- `.message-text` - White, used for main message content
- `.loading-text` - Sky blue, used for loading messages
- `.heart-text` - Pink, used for emotional content
- `.error-text` - Red, used for error messages

## Contributing

Fork niyo lang 'tong project, gamitin niyo din sa mga crushes niyo. Who knows baka magwork din kayo. HAHAHAHA

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created with ❤️ by Daryll Homecillo
