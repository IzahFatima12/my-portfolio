const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;
    const name = `${firstName} ${lastName}`;

    const contactEmail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mail = {
      from: name,
      to: process.env.EMAIL_USER,
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    try {
      await contactEmail.sendMail(mail);
      res.status(200).json({ code: 200, message: 'Message sent successfully' });
    } catch (error) {
      res.status(500).json({ code: 500, message: 'Failed to send message', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
