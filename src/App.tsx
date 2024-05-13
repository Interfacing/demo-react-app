import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pokedex } from "./pages/Pokedex/Pokedex";

const App = () => {
  return (
    <Router>
      {/* Define the routing structure */}
      <Routes>
        {/* Define a route for the Pokedex page */}
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </Router>
  );
};

export default App;
