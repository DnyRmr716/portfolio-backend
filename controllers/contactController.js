const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Configure Nodemailer with SendGrid
    const transporter = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY, // Use your SendGrid API key
      })
    );

    // Send the email
    await transporter.sendMail({
      from: 'sendingtest111@gmail.com', // Replace with your verified SendGrid sender email
      to: '01dromero10@gmail.com',   // Your email address to receive the message
      subject: subject,
      text: `From: ${name} <${email}>\n\n${message}`, // Message body
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = { sendEmail };
