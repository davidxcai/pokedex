import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { initialPrompt } from "./hooks/usePromptFormat";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const processInput = useMutation({
    mutationFn: (input: string) => {
      const prompt = initialPrompt(input);
      return axios.post("http://localhost:3001/generate", { prompt: prompt });
    },
    onSuccess: (data) => {
      // call the next function
      console.log(data?.data.text.trim());
      setResult(data?.data.text);
    },
    onError: (error) => {
      console.error("Error:", (error as Error).message);
    },
  });

  const handleSubmit = () => {
    setResult("");
    processInput.mutate(input);
  };

  return (
    <>
      <h1>PokeDex</h1>
      {processInput.isPending ? <p>Loading...</p> : null}
      {processInput.isError ? <p>Error generating content</p> : null}
      <p>{result}</p>
      <div className="card">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </>
  );
}

export default App;
