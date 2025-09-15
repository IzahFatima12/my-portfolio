// api/newsletter.js
import admin from "firebase-admin";

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            // stored in Vercel as a single-line string with \n escape sequences
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
    });
}

const db = admin.firestore();

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end("Method Not Allowed");
    }

    try {
        const { email } = req.body;

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ error: "A valid email is required" });
        }

        await db.collection("emails").add({
            email,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        return res.status(200).json({ success: true, message: "Subscribed" });
    } catch (err) {
        console.error("Firebase admin error:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
