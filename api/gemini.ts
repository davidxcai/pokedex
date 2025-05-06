import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY! });

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Missing prompt" });
        }

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });

        console.log("Gemini Response:", response);

        res.status(200).json({ text: response.text });
    } catch (error: any) {
        console.error("Gemini API Error:", error);
        res.status(500).json({
            error: error.message || "Internal Server Error",
        });
    }
}
