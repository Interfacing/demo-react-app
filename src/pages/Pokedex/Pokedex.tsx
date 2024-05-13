import { useEffect } from "react";
import { RootState } from "../../state/rootReducer";
import { fetchPokemonStart } from "../../state/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { Pokemon } from "../../types/pokemonType";
import { capitalizeFirstLetter, formatId } from "../../utils/stringUtils";

export const Pokedex = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonStart(151));
  }, [dispatch]);

  return (
    <div>
      {/* <Button
        onClick={() => setCount((count) => count + 1)}
        label={`count is ${count}`}
        primary
      /> */}

      <ul>
        <ul>
          {data.map((pokemon: Pokemon, index: number) => (
            <li key={index}>
              <h2>
                {formatId(pokemon.id)} {capitalizeFirstLetter(pokemon.name)}
              </h2>
              {pokemon.sprites?.front_default && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              )}
              <p>
                <strong>Abilities:</strong>
                {pokemon.abilities
                  ?.map((ability) => ability.ability.name)
                  .join(", ")}
              </p>
              <p>
                <strong>Types:</strong>
                {pokemon.types?.map((type) => type.type.name).join(", ")}
              </p>
              <p>
                <strong>Height:</strong> {pokemon.height}
              </p>
              <p>
                <strong>Weight:</strong> {pokemon.weight}
              </p>
              <p>
                <strong>Base Experience:</strong> {pokemon.base_experience}
              </p>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
