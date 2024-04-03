import nodemailer, { Transporter } from 'nodemailer';
import {generateAccessToken} from './generateToken'

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

async function sendMail(email: string, user_id: Number): Promise<void> {
  const transporter: Transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_ID || '',
      pass: process.env.APP_PASSWORD || '',
    },
  });
  const Token = generateAccessToken(user_id)
  
  const mailOptions: MailOptions = {
    from: process.env.EMAIL_ID || '',
    to: email,
    subject: 'reset password',
    text: `http://localhost:3000/resetPassword/${Token}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export default sendMail;
