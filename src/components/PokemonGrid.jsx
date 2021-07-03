import * as React from "react";
import PokemonCard from "./PokemonCard";

const PokemonGrid = ({ pokemonList }) => {
  return (
    <div className="PokemonGrid">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonGrid;
