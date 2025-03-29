export const initialPrompt = (input: string) => {
    return `The subject will be about Pokémon. Take this input (${input}) and extract the relevant information, formatting the output strictly as a JSON object. 

The output must be compatible with JSON.parse() in JavaScript. Ensure the output does not contain any extra spaces, new lines, or comments.

Format:
{
    "pokemon": {
        "name": "Pokemon Name",
        "type": ["Type 1", "Type 2"],
        "abilities": ["Ability 1", "Ability 2"],
        "moves": ["Move 1", "Move 2", "Move 3"]
    }
}

Example Input: "Glaceon"

Ensure that the output is valid JSON without any deviation from the format. 

    `;
};