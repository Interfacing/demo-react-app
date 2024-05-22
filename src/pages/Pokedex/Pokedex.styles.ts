import styled from 'styled-components';
import { getTypeColor } from '../../utils/typeColors';

export const PokemonImage = styled.img`
  width: 100%;
  height: auto;
`;

export const PokemonName = styled.h2`
  font-size: var(--font-size-base);
  color: #333;
  margin: 10px 0;
`;

export const PokemonTypesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const PokemonType = styled.span<{ type: string }>`
  background-color: ${({ type }) => getTypeColor(type)};
  border-radius: 3px;
  color: white;
  padding: 5px 10px;
  text-transform: capitalize;
  font-size: var(--font-size-base);
`;
