import { usePokemon } from "../context/pokemonProvider";

const arrows = {
  up: "w-0 h-0 border-x-6 border-x-transparent border-b-8 border-b-gray-800 z-10 absolute",
  down: "↓",
  left: "←",
  right: "→",
};

const dPadStyles = "bg-gray-600 cursor-pointer hover:bg-gray-700";

export function DPad() {
  const { currentPokemon, setCurrentPokemon } = usePokemon();

  const fetchNextPokemon = () => {
    if (!currentPokemon) return;
    if (currentPokemon === 1302) return;
    setCurrentPokemon(currentPokemon + 1);
  };

  const fetchPrevPokemon = () => {
    if (!currentPokemon) return;
    if (currentPokemon === 1) return;
    setCurrentPokemon(currentPokemon - 1);
  };

  return (
    <div className="grid grid-cols-3 size-18">
      <button
        id="up"
        className={`${dPadStyles} col-span-1 col-start-2 border-t-1 border-x-1 border-black rounded-t-sm`}
        onClick={fetchPrevPokemon}
      ></button>
      <div
        id="left"
        className={`${dPadStyles} col-start-1 border-l-1 border-y-1  border-black rounded-l-sm`}
      ></div>
      <div className="bg-gray-600 col-start-2 "></div>
      <div
        id="right"
        className={`${dPadStyles} col-start-3 border-r-1 border-y-1  border-black rounded-r-sm`}
      ></div>
      <button
        id="down"
        className={`${dPadStyles} col-span-1 col-start-2 border-x-1 border-b-1 border-black rounded-b-sm`}
        onClick={fetchNextPokemon}
      ></button>
    </div>
  );
}
