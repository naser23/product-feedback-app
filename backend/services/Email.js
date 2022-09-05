const nodemailer = require("nodemailer");
// const dotenv = require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "hotmail",
  secure: false,
  auth: {
    user: process.env.VERIFICATION_EMAIL,
    pass: process.env.VERIFICATION_PASSWORD,
  },
});

async function verifyUserEmail(name, userEmail, token) {
  try {
    let info = transporter.sendMail({
      from: process.env.VERIFICATION_EMAIL,
      to: userEmail,
      subject: `Hello ${name}! please verify your email by clicking the link.`,
      html: "http://localhost:5000/verifyUserEmail/" + name + "/" + token,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = verifyUserEmail;
