// =====================================================================
//  ConfessLikeAProgrammer - Google Apps Script
//  Sends you an email when your crush answers.
// =====================================================================

// Replace with your email (this is where their answer will be sent)
const YOUR_EMAIL = "your-email@gmail.com";

// =====================================================================
//  No need to touch anything below this line
// =====================================================================

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const crush = data.crush || "your crush";
  const saidYes = data.response === "yes";

  const subject = saidYes ? `${crush} said YES! ❤️` : `Response from ${crush}`;
  const body = saidYes
    ? `${crush} accepted your invitation! Congrats! 🎉`
    : `${crush} declined the invitation. Laban lang! 💪`;

  try {
    GmailApp.sendEmail(YOUR_EMAIL, subject, body);
    console.log("Email sent:", subject);
  } catch (error) {
    console.error("Error:", error);
    return jsonOutput({ status: "error", message: error.toString() });
  }

  return jsonOutput({ status: "success" });
}

// Run this once from the editor to give the script permission to send emails
// and to check if emails reach you.
function testEmail() {
  GmailApp.sendEmail(YOUR_EMAIL, "ConfessLikeAProgrammer test", "Gumagana na! 🎉");
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
