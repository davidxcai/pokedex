import "dotenv/config";
import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const response = await client.chat.completions.create({
      model: "meta-llama/llama-4-scout-17b-16e-instruct", // Use Llama 4 for the best "trivia" logic
      messages: [{ role: "user", content: prompt }],
      temperature: 0.1, // Set to 0.1 so it stays very consistent with IDs
    });

    // Parse the ID string into a number
    const pokemonId = response.choices[0].message.content?.trim();

    res.status(200).json({ text: pokemonId || "201" });
  } catch (error: any) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({
      error: error.message || "Internal Server Error",
    });
  }
}
