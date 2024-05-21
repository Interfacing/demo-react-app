import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pokedex } from "./pages/Pokedex/Pokedex";
import { Pokemon } from "./pages/Pokemon/Pokemon";
import { fetchPokedexStart } from "./state/pokemon/pokemonSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokedexStart(151));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  );
};

export default App;
