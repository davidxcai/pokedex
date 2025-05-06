import { Pokemon as PokemonType } from "../types";

const stats = ["HP", "ATK", "DEF", "SP. ATK", "SP. DEF", "SPD"];

export function Pokemon({ pokemon }: { pokemon: PokemonType }) {
    return (
        <>
            <div className="flex flex-row text-xs">
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
                <div className="flex flex-col bg-orange-100 text-black">
                    <span>{pokemon.id}</span>
                    <span className="uppercase">{pokemon.name}</span>
                    {pokemon.types.map((type) => {
                        return (
                            <span key={type.type.name} className="uppercase">
                                {type.type.name}
                            </span>
                        );
                    })}
                    {pokemon.held_items.map((item) => {
                        return (
                            <span key={item.item.name}>{item.item.name}</span>
                        );
                    })}
                </div>
            </div>
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
