import { useQuery } from "@tanstack/react-query";
import { Pokemon as PokemonType } from "../types";

async function fetchPokemonById(
    pokemonId?: number | null,
): Promise<PokemonType> {
    if (!pokemonId) {
        throw new Error("No Pokémon ID provided");
    }
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    if (!response.ok) {
        throw new Error(`Failed to fetch Pokémon data with id: ${pokemonId}`);
    }
    const data = await response.json();
    return data;
}

export function useFetchPokemonData(pokemonId: number | null) {
    return useQuery({
        queryKey: ["pokemon", pokemonId],
        queryFn: () => fetchPokemonById(pokemonId),
        enabled: !!pokemonId,
        gcTime: 1000 * 60 * 30, // 30 minutes
    });
}
