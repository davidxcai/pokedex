import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    })
);

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/generate", async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await client.responses.create({
            model: "gpt-5",
            input: prompt,
        });

        res.json({ text: response.output_text });
    } catch (error) {
        const status = err?.status ?? 500;
        const message =
            err?.error?.message || err?.message || "Internal Server Error";
        console.error("OpenAI API Error:", err);
        return res.status(status).json({ error: message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
