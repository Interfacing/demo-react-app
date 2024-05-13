import { Pokemon } from "../../types/pokemonType";

// Define the response structure from the Pokémon API
export interface PokemonResponse {
  results: { name: string; url: string }[];
}

// Base URL for the Pokémon API
const API_URL = "https://pokeapi.co/api/v2/pokemon";

// Function to fetch more detailed information of a single Pokémon
const fetchPokemonDetails = async (url: string): Promise<Pokemon> => {
  const response = await fetch(url); // Fetch data from the given URL
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon details");
  }
  return response.json();
};

// Function to fetch a list of Pokémon with detailed information
export const fetchPokemon = async (limit: number = 10): Promise<Pokemon[]> => {
  const response = await fetch(`${API_URL}?limit=${limit}`); // Fetch Pokémon list with a limit
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon");
  }
  const data: PokemonResponse = await response.json();

  // Fetch detailed information for each Pokémon in the list
  const detailedPokemonPromises = data.results.map((pokemon) =>
    fetchPokemonDetails(pokemon.url)
  );
  return Promise.all(detailedPokemonPromises); // Return all detailed Pokémon data
};
