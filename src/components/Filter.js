import { useState, useContext, useEffect } from "react";
import { PokemonsContext } from "../PokemonsContext";
import "./styles/Filter.css";

export default function Filter() {

    const [valueSelect, setValueSelect] = useState("all");
    const [sortSelect, setSortSelect] = useState("ascending");
    const { filterPokemons } = useContext(PokemonsContext);


    const handleOnchange = (e) => {
        const newValue = e.target.value;
        setValueSelect(newValue);
        filterPokemons(newValue, sortSelect)
    }

    const handleSort = (e) => {
        const sort = e.target.value;
        setSortSelect(sort);
        filterPokemons(valueSelect, sort)
    }

    return (
        <div className="filters">
            <label>Types:</label>
            <select value={valueSelect} onChange={handleOnchange}>
                <option value="all">All</option>
                <option value="dragon">Dragon</option>
                <option value="fairy">Fairy</option>
                <option value="ice">Ice</option>
                <option value="leaf">Leaf</option>
                <option value="normal">Normal</option>
                <option value="psychic">Psychic</option>
            </select>
            <label>Sort:</label>
            <select value={sortSelect} onChange={handleSort}>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>
    )
}