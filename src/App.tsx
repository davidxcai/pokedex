import { TextInput } from "./components/TextInput";
import { LoadingScreen } from "./components/LoadingScreen";
import { useWhosThatPokemon } from "./context/pokemonProvider";
import { PokeDex } from "./components/PokeDex";
import { Pokemon } from "./components/Pokemon";

function App() {
    const { pokemonData, guessPokemon, fetchPokemonData } =
        useWhosThatPokemon();

    const isLoading = guessPokemon.isPending || fetchPokemonData.isLoading;

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <PokeDex>
                <>
                    {!pokemonData && !isLoading ? (
                        <TextInput />
                    ) : isLoading ? (
                        <LoadingScreen />
                    ) : pokemonData ? (
                        <Pokemon pokemon={pokemonData} />
                    ) : null}
                </>
            </PokeDex>
        </div>
    );
}

export default App;
