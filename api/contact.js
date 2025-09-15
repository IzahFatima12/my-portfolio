// api/contact.js

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { firstName, lastName, email, phone, message } = req.body;

        // For now: just log the data (it will show in Vercel logs)
        console.log("Contact form submitted:", {
            firstName,
            lastName,
            email,
            phone,
            message,
        });

        // Send response back to frontend
        return res.status(200).json({ code: 200, message: "Message received successfully" });
    }

    // Handle non-POST requests
    return res.status(405).json({ message: "Method not allowed" });
}
