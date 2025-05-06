import { TextInput } from "./components/TextInput";
import { LoadingScreen } from "./components/LoadingScreen";
import { useWhosThatPokemon } from "./context/pokemonProvider";
import { PokeDex } from "./components/PokeDex";
import { Pokemon } from "./components/Pokemon";

function App() {
    const {
        pokemonData,
        setPokemonData,
        input,
        setInput,
        guessPokemon,
        fetchPokemonData,
    } = useWhosThatPokemon();

    const handleSubmit = () => {
        if (input.trim() === "") return;
        guessPokemon.mutate(input);
    };

    const handleClear = () => {
        setInput("");
        setPokemonData(null);
    };

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

            <div className="flex flex-row gap-5 ">
                <button
                    className="py-2 px-4 bg-gray-500 rounded-md cursor-pointer hover:bg-amber-500"
                    onClick={handleSubmit}
                >
                    Search
                </button>
                <button
                    className="py-2 px-4 bg-gray-500 rounded-md cursor-pointer hover:bg-amber-500"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>
        </div>
    );
}

export default App;
