import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

// 1. Initialize the official Google client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
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

    // 2. Call the model directly
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt, // This uses your tuned promptInstruction(input)
      config: {
        temperature: 1.0,
      },
    });

    console.log("Api response", response);

    // 3. Native format: the text is directly on response.text
    const pokemonId = response?.text?.trim();

    console.log("Pokemon ID:", pokemonId);

    res.status(200).json({ text: pokemonId || "201" });
  } catch (error: any) {
    console.error("Native Gemini Error:", error);
    res.status(500).json({
      error: error.message || "Internal Server Error",
    });
  }
}
