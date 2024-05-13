import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../types/pokemonType";

// Define the state interface for Pokémon data management
interface PokemonState {
  loading: boolean;
  data: Pokemon[];
  error: string | null;
  limit: number;
}

// Initialize the state with default values
const initialState: PokemonState = {
  loading: false,
  data: [],
  error: null,
  limit: 10,
};

// Create a slice for Pokémon with actions and reducers
export const pokemonSlice = createSlice({
  name: "pokemon", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Action to start fetching Pokémon data
    fetchPokemonStart(state, action: PayloadAction<number>) {
      state.loading = true;
      state.error = null;
      state.limit = action.payload;
    },
    // Action to handle successful fetch of Pokémon data
    fetchPokemonSuccess(state, action: PayloadAction<Pokemon[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    // Action to handle failure in fetching Pokémon data
    fetchPokemonFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export the actions to be used in components and sagas
export const { fetchPokemonStart, fetchPokemonSuccess, fetchPokemonFailure } =
  pokemonSlice.actions;
