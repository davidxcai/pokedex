import { usePokemon } from "../../context/pokemonProvider";
import { useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient();
  const { input } = usePokemon();
  const handleClear = () => {
    input.current = "";
    queryClient.setQueryData(["pokemon"], null);
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
