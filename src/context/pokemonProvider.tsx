import { useGuessPokemon } from "../hooks/useGuessPokemon";
import { useFetchPokemonData } from "../hooks/useFetchPokemonData";
import {
  useRef,
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type PokemonContextType = {
  input: React.RefObject<string>;
  currentPokemon: number | null;
  setCurrentPokemon: React.Dispatch<React.SetStateAction<number | null>>;
  guessPokemon: ReturnType<typeof useGuessPokemon>;
  fetchPokemon: ReturnType<typeof useFetchPokemonData>;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export function PokemonProvider({ children }: { children: ReactNode }) {
  const input = useRef<string>("");
  const [currentPokemon, setCurrentPokemon] = useState<number | null>(null);
  const guessPokemon = useGuessPokemon();
  const fetchPokemon = useFetchPokemonData(currentPokemon);

  useEffect(() => {
    if (guessPokemon.data) {
      setCurrentPokemon(Number(guessPokemon.data));
    }
  }, [guessPokemon.data]);

  const values = {
    input,
    currentPokemon,
    setCurrentPokemon,
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
