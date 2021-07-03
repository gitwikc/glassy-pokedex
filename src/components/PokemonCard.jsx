import * as React from "react";

const typeColours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#FBD02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const PokemonTypeBadge = ({ type }) => {
  return (
    <span
      className="type_badge"
      style={{ backgroundColor: `${typeColours[type]}` }}
    >
      {type}
    </span>
  );
};

const PokemonCard = ({ pokemon }) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then(({ id, name, sprites, types, weight }) => {
        types = types.map((t) => t.type.name);
        setData({
          id,
          name,
          sprites: {
            small: sprites.front_default,
            large: sprites.other["official-artwork"].front_default,
          },
          types,
          weight,
        });
      });
  }, []);

  return data ? (
    <div className="PokemonCard">
      <div className="poke_img">
        <img src={data?.sprites?.small} alt={data?.name} />
      </div>
      <div className="poke_data">
        <div className="name">
          #{data?.id} {data?.name}
        </div>
        <div className="types">
          {data?.types?.map((type, i) => (
            <PokemonTypeBadge type={type} key={i} />
          ))}
        </div>
        <div className="weight">
          <span className="icon">monitor_weight</span> {data?.weight} lb
        </div>
      </div>
    </div>
  ) : (
    <div className="load">{pokemon.name} is loading</div>
  );
};

export default PokemonCard;
