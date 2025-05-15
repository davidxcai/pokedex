import { usePokemon } from "../context/pokemonProvider";

export function TextInput() {
  const { input } = usePokemon();
  return (
    <textarea
      defaultValue={input.current}
      placeholder="Describe a Pokemon"
      onChange={(e) => (input.current = e.target.value)}
      className="grow text-white"
    ></textarea>
  );
}
