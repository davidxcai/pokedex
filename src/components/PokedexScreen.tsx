import { Pokemon } from "./Pokemon";
import { TextInput } from "./TextInput";
import { LoadingScreen } from "./LoadingScreen";
import { usePokemon } from "../context/pokemonProvider";

export function PokedexScreen() {
  const { guessPokemon, fetchPokemon, currentPokemon } = usePokemon();

  const isLoading = guessPokemon.isPending || fetchPokemon.isLoading;
  const pokemonData = fetchPokemon.data;

  console.log("isLoading", isLoading);
  console.log("currentPokemon", currentPokemon);
  return (
    <>
      {!currentPokemon && !isLoading && <TextInput />}
      {isLoading && <LoadingScreen />}
      {pokemonData && currentPokemon && <Pokemon pokemon={pokemonData} />}
    </>
  );
}
