import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { RootState } from '../../state/rootReducer';
import { Pokemon as PokemonType } from '../../types/pokemonType';
import { capitalizeFirstLetter, formatId } from '../../utils/stringUtils';
import { Layout } from '../../components/Layout/Layout';

export const Pokemon = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  // Select the Pokémon data from the Redux store
  const { data } = useSelector((state: RootState) => state.pokemon);

  // Find the specific Pokémon by name
  const pokemon: PokemonType | undefined = data.find(
    (pokemon) => pokemon.name === name,
  );

  return (
    <Layout>
      <Button label="Back" onClick={() => navigate('/')} primary />

      {/* Pokémon Details */}
      {pokemon ? (
        <div>
          <h1>
            {formatId(pokemon.id)} {capitalizeFirstLetter(pokemon.name)}
          </h1>
          <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          </div>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
          <p>
            Abilities:
            {pokemon.abilities
              .map((ability) => ability.ability.name)
              .join(', ')}
          </p>
          <p>Stats:</p>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Pokémon not found.</p>
      )}
    </Layout>
  );
};
