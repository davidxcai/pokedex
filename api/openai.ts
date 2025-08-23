import "dotenv/config";
import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Missing prompt" });
        }

        const response = await client.responses.create({
            model: "gpt-5",
            input: prompt,
        });

        res.status(200).json({ text: response.output_text });
    } catch (error: any) {
        console.error("OpenAI API Error:", error);
        res.status(500).json({
            error: error.message || "Internal Server Error",
        });
    }
}
