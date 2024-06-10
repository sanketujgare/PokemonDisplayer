import PokemonList from "../PokemonList/PokemonList.tsx";
import styles from "./Main.module.scss";
import { Action, MainProps, PokemonState, State } from "./Main.types.ts";
import {
  useState,
  useEffect,
  useReducer,
  ReducerAction,
  ReducerState,
} from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { pokemonReducer } from "./pokemonReducer.ts";
import { handlePokemonContext } from "./pokemonContext.ts";
// import { pokemonApI } from "../../services/Pokemon.services.ts";
// import axios from "axios";

const initialState: State = {
  pokemonData: [],
};





const Main = ({}: MainProps) => {
  // const [data, setData] = useState<PokemonState[]>([]);
  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  const getPokemon = async () => {
    try {
      // const data = pokemonApI();
      dispatch({
        type: "SET_POKEMON",
        payload: [
          { id: "1", name: "Bulbasur" },
          { id: "2", name: "Justur" },
          { id: "3", name: "Tonasur" },
          { id: "4", name: "Raichu" },
          { id: "5", name: "Pikachu" },
        ],
      });
    } catch (error) {
      console.log("");
    }
  };
  useEffect(() => {
    getPokemon();
  }, []);

  const leading = () => <HiArrowCircleLeft />;
  const trailing = () => <HiArrowCircleRight />;

  const handlePokemon = (id: string) => {
    dispatch({ type: "CAUGHT_POKEMON", payload: { id } });
  };

  const allPokemons = state.pokemonData.filter((item) => !item.caught);
  const caughtPokemons = state.pokemonData.filter((item) => item.caught);

  return (
    <handlePokemonContext.Provider value={{ handlePokemon }}>
      <div className={styles.PokemonContainer}>
        <div className={styles.AllPokemon}>
          <PokemonList
            title="All Pokemons"
            // handlePokemon={handlePokemon}
            data={allPokemons}
            trailing={trailing}
          />
        </div>
        <div className={styles.CaughtPokemon}>
          <PokemonList
            title="Caught Pokemons"
            // handlePokemon={handlePokemon}
            data={caughtPokemons}
            leading={leading}
          />
        </div>
      </div>
    </handlePokemonContext.Provider>
  );
};

export default Main;
