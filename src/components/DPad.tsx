import { useQueryClient, useQuery } from "@tanstack/react-query";
import { fetchPokemonById } from "../hooks/useFetchPokemonData";
import type { Pokemon } from "../types";

const arrows = {
  up: "w-0 h-0 border-x-6 border-x-transparent border-b-8 border-b-gray-800 z-10 absolute",
  down: "↓",
  left: "←",
  right: "→",
};

const dPadStyles = "bg-gray-600 cursor-pointer hover:bg-gray-700";

export function DPad() {
  return (
    <div className="grid grid-cols-3 size-18">
      <div
        id="up"
        className={`${dPadStyles} col-span-1 col-start-2 border-t-1 border-x-1 border-black rounded-t-sm`}
      ></div>
      <div
        id="left"
        className={`${dPadStyles} col-start-1 border-l-1 border-y-1  border-black rounded-l-sm`}
      ></div>
      <div className="bg-gray-600 col-start-2 "></div>
      <div
        id="right"
        className={`${dPadStyles} col-start-3 border-r-1 border-y-1  border-black rounded-r-sm`}
      ></div>
      <div
        id="down"
        className={`${dPadStyles} col-span-1 col-start-2 border-x-1 border-b-1 border-black rounded-b-sm`}
      ></div>
    </div>
  );
}

async function getNextPokemon() {
  const queryClient = useQueryClient();
  const currentPokemon = queryClient.getQueryData<Pokemon>(["pokemon"]);
  if (!currentPokemon) return;
  const nextPokemonId = currentPokemon?.id + 1;
  const prevPokemonId = currentPokemon?.id - 1;

  const nextPokemon = await fetchPokemonById(nextPokemonId);
  const prevPokemon = await fetchPokemonById(prevPokemonId);
}
