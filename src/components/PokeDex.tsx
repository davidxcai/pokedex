import { ReactNode } from "react";
import { useWhosThatPokemon } from "../context/pokemonProvider";

type PokeDexProps = {
    children: ReactNode;
};

export function PokeDex({ children }: PokeDexProps) {
    const { setPokemonData, input, setInput, guessPokemon } =
        useWhosThatPokemon();

    const handleSubmit = () => {
        if (input.trim() === "") return;
        guessPokemon.mutate(input);
    };

    const handleClear = () => {
        setInput("");
        setPokemonData(null);
    };
    return (
        <div className="flex flex-col bg-rose-600 border-1 border-black rounded-xl p-2">
            {/* Top of PokeDex */}
            <div className="flex flex-row gap-4 p-4">
                <div className="bg-white border-1 border-black size-15 rounded-full flex justify-center items-center p-1">
                    <div className="bg-sky-500 rounded-full border-1 border-black grow h-full flex justify-center items-center relative">
                        <div className="bg-sky-700 rounded-full size-10 absolute z-10"></div>
                        <div className="bg-sky-200 rounded-full size-5 border-3 border-sky-500 absolute z-20 top-0"></div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="bg-red-500 border-1 border-black rounded-full size-3" />
                    <div className="bg-yellow-500 border-1 border-black rounded-full size-3" />
                    <div className="bg-green-500 border-1 border-black rounded-full size-3" />
                </div>
            </div>
            <div className="border-1 border-black p-8 rounded-lg mt-auto">
                {/* Screen */}
                <div className="flex flex-col bg-gray-100 aspect-3/2 w-full border-1 border-black rounded-sm px-8 mb-8 rounded-bl-4xl">
                    <div className="flex gap-6 mx-auto my-4">
                        <div className="bg-red-500 rounded-full size-2 border-1 border-black" />
                        <div className="bg-red-500 rounded-full size-2 border-1 border-black" />
                    </div>
                    {/* Screen Content */}
                    <div className="flex flex-col aspect-3/2 bg-sky-300 border-1 border-black h-50">
                        {children}
                    </div>
                    {/* Below Screen */}
                    <div className="flex flex-row justify-between items-center my-4">
                        <div className="bg-red-500 rounded-full border-1 border-black size-3" />
                        <div className="flex flex-col gap-1">
                            <div className="border-t-2 border-black w-5" />
                            <div className="border-t-2 border-black w-5" />
                            <div className="border-t-2 border-black w-5" />
                            <div className="border-t-2 border-black w-5" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mx-2">
                    {/* Button */}
                    <div className="self-start">
                        <div className="bg-gray-600 rounded-full size-10 border-1 border-black"></div>
                    </div>
                    {/* start select */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-6 text-sm">
                            <button
                                className="px-2 bg-blue-500 border-1 border-black rounded-full cursor-pointer"
                                onClick={handleSubmit}
                            >
                                Search
                            </button>
                            <button
                                className="px-2 bg-rose-500 border-1 border-black rounded-full cursor-pointer"
                                onClick={handleClear}
                            >
                                Clear
                            </button>
                        </div>
                        {/* Green screen */}
                        <div className="bg-emerald-600 h-12 w-20 border-1 border-black self-center rounded-sm"></div>
                    </div>
                    {/* D-pad */}
                    <div className="grid grid-cols-3 size-18">
                        <div
                            id="up"
                            className="bg-gray-700 col-span-1 col-start-2 border-t-1 border-x-1 border-black rounded-t-sm"
                        ></div>
                        <div
                            id="left"
                            className="bg-gray-700 col-start-1 border-l-1 border-y-1  border-black rounded-l-sm"
                        ></div>
                        <div className="bg-gray-700 col-start-2 "></div>
                        <div
                            id="right"
                            className="bg-gray-700 col-start-3 border-r-1 border-y-1  border-black rounded-r-sm"
                        ></div>
                        <div
                            id="down"
                            className="bg-gray-700 col-span-1 col-start-2 border-x-1 border-b-1 border-black rounded-b-sm"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
