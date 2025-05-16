# Who's That Pokémon?

A fun web app that lets **Gemini guess the name of a Pokémon** based on a custom prompt — then fetches detailed Pokémon info using the [PokéAPI](https://pokeapi.co/). Built with **Vite**, **Tailwind CSS**, and **Gemini API** for a hackathon competition.

The purpose of this project was to demonstrate a proof of concept using Gemini API to process natural language and use the results to fetch data from other APIs.

## Demo

-   [PokeDex](pokedex-bice-xi.vercel.app)

-   Try typing: "Famous mouse Pokemon"

---

## How It Works

1. A user inputs a clue or description.
2. The app sends that input to the **Gemini API** with a custom pre-built prompt.
3. Gemini returns a guess — the name of a Pokémon.
4. The app then fetches Pokémon info (stats, sprite, etc.) from **PokéAPI**.
5. Results are displayed in a custom Pokédex-style UI.

---

## Tech Stack

-   [Vite](https://vitejs.dev/) – fast frontend tooling
-   [Tailwind CSS](https://tailwindcss.com/) – utility-first CSS
-   [Gemini API](https://ai.google.dev/) – Google's LLM for the Pokémon guess
-   [PokéAPI](https://pokeapi.co/) – open Pokémon data
-   [React Query (TanStack Query)](https://tanstack.com/query) – data fetching
-   [Vercel](https://vercel.com/) – deployment platform

Built & Designed by David Cai- 2025
