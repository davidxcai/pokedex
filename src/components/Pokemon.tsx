import { Pokemon as PokemonType } from "../types";

const stats = ["HP", "ATK", "DEF", "Sp.A", "Sp.D", "SPE"];
const typeColors: any = {
    bug: "bg-lime-300",
    dark: "bg-slate-800",
    dragon: "bg-linear-to-b from-indigo-500 to-red-500",
    electric: "bg-amber-400",
    fairy: "bg-pink-300",
    fighting: "bg-orange-700",
    fire: "bg-red-500",
    flying: "bg-indigo-300",
    ghost: "bg-purple-800",
    grass: "bg-green-500",
    ground: "bg-yellow-600",
    ice: "bg-cyan-300",
    normal: "bg-stone-400",
    poison: "bg-linear-to-b from-pink-500 to-fuchsia-500",
    psychic: "bg-pink-500",
    rock: "bg-yellow-900",
    steel: "bg-gray-400",
    water: "bg-blue-500",
};

export function Pokemon({ pokemon }: { pokemon: PokemonType }) {
    return (
        <>
            <div className="flex flex-row text-sm grow">
                {/* Pokemon Image */}
                <div className="flex flex-col bg-purple-300 p-1 border-r-1 border-purple-400 gap-1">
                    <img
                        id="pokemon-image"
                        className=" bg-gray-200 aspect-square border-1 border-gray-400 rounded-sm"
                        src={pokemon.sprites.front_default ?? undefined}
                        alt={pokemon.name}
                    />
                    {/* Pokemon Types */}
                    {pokemon.types.map((type) => {
                        return (
                            <span
                                key={type.type.name}
                                className={`uppercase text-xs rounded-md py-1 px-2 font-bold text-center border-1 border-gray-400 ${typeColors[type.type.name]}`}
                            >
                                {type.type.name}
                            </span>
                        );
                    })}
                </div>
                {/* Info */}
                <table className=" bg-orange-100 text-slate-900 uppercase text-left grow">
                    <tbody>
                        <tr>
                            <th className="pl-1">No.</th>
                            <td>{pokemon.id}</td>
                        </tr>
                        <tr>
                            <th className="pl-1">NAME</th>
                            <td>{pokemon.name}</td>
                        </tr>
                        {/* Stats */}
                        {pokemon.stats.map((stat, index) => {
                            return (
                                <tr key={stat.stat.name}>
                                    <th className="pl-1">{stats[index]}</th>
                                    <td>{stat.base_stat}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
