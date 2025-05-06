import { Pokemon as PokemonType } from "../types";

const stats = ["HP", "ATK", "DEF", "SP. ATK", "SP. DEF", "SPD"];

export function Pokemon({ pokemon }: { pokemon: PokemonType }) {
    return (
        <>
            <div className="flex flex-row text-xs">
                {/* Pokemon Image */}
                <div className="flex flex-col bg-purple-300 px-1 pb-1">
                    <div className="flex flex-row justify-between">
                        <span className="uppercase">{pokemon.name}</span>
                        {/* <span>Gender</span> */}
                    </div>
                    <img
                        className=" bg-gray-200"
                        src={pokemon.sprites.front_default ?? undefined}
                        alt={pokemon.name}
                    />
                </div>
                {/* Info */}
                <div className="grid grid-cols-3 bg-orange-100 text-black text-xs">
                    <span className="col-span-1">No.</span>
                    <span className="col-span-2">{pokemon.id}</span>
                    <span className="col-span-1">NAME</span>
                    <span className="uppercase col-span-2">{pokemon.name}</span>
                    <span className="col-span-1">TYPE</span>
                    {pokemon.types.map((type) => {
                        return (
                            <span
                                key={type.type.name}
                                className="uppercase col-span-1"
                            >
                                {type.type.name}
                            </span>
                        );
                    })}
                    <span className="col-span-1">ITEM</span>
                    <span className="col-span-2 uppercase">
                        {pokemon.held_items[0].item.name ?? "NONE"}
                    </span>
                </div>
            </div>
            {/* Stats */}
            <div className="flex flex-row text-xs justify-between bg-orange-100 text-black grow">
                {pokemon.stats.map((stat, index) => {
                    return (
                        <div key={stat.stat.name} className="flex flex-col">
                            <span className="uppercase">{stats[index]}</span>
                            <span>{stat.base_stat}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
