import {useState} from "react"
import pokemons from "../data/pokedex.json";

export default function usePokemons(){
    const [pokemonsData, setPokemons] = useState(pokemons);

    /*const filterPokemons = (type, sort) => {
        let staticPokemonsData = [...pokemons];

    if (type === "all"){
        if(sort === "ascending"){
            staticPokemonsData = staticPokemonsData.sort((a, b) => a.number - b.number);
        }else {
            staticPokemonsData = staticPokemonsData.sort((a, b) => a.number - b.number).reverse();
        }
    } else {
        staticPokemonsData = staticPokemonsData.filter((pokemon) => pokemon.type.toLowerCase() === type.toLowerCase());
            if(sort === "ascending"){
                staticPokemonsData = staticPokemonsData.sort((a, b) => a.number - b.number);
            }else {
                staticPokemonsData = staticPokemonsData.sort((a, b) => a.number - b.number).reverse();
            }
        } 

        setPokemons(staticPokemonsData);
    }*/

    let staticPokemonsData = [...pokemons];
    
    const filterPokemons = (type, sort) => {
        staticPokemonsData = staticPokemonsData.sort((a, b) => a.number - b.number);


        if(type !== "all"){
            staticPokemonsData = staticPokemonsData.filter((pokemon) => pokemon.type.toLowerCase() === type.toLowerCase());
        }

        const order = sort === "ascending" ? staticPokemonsData :  staticPokemonsData.sort((a, b) => b.number - a.number);

        setPokemons(order);
    }


    return {
        pokemons: pokemonsData,
        filterPokemons,
    }
}