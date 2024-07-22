const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5500, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "nowisnot987@gmail.com",
    pass: "brrp bwau igoc vtpj"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const name = firstName + lastName;
    const mail = {
      from: name,
      to: "nowisnot987@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.status(500).json({ code: 500, message: 'Failed to send message', error: error.message });
      } else {
        res.status(200).json({ code: 200, message: 'Message sent successfully' });
      }
    });
  });
  
