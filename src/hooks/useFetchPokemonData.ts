import { useQuery } from "@tanstack/react-query";
import { Pokemon as PokemonType } from "../types";

async function fetchPokemonDataQuery(
    pokemonName: string | null
): Promise<PokemonType> {
    if (!pokemonName) {
        throw new Error("No Pokémon name provided");
    }
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch Pokémon data");
    }
    const data = await response.json();
    return data;
}

export function useFetchPokemonData(pokemonName: string | null) {
    const fetchPokemonData = useQuery({
        queryKey: ["pokemon", pokemonName],
        queryFn: () => fetchPokemonDataQuery(pokemonName),
        enabled: !!pokemonName, // Only run the query if pokemonName is not null
    });

    return fetchPokemonData;
}
