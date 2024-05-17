import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { pokemonSlice } from "./pokemon/pokemonSlice";
import { rootSaga } from "./rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer, // Add the pokemon reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for actions
    }).concat(sagaMiddleware), // Add saga middleware
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Define RootState type as the return type of store's getState function
export type RootState = ReturnType<typeof store.getState>;
// Define AppDispatch type as the store's dispatch function type
export type AppDispatch = typeof store.dispatch;

export default store;
