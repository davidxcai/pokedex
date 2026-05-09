import { useMutation } from "@tanstack/react-query";

const url = import.meta.env.VITE_API_URL ?? "/api/gemini.ts";

function promptInstruction(input: string) {
  return `
### ROLE
        You are a Pokémon Master and Lore Expert. Your goal is to identify a Pokémon based on specific descriptions, scene references, or vague traits.

        ### TASK
        Return ONLY the National Pokedex ID of the Pokémon that best fits the input.

        ### EXAMPLES
        - Input: "The bird Ash saw in the sky in the first episode" -> Output: 250
        - Input: "The blue turtle with cannons on its back" -> Output: 9
        - Input: "The pokemon that looks like a bunch of eggs" -> Output: 102
        - Input: "The god of all pokemon" -> Output: 493

        ### INSTRUCTIONS
        - If the description refers to a specific anime scene or movie event, prioritize the unique Pokémon featured in that moment over generic species.
        - Output ONLY the integer ID. No text, no periods, no leading zeros.
        - If you are uncertain or the description is truly nonsensical, return 201.
        - Do not explain your choice.

        ### INPUT
        Input: "${input}"
        
        Output:
        [pokemon-id]
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
  console.log(response);
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
