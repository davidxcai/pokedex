import { useWhosThatPokemon } from "../context/pokemonProvider";

export function TextInput() {
    const { input, setInput } = useWhosThatPokemon();
    return (
        <textarea
            value={input}
            placeholder="Describe a Pokemon"
            onChange={(e) => setInput(e.target.value)}
            className="grow text-white"
        ></textarea>
    );
}
