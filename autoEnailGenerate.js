// Function to generate email
function generateEmail(recipient, subject, body) {
    // Create the mailto link
    let mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto link in the default email client
    window.location.href = mailtoLink;
}

// Example usage
let recipient = "example@example.com";
let subject = "Meeting Reminder";
let body = `Dear [Recipient],

This is a reminder for our meeting scheduled on [Date] at [Time].

Best regards,
[Your Name]`;

generateEmail(recipient, subject, body);
