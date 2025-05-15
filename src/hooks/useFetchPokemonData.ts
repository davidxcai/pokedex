import { useQuery } from "@tanstack/react-query";
import { Pokemon as PokemonType } from "../types";

export async function fetchPokemonById(
    pokemonId?: number | null,
): Promise<PokemonType> {
    if (!pokemonId) {
        throw new Error("No Pokémon ID provided");
    }
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    if (!response.ok) {
        throw new Error(`Failed to fetch Pokémon data for ${pokemonId}`);
    }
    const data = await response.json();
    return data;
}

export async function fetchPokemonByName(
    pokemonName?: string | null,
): Promise<PokemonType> {
    if (!pokemonName) {
        throw new Error("No Pokémon name provided");
    }
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
        throw new Error(`Failed to fetch Pokémon data for ${pokemonName}`);
    }
    const data = await response.json();
    return data;
}

export function useFetchPokemonData(pokemonName: string | null) {
    return useQuery({
        queryKey: ["pokemon"],
        queryFn: () => fetchPokemonByName(pokemonName),
        enabled: !!pokemonName, // Only run the query if pokemonName is not null
    });
}
