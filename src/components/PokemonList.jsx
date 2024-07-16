import PokemonPreview from "./PokemonPreview"

const PokemonList = ({pokemons}) => {
  return (
  <section className="pt-4 grid grid-cols-[repeat(auto-fit,_minmax(180px,_lfr))]
  gap-4">
    {pokemons.map((pokemon) => (
      <PokemonPreview key={pokemon.url} pokemonURL={pokemon.url}/>))
    
    }
  </section>
  );
}


export default PokemonList;
