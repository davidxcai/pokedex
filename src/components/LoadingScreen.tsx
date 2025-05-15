import { usePokemon } from "../context/pokemonProvider";
import { SpinningPokeball } from "./SpinningPokeball";

export function LoadingScreen() {
  const { guessPokemon, fetchPokemon } = usePokemon();

  return (
    <div className="flex flex-col justify-center items-center grow font-bold">
      {guessPokemon.isPending ? (
        <p>Analyzing...</p>
      ) : guessPokemon.isError ? (
        <p>Error: Could not identify Pokemon</p>
      ) : fetchPokemon.isLoading ? (
        <p>Getting Pokemon info...</p>
      ) : fetchPokemon.isError ? (
        <p>Error: Pokemon not found</p>
      ) : null}
      <SpinningPokeball />
    </div>
  );
}
