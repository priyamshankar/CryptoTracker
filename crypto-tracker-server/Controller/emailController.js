const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email', 
    port: 587,
    auth: {
      user: 'garry.fadel@ethereal.email',
      pass: 'qnvX9bxSCsmAexsTsZ',
    },
  });
  


  const sendEmailAlert = async (recipientEmail, subject, body) => {
    try {
      const mailOptions = {
        from: 'modesta72@ethereal.email', // Replace with your email address
        to: recipientEmail,
        subject: subject,
        html: body, // The email content in HTML format
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  module.exports = sendEmailAlert