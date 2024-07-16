import axios from "axios"
import { useEffect, useState } from "react"

const PokemonPreview = ({pokemonURL}) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() =>{
        axios
            .get(pokemonURL)
            .then(({data})=> setPokemon(data))
            .catch((err)=> console.log(err));
    }, []);

  return (
  <article>
    <header>
        <img src={
                pokemon?.sprites.versions["generation-v"]["black-white"]
                .front_default
            } 
             alt=""
        />
            
    </header>
    <span>N° {pokemon?.id}</span>
    <h4>{pokemon?.name}</h4>
    <ul>
        {pokemon?.types.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
        ))}
    </ul>
  </article>
  );
}

export default PokemonPreview;