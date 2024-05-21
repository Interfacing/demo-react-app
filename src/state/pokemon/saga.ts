import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPokedexStart,
  fetchPokedexSuccess,
  fetchPokedexFailure,
} from "./pokemonSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchPokedex } from "./apis";
import { Pokemon } from "../../types/pokemonType";

// Generator function to handle the side effect of fetching Pokedex data
function* fetchPokedexSaga(action: PayloadAction<number>) {
  try {
    // Call the fetchPokedex API with the payload (ID) from the action
    const data: Pokemon[] = yield call(fetchPokedex, action.payload);
    // Dispatch a success action with the fetched data
    yield put(fetchPokedexSuccess(data));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // If an error occurs, dispatch a failure action with the error message
    yield put(fetchPokedexFailure(error.message));
  }
}

// Root saga to watch for fetchPokedexStart action and trigger fetchPokedexSaga
export default function* rootSaga() {
  yield takeLatest(fetchPokedexStart.type, fetchPokedexSaga);
}
