import { useMutation } from "@tanstack/react-query";
import { instructionPrompt } from "../hooks/usePromptFormat";

const development = true;
const url = development ? "http://localhost:3001/generate" : "/api/gemini";

async function guessPokemon(input: string) {
    const prompt = instructionPrompt(input);
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
    });
    if (!response.ok) {
        throw new Error("Failed to generate Pokémon name");
    }

    const data = await response.json();
    return data.text.trim();
}

export function useGuessPokemon() {
    const guessPokemonMutation = useMutation({
        mutationFn: guessPokemon,
        onError: (error) => {
            console.error("Error:", (error as Error).message);
        },
    });
    return guessPokemonMutation;
}
