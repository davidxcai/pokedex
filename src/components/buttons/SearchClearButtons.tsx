import { usePokemon } from "../../context/pokemonProvider";

export function SearchButton() {
  const { input, guessPokemon } = usePokemon();

  const handleSubmit = () => {
    if (input.current.trim() === "") return;
    guessPokemon.reset();
    guessPokemon.mutate(input.current);
  };
  return (
    <>
      <button
        className="px-2 bg-blue-500 border-1 border-black rounded-full cursor-pointer"
        onClick={handleSubmit}
      >
        Search
      </button>
    </>
  );
}

export function ClearButton() {
  const { input, setCurrentPokemon } = usePokemon();
  const handleClear = () => {
    input.current = "";
    setCurrentPokemon(null);
  };
  return (
    <button
      className="px-2 bg-rose-500 border-1 border-black rounded-full cursor-pointer"
      onClick={handleClear}
    >
      Clear
    </button>
  );
}
