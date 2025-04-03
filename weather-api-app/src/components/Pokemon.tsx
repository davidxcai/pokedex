const Pokemon = ({ pokemon }: { pokemon: any }) => {
  return (
    <div className="flex flex-col">
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.front_default} alt="" />
    </div>
  );
};

export default Pokemon;
