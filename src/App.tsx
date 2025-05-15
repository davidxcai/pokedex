import { PokeDex } from "./components/PokeDex";
import { PokedexScreen } from "./components/PokedexScreen";

function App() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <PokeDex>
        <PokedexScreen />
      </PokeDex>
    </div>
  );
}

export default App;
