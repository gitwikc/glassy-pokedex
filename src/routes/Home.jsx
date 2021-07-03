import * as React from "react";
import SearchBar from "../components/SearchBar";
import PokemonGrid from "../components/PokemonGrid";

const Home = (props) => {
  const [filter, setFilter] = React.useState("");
  const [pokemonList, setPokemonList] = React.useState([]);

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=300")
      .then((res) => res.json())
      .then(({ results }) => {
        setPokemonList(results);
      });
  }, []);

  return (
    <div className="Home">
      <SearchBar setSearchQuery={setFilter} />
      <PokemonGrid
        pokemonList={pokemonList.filter(
          (pokemon) =>
            pokemon.name.toLowerCase().includes(filter.toLowerCase()) ||
            filter.length === 0
        )}
      />
    </div>
  );
};

export default Home;
