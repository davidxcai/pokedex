import { TextInput } from "./components/TextInput";
import { LoadingScreen } from "./components/LoadingScreen";
import { usePokemon } from "./context/pokemonProvider";
import { PokeDex } from "./components/PokeDex";
import { Pokemon } from "./components/Pokemon";

function App() {
  const { guessPokemon, fetchPokemon } = usePokemon();

  const isLoading = guessPokemon.isPending || fetchPokemon.isLoading;
  const pokemonData = fetchPokemon.data;

  // listen to pokemon guess status

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <PokeDex>
        <>
          {!isLoading && !pokemonData && <TextInput />}
          {isLoading && <LoadingScreen />}
          {pokemonData && <Pokemon pokemon={pokemonData} />}
        </>
      </PokeDex>
    </div>
  );
}

export default App;
