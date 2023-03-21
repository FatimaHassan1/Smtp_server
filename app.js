const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    // user: "cf18b85fa6e0c2",
    // pass: "9c012c619c1ec9",
  },
});

const message = {
  from: "your_email_account@domain.com",
  to: "recipient_email_account@domain.com",
  subject: "Hello!",
  text: "This is a test of Mailtrap and Nodemailer. ",
};

transport.sendMail(message, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
