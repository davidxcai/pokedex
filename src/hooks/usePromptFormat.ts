export const initialPrompt = (input: string) => {
    return `
        The subject will be about Pokemon.
        The user will provide this input: ${input} and they are going to describe the Pokemon by its appearance, region, shape, or any other characteristic.
        If no Pokemon name is provided, find the closest match and return the pokemon name.
        The output must only be the pokemon name in lowercase.
    `;
};
