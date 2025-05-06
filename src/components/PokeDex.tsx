import { ReactNode } from "react";

type PokeDexProps = {
    children: ReactNode;
};

export function PokeDex({ children }: PokeDexProps) {
    return (
        <div className="flex flex-col bg-rose-600 aspect-2/3 border-2 border-black rounded-sm p-2">
            {/* Top of PokeDex */}
            <div className="flex flex-row gap-4 p-4">
                <div className="bg-white border-1 border-black size-15 rounded-full flex justify-center items-center p-1">
                    <circle className="bg-sky-500 rounded-full border-1 border-black grow h-full" />
                </div>

                <div className="flex gap-2">
                    <circle className="bg-red-500 border-1 border-black rounded-full size-3" />
                    <circle className="bg-yellow-500 border-1 border-black rounded-full size-3" />
                    <circle className="bg-green-500 border-1 border-black rounded-full size-3" />
                </div>
            </div>
            <div className="border-1 border-black p-8 mt-8">
                {/* Screen */}
                <div className="flex flex-col bg-gray-100 aspect-3/2 w-full border-1 border-black rounded-sm px-8 mb-8">
                    <div className="flex gap-6 mx-auto my-4">
                        <circle className="bg-red-500 rounded-full size-2 border-1 border-black" />
                        <circle className="bg-red-500 rounded-full size-2 border-1 border-black" />
                    </div>
                    {/* Screen Content */}
                    <div className="flex flex-col aspect-3/2 bg-sky-300 border-1 border-black">
                        {children}
                    </div>
                    {/* Below Screen */}
                    <div className="flex flex-row justify-between items-center my-4">
                        <circle className="bg-red-500 rounded-full border-1 border-black size-3" />
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
                        <div className="bg-gray-800 rounded-full size-10 border-1 border-black"></div>
                    </div>
                    {/* start select */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-6">
                            <div className="h-2 w-8 bg-rose-500 border-1 border-black rounded-full"></div>
                            <div className="h-2 w-8 bg-blue-500 border-1 border-black rounded-full"></div>
                        </div>
                        {/* Green screen */}
                        <div className="bg-emerald-600 h-12 w-20 border-1 border-black self-center"></div>
                    </div>
                    {/* D-pad */}
                    <div className="grid grid-cols-3 w-18">
                        <div className="bg-gray-800 col-span-1 col-start-2"></div>
                        <div className="bg-gray-800 col-start-1 col-end-4"></div>
                        <div className="bg-gray-800 col-span-1 col-start-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
