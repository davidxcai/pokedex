import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { WhosThatPokemonProvider } from "./context/pokemonProvider";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={new QueryClient()}>
            <WhosThatPokemonProvider>
                <App />
            </WhosThatPokemonProvider>
            <ReactQueryDevtools
                initialIsOpen={false}
                buttonPosition="bottom-left"
            />
        </QueryClientProvider>
    </StrictMode>
);
