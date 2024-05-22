import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "../../state/rootReducer";
import { Card, CardWrapper } from "../../components/Card/Card.styles";
import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { Pokemon } from "../../types/pokemonType";
import { capitalizeFirstLetter, formatId } from "../../utils/stringUtils";
import {
  PokemonImage,
  PokemonName,
  PokemonType,
  PokemonTypesContainer,
} from "./Pokedex.styles";

export const Pokedex = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data } = useSelector((state: RootState) => state.pokemon);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredPokemon, setHoveredPokemon] = useState<number | null>(null);

  const itemsPerPage = 36;

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Layout>
      <p>{t("welcome")}</p>
      <CardWrapper>
        {currentItems?.map((pokemon: Pokemon, index: number) => (
          <Card
            key={index}
            onClick={() => navigate(`/${pokemon.name}`)}
            onMouseEnter={() => setHoveredPokemon(pokemon.id)}
            onMouseLeave={() => setHoveredPokemon(null)}
          >
            <p>{formatId(pokemon.id)}</p>
            {pokemon.sprites?.front_default && (
              <PokemonImage
                src={
                  hoveredPokemon === pokemon.id
                    ? pokemon.sprites.back_default
                    : pokemon.sprites.front_default
                }
                alt={pokemon.name}
              />
            )}
            <PokemonName>{capitalizeFirstLetter(pokemon.name)}</PokemonName>
            <PokemonTypesContainer>
              {pokemon.types?.map((type, typeIndex) => (
                <PokemonType key={typeIndex} type={type.type.name}>
                  {type.type.name}
                </PokemonType>
              ))}
            </PokemonTypesContainer>
          </Card>
        ))}
        <div>
          <Button
            label="Previous"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          />
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            label="Next"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          />
        </div>
      </CardWrapper>
    </Layout>
  );
};
