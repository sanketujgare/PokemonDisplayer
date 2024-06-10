// import { createContext } from "react";
// import { PokemonButtonContextType } from "./Main.types";

import { createContext } from "react";
import { handlePokemonContextType } from "./Main.types";

export const handlePokemonContext = createContext<handlePokemonContextType>({
  handlePokemon: (id: string) => {},
});
