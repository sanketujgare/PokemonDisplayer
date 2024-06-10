import { Action, State } from "./Main.types";

export const pokemonReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_POKEMON":
      return { ...state, pokemonData: action.payload };
    case "CAUGHT_POKEMON":
      const data = state.pokemonData.map((poke) =>
        poke.id === action.payload.id ? { ...poke, caught: !poke.caught } : poke
      );
      return { ...state, pokemonData: data };
  }
};
