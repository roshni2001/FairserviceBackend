// mailer.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'fairservicex@gmail.com',
    pass: 'zmdfaizowuyrwhrv',
  },
});

export const contactUs = async (username, email, message) => {
  console.log('inside', email, username);

  try {
    const mailOptions = {
      from: `${username}`,
      to: 'fairservicex@gmail.com',
      subject: `FairServiceX: ${username} wants to contact you!`,
      html: `Email:${email} <br> ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email has been sent:', info.response);
    
    // Return true to indicate success
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return false to indicate failure
    return false;
  }
};
