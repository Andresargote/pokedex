import React, { useContext } from "react";
import {PokemonsContext} from "../PokemonsContext";
import {Link} from "react-router-dom";
import "./styles/Table.css";

export default function Table(){

    const {pokemons} = useContext(PokemonsContext);

    return (
        <table>
            <thead>
                <tr>
                    <th>N</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {pokemons.map(({number, name, type}) => {
                    return (
                        <tr key={`${number}-${name}`} className="animate__animated animate__fadeIn">
                            <th>{number}</th>
                            <th>{name}</th>
                            <th>{type}</th>
                            <th>
                                <Link to={`/pokemon/${number}`}>
                                    +
                                </Link>
                            </th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}