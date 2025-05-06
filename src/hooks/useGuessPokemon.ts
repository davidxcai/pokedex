import { useMutation } from "@tanstack/react-query";

const url = import.meta.env.VITE_API_URL ?? "/api/gemini";

function promptInstruction(input: string) {
    return `
        You are an assistant that identifies Pokémon based on descriptions and vague references.

        Input: "${input}"

        Instructions:
        - Return only the closest matching Pokémon's name.
        - Output the name in all lowercase letters.
        - Do not explain your reasoning.
        - Do not include any additional text, punctuation, or formatting.
        - If no exact name is given, make your best guess based on appearance, region, shape, or traits.
        - If the Pokémon is not found, return "unown".

        Output format (strict):
        pokemon-name
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
