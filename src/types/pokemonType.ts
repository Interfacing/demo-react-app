export interface Ability {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Type {
  name: string;
  url: string;
}

export interface PokemonType {
  type: Type;
}

export interface Sprites {
  front_default: string;
  back_default: string;
  front_female: string;
  back_female: string;
  back_shiny: string;
  front_shiny: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
}

export interface Species {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: Sprites;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: Stat[];
  moves: Move[];
  species: Species;
}
