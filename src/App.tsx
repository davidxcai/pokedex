import { useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { initialPrompt } from "./hooks/usePromptFormat";
import Pokemon from "./components/Pokemon";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);

  const queryClient = useQueryClient();
  const someData = useQuery({
    queryKey: ["events"],
    queryFn: () => {
      return axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    },
  });

  console.log("All Queries:", queryClient.getQueryCache().getAll());

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
    <div className="flex flex-col gap-5">
      <h1>PokeDex</h1>
      {processInput.isPending ? <p>Searching...</p> : null}
      {processInput.isError ? <p>Error generating content</p> : null}
      {fetchPokemon.isError ? <p>Could not find Pokemon</p> : null}
      {fetchPokemon.isSuccess ? <Pokemon pokemon={result} /> : null}
      <div className="flex flex-col gap-5">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 h-30"
        ></textarea>
        <button onClick={() => handleSubmit()}>Search</button>
      </div>
    </div>
  );
}

export default App;
