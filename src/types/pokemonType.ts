export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  url: string;
  abilities?: PokemonAbility[];
  types?: PokemonType[];
  height?: number;
  weight?: number;
  base_experience?: number;
  sprites?: {
    front_default: string;
  };
}
