import { useState } from "react";
import { useWhosThatPokemon } from "./hooks/useApi";
import { PokeDex } from "./components/PokeDex";
import { Pokemon } from "./components/Pokemon";

function App() {
    const { guessPokemon, fetchPokemonData, pokemon, setPokemon } =
        useWhosThatPokemon();
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (input.trim() === "") return;
        guessPokemon.mutate(input);
    };

    const handleClear = () => {
        setInput("");
        setPokemon(null);
    };

    const loading = guessPokemon.isPending || fetchPokemonData.isLoading;

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <PokeDex>
                <>
                    {!pokemon && !loading ? (
                        <textarea
                            value={input}
                            placeholder="Describe a Pokemon"
                            onChange={(e) => setInput(e.target.value)}
                            className="grow text-white"
                        ></textarea>
                    ) : guessPokemon.isPending ? (
                        <p>Analyzing...</p>
                    ) : guessPokemon.isError ? (
                        <p>Error: Could not identify Pokemon</p>
                    ) : fetchPokemonData.isLoading ? (
                        <p>Getting Pokemon info...</p>
                    ) : fetchPokemonData.isError ? (
                        <p>Error: Pokemon not found</p>
                    ) : fetchPokemonData.isSuccess && pokemon ? (
                        <Pokemon pokemon={pokemon} />
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
