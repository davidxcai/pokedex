import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { initialPrompt } from "./hooks/usePromptFormat";
import Pokemon from "./components/Pokemon";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);

  const processInput = useMutation({
    mutationFn: (input: string) => {
      const prompt = initialPrompt(input);
      return axios.post("http://localhost:3001/generate", { prompt: prompt });
    },
    onSuccess: (data) => {
      // call the next function
      const pokemonName = data?.data.text.trim();
      console.log(data?.data.text.trim());
      // setResult(data?.data.text);
      fetchPokemon.mutate(pokemonName);
    },
    onError: (error) => {
      console.error("Error:", (error as Error).message);
    },
  });

  const fetchPokemon = useMutation({
    mutationFn: (input: string) => {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
    },
    onSuccess: (data) => {
      console.log(data);
      setResult(data?.data);
    },
  });

  const handleSubmit = () => {
    setResult(null);
    processInput.mutate(input);
  };

  return (
    <>
      <h1>PokeDex</h1>
      {processInput.isPending ? <p>Searching...</p> : null}
      {processInput.isError ? <p>Error generating content</p> : null}
      {fetchPokemon.isError ? <p>Could not find Pokemon</p> : null}
      {fetchPokemon.isSuccess ? <Pokemon pokemon={result} /> : null}
      <div className="card">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>Search</button>
      </div>
    </>
  );
}

export default App;
