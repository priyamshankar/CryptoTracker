const nodemailer = require('nodemailer');
const axios = require("axios");
const cron = require('node-cron');

const userDetail = require("../Model/userSchema");
const alertSh = require("../Model/alertSchema");


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email', 
    port: 587,
    auth: {
      user: 'modesta72@ethereal.email',
      pass: 'jDhr5f351FvN8UA2C7',
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