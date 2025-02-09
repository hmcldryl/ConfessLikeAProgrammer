# ConfessLikeAProgrammer

Ginawa ko 'to para mag confess sa crush ko. HAHAHAHA!

## Features

- Terminal-like interface with Windows CMD styling
- Interactive command input system
- Typewriter effect for message display
- Color-coded text for different types of messages
- Responsive window controls (minimize, maximize, close)
- Email notification system when response is received
- Mobile-friendly design

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome Icons
- Google Apps Script (for email notifications)

## Live Demo

Visit [https://hmcldryl.github.io/ConfessLikeAProgrammer](https://hmcldryl.github.io/ConfessLikeAProgrammer) to see the project in action.

## Available Commands

- `run code` - Start the confession program
- `cls` - Clear the screen
- `help` - Show available commands

## Setup and Deployment

1. Clone the repo:
```bash
git clone https://github.com/hmcldryl/ConfessLikeAProgrammer.git
```

2. If you want to use the email notification feature:
   - Create a new Google Apps Script project
   - Copy and deploy the following code:
   ```javascript
   function doOptions(e) {
      return ContentService.createTextOutput()
        .setHeader('Access-Control-Allow-Origin', 'https://hmcldryl.github.io')
        .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        .setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }
    
    function doPost(e) {
      console.log('Received POST request');
      console.log('Request data:', e.postData.contents);
      
      const response = JSON.parse(e.postData.contents).response;
      const subject = response === 'yes' ? 'Bethany Said Yes!' : 'Response from Bethany';
      const body = response === 'yes' ? 
        'She accepted the Valentine\'s date invitation!' : 
        'She declined the invitation.';
        
      console.log('Sending email with subject:', subject);
      
      try {
        GmailApp.sendEmail('your-email@gmail.com', subject, body);
        console.log('Email sent successfully');
      } catch (error) {
        console.error('Error:', error);
        return ContentService.createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.toString() }))
          .setMimeType(ContentService.MimeType.JSON)
          .setHeader('Access-Control-Allow-Origin', 'https://hmcldryl.github.io')
          .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
          .setHeader('Access-Control-Allow-Headers', 'Content-Type');
      }
    
      return ContentService.createTextOutput(JSON.stringify({ 'status': 'success' }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeader('Access-Control-Allow-Origin', 'https://hmcldryl.github.io')
        .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        .setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }
   ```
   - Replace `your-email@gmail.com` with your email address
   - Deploy as a web app and update the fetch URL in `index.html` with your deployment URL

3. Deploy to GitHub Pages:
   - Go to repo Settings > Pages
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/(root)" folder
   - Click Save

## Customization

Palitan niyo nalang yung names tsaka message, di ko na ginawang placeholder, kayo na bahala. Check niyo nalang itong mga CSS classes para sa appearance ng text na gusto niyo.

- `.system-text` - Light blue, used for system messages
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
