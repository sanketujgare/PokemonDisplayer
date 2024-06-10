import styles from "./Pokemon.module.scss";
import { PokemonProps } from "./Pokemon.types.ts";
import { handlePokemonContext } from "../Main/pokemonContext.ts";
import { useContext } from "react";

const Pokemon = ({ id, name, trailing, leading }: PokemonProps) => {
  const LeadingEl = trailing || (() => false);
  const TralingEl = leading || (() => false);

  const { handlePokemon } = useContext(handlePokemonContext);

  return (
    <div className={styles.Pokemon}>
      <TralingEl />

      <div className={styles.item} onClick={() => handlePokemon(id)}>
        {name}
      </div>
      <LeadingEl />
    </div>
  );
};

export default Pokemon;
