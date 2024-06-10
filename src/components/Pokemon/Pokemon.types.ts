export interface PokemonProps {
  id: string;
  name: string;
  trailing?: () => JSX.Element;
  leading?: () => JSX.Element;
  // handlePokemon: () => void;
}
