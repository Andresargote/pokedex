import pokemons from "../data/pokedex.json";

export default function usePokemonId(id){
    return pokemons.find(pokemon => pokemon.number === id)
}