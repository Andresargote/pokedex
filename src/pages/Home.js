import Filter from "../components/Filter";
import Table from "../components/Table";
import usePokemons from "../hooks/usePokemons";
import { PokemonsContext } from "../PokemonsContext";


export default function Home(){

    const {pokemons, filterPokemons} = usePokemons();

    return (
        <div>
            <PokemonsContext.Provider value={{
                pokemons,
                filterPokemons
            }}>
                <h1>Pokedex</h1>
                <Filter/>
                <Table />
            </ PokemonsContext.Provider>
        </div>
    )
}