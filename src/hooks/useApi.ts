import { useQuery, useMutation } from "@tanstack/react-query";
import { initialPrompt } from "../hooks/usePromptFormat";
import {
    useState,
    useEffect,
    useContext,
    createContext,
    ReactNode,
} from "react";
import { Pokemon as PokemonType } from "../types";
import { W } from "mongodb";
const development = true;
const url = development ? "http://localhost:3001/generate" : "/api/gemini";

// ------------------ CONTEXT SETUP ------------------
interface WhosThatPokemonContextType {
    pokemon: PokemonType | null;
    setPokemon: (p: PokemonType | null) => void;
    guessPokemon: ReturnType<typeof useMutation>;
    fetchPokemonData: ReturnType<typeof useQuery>;
}

const WhosThatPokemonContext = createContext<WhosThatPokemonContextType | undefined>(undefined);


export function WhosThatPokemonProvider({ children }: { children: ReactNode }) {
    const [pokemonName, setPokemonName] = useState<string | null>(null);
    const [pokemon, setPokemon] = useState<PokemonType | null>(null);

    // Uses Gemini API by attaching a custom prompt to the request
    // Returns the name of the Pokemon
    const guessPokemon = useMutation({
        mutationFn: async (input: string) => {
            setPokemon(null);
            const prompt = initialPrompt(input);
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            });
            if (!response.ok) {
                throw new Error("Failed to generate Pokémon name");
            }

            const data = await response.json();
            return data.text.trim();
        },
        onSuccess: (data) => {
            setPokemonName(data);
        },
        onError: (error) => {
            console.error("Error:", (error as Error).message);
        },
    });

    // Fetches the Pokemon guessed by Gemini API from PokeAPI
    // Returns the Pokemon data
    const fetchPokemonData = useQuery({
        queryKey: ["pokemon", pokemonName],
        queryFn: async (): Promise<PokemonType> => {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
            );
            if (!response.ok) {
                throw new Error("Pokemon not found");
            }
            return response.json();
        },
        enabled: !!pokemonName, // Only run the query if pokemonName is not null
    });

    // Sets the Pokemon state when the data is fetched
    useEffect(() => {
        if (fetchPokemonData.data) {
            setPokemon(fetchPokemonData.data);
        }
    }, [fetchPokemonData.data]);

    return (
        <WhosThatPokemonContext.Provider
    )
}

export function useWhosThatPokemon() {
    const context = useContext(WhosThatPokemonContext);
    if (!context) {
        throw new Error("useWhosThatPokemon must be used within a WhosThatPokemonProvider");
    }
    return context;
}

