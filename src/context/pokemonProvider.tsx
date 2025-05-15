import { useGuessPokemon } from "../hooks/useGuessPokemon";
import { useFetchPokemonData } from "../hooks/useFetchPokemonData";
import { useRef, useContext, createContext, ReactNode } from "react";

type PokemonContextType = {
  input: React.RefObject<string>;
  guessPokemon: ReturnType<typeof useGuessPokemon>;
  fetchPokemon: ReturnType<typeof useFetchPokemonData>;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export function PokemonProvider({ children }: { children: ReactNode }) {
  const input = useRef<string>("");
  const guessPokemon = useGuessPokemon();
  const fetchPokemon = useFetchPokemonData(guessPokemon.data);

  const values = {
    input,
    guessPokemon,
    fetchPokemon,
  };

  return (
    <PokemonContext.Provider value={values}>{children}</PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
