import { useMutation } from "@tanstack/react-query";

const url = import.meta.env.VITE_API_URL ?? "/api/gemini";

function promptInstruction(input: string) {
    return `
        You are a Pokédex expert assistant. Given a vague or descriptive reference to a Pokémon, return the closest matching Pokémon's National Dex ID.

        Input: "${input}"

        Instructions:
        - Output only the matching Pokémon’s ID number as an integer.
        - Do not include any extra text, punctuation, or formatting.
        - Do not include leading zeros.
        - Use knowledge of type, appearance, species, and known traits to infer the best match.
        - Prioritize Pokémon whose design clearly aligns with the description.
        - If multiple Pokémon are close, choose the most iconic or earliest by Pokédex number.
        - If no match is possible, return the ID of "Unown".

        Output format:
        pokemon-id
        `.trim();
}

async function guessPokemon(input: string) {
    const prompt = promptInstruction(input);
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
    });
    if (!response.ok) {
        throw new Error("Failed to generate Pokémon ID number");
    }

    const data = await response.json();
    return data.text.trim();
}

export function useGuessPokemon() {
    return useMutation({
        mutationFn: guessPokemon,
        onError: (error) => {
            console.error("Error:", (error as Error).message);
        },
    });
}
