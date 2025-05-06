import { useGuessPokemon } from "../hooks/useGuessPokemon";
import { useFetchPokemonData } from "../hooks/useFetchPokemonData";
import {
    useState,
    useEffect,
    useContext,
    createContext,
    ReactNode,
} from "react";
import { Pokemon as PokemonType } from "../types";

interface WhosThatPokemonContextType {
    input: string;
    setInput: (input: string) => void;
    pokemonData: PokemonType | null;
    setPokemonData: (pokemonData: PokemonType | null) => void;
    guessPokemon: ReturnType<typeof useGuessPokemon>;
    fetchPokemonData: ReturnType<typeof useFetchPokemonData>;
}

const WhosThatPokemonContext = createContext<
    WhosThatPokemonContextType | undefined
>(undefined);

export function WhosThatPokemonProvider({ children }: { children: ReactNode }) {
    const [input, setInput] = useState<string>("");
    const [pokemonName, setPokemonName] = useState<string | null>(null);
    const [pokemonData, setPokemonData] = useState<PokemonType | null>(null);

    const guessPokemon = useGuessPokemon();
    const fetchPokemonData = useFetchPokemonData(pokemonName);

    useEffect(() => {
        if (guessPokemon.isPending) {
            setPokemonData(null);
        }
    }, [guessPokemon.isPending]);

    useEffect(() => {
        if (guessPokemon.isSuccess) {
            setPokemonName(guessPokemon.data);
        }
    }, [guessPokemon.isSuccess]);

    const { data } = fetchPokemonData;
    useEffect(() => {
        if (data) {
            setPokemonData(data ?? null);
        }
    }, [data]);

    return (
        <WhosThatPokemonContext.Provider
            value={{
                input,
                setInput,
                pokemonData,
                setPokemonData,
                guessPokemon,
                fetchPokemonData,
            }}
        >
            {children}
        </WhosThatPokemonContext.Provider>
    );
}

export function useWhosThatPokemon() {
    const context = useContext(WhosThatPokemonContext);
    if (!context) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}
