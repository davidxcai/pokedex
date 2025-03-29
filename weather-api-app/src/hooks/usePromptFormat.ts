export const initialPrompt = (input: string) => {
    return `
        The subject will be about Pokemon.
        The user will provide this input: ${input} and they are going to describe the Pokemon by its appearance, region, shape, or any other characteristic.
        If no Pokemon name is provided, find the closest match and return the pokemon name.
        The output must only be the pokemon name in lowercase.
    `;
//     return `The subject will be about Pokémon. Take this input (${input}) and extract the relevant information, formatting the output strictly as a JSON object. 
//     The user may describe a Pokemon by its appearance, region, shape, or any other characteristic. If no Pokemon name is provided, find the closest match and generate the following info.
// The output must be compatible with JSON.parse() in JavaScript. Ensure the output does not contain any extra spaces, new lines, or comments.

// Format:
// {
//     "pokemon": {
//         "name": "Pokemon Name",
//         "type": ["Type 1", "Type 2"],
//         "abilities": ["Ability 1", "Ability 2"],
//         "moves": ["Move 1", "Move 2", "Move 3"]
//     }
// }

// Example Input: "Glaceon"

// Ensure that the output is valid JSON without any deviation from the format. 

//     `;
};