import { combineReducers } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemon/pokemonSlice";

// Combine all slice reducers into a single root reducer
export const rootReducer = combineReducers({
  pokemon: pokemonSlice.reducer,
});

// Define the RootState type as the return type of rootReducer
export type RootState = ReturnType<typeof rootReducer>;
