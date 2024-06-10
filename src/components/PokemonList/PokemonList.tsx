import { useState } from "react";
import Pokemon from "../Pokemon/Pokemon.tsx";
import styles from "./PokemonList.module.scss";
import { pokemon, pokemonListProps } from "./PokemonList.types.ts";
import { debounce } from "lodash";

const PokemonList = ({
  title,
  // handlePokemon,
  data,
  trailing,
  leading,
}: pokemonListProps) => {
  const [query, setQuery] = useState("");
  const onChange = (e: any) => {
    console.log("Changed value:", e.target.value);
    setQuery(e.target.value);
  };
  const debouncedOnChange = debounce(onChange, 1000);

  return (
    <div className={styles.PokemonListContainer}>
      <span className={styles.listTitle}>{title}</span>
      <input
        type="text"
        placeholder="Enter searching..."
        onChange={debouncedOnChange}
      />
      <div className={styles.PokemonList}>
        {data
          .filter((pokemon: pokemon) => {
            if (query === "") {
              return pokemon;
            } else if (
              pokemon.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return pokemon;
            }
          })
          .map((item: pokemon) => (
            <Pokemon
              id={item.id}
              name={item.name}
              trailing={trailing}
              leading={leading}
              // handlePokemon={() => handlePokemon(item.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default PokemonList;
