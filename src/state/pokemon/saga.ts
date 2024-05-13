import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPokemonStart,
  fetchPokemonSuccess,
  fetchPokemonFailure,
} from "./pokemonSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemon } from "./apis";
import { Pokemon } from "../../types/pokemonType";

// Generator function to handle the side effect of fetching Pokémon data
function* fetchPokemonSaga(action: PayloadAction<number>) {
  try {
    // Call the fetchPokemon API with the payload (ID) from the action
    const data: Pokemon[] = yield call(fetchPokemon, action.payload);
    // Dispatch a success action with the fetched data
    yield put(fetchPokemonSuccess(data));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // If an error occurs, dispatch a failure action with the error message
    yield put(fetchPokemonFailure(error.message));
  }
}

// Root saga to watch for fetchPokemonStart action and trigger fetchPokemonSaga
export default function* rootSaga() {
  yield takeLatest(fetchPokemonStart.type, fetchPokemonSaga);
}
