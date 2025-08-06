import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nicoo.ivanoff@gmail.com',
    pass: process.env.passEmail,
  },
});

export const sendVerificationEmail = (email) => {
  const mailOptions = {
    from:email,
    to: email,
    subject: 'Verifica tu cuenta',
    html: `<p>Haz clic en este enlace para verificar tu cuenta:</p>`
  };

  transporter.sendMail(mailOptions);
};
