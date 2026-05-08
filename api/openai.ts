import "dotenv/config";
import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
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

    // 2. Use Gemini 3 Flash for that "extremely quick" speed you liked
    const response = await client.chat.completions.create({
      model: "gemini-3-flash-preview",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.1,
    });

    // 3. Extract the ID from the choices array
    const pokemonId = response.choices[0].message.content?.trim();

    console.log("Gemini Guess:", pokemonId);

    res.status(200).json({ text: pokemonId || "201" });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: error.message || "Internal Server Error",
    });
  }
}
