export interface pokemon {
  id: string;
  name: string;
  caught?: boolean;
}
export interface pokemonListProps {
  title: string;
  // handlePokemon: (id: string) => void;
  data: pokemon[];
  trailing?: () => JSX.Element;
  leading?: () => JSX.Element;
}
