// import { PokemonButtonContext } from "./pokemonContext";

export interface MainProps {}

export interface PokemonState {
  id: string;
  name: string;
  caught?: boolean;
}

export interface State {
  pokemonData: PokemonState[];
}

export type Action =
  | { type: "SET_POKEMON"; payload: PokemonState[] }
  | { type: "CAUGHT_POKEMON"; payload: { id: string } };

// export interface PokemonButtonContextType {
//   leading?: () => JSX.Element;
//   trailing?: () => JSX.Element;
// }
export interface handlePokemonContextType {
  handlePokemon: (id: string) => void;
}
