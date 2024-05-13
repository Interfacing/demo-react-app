import { all, fork } from "redux-saga/effects";
import pokemonSaga from "./pokemon/saga";

// Root saga that combines all individual sagas
export function* rootSaga() {
  yield all([fork(pokemonSaga)]);
}
