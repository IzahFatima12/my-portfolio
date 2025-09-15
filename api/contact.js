import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { firstName, lastName, email, phone, message } = req.body;

        try {
            // Send email with Resend
            await resend.emails.send({
                from: "Contact Form <onboarding@resend.dev>", // default sender
                to: "izah.fatimaa@gmail.com", // ✅ replace with your email
                subject: "New Contact Form Submission",
                html: `
          <h2>📩 New Contact Form Submission</h2>
          <p><b>Name:</b> ${firstName} ${lastName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Message:</b><br/>${message}</p>
        `,
            });

            return res.status(200).json({ code: 200, message: "Message sent successfully" });
        } catch (error) {
            console.error("Email send error:", error);
            return res.status(500).json({ code: 500, message: "Failed to send message" });
        }
    }

    return res.status(405).json({ message: "Method not allowed" });
}
