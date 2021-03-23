import { useState } from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import Details from "../components/Details";
import Evolution from "../components/Evolution";
import Image from "../components/Image";
import Information from "../components/Information";
import Navegation from "../components/Navegation";
import usePokemonId from "../hooks/usePokemonId";
import "./styles/Pokemon.css";

export default function Pokemon() {

    const {number} = useParams();
    const pokemon = usePokemonId(number);

    const [informationOrEvolution, setInfoOrEvolution] = useState(true);
    const [heartButton, setHeartButton] = useState(false);

    const handleInformation = () => {
        setInfoOrEvolution(true);
    }

    const handleEvolution = () => {
        setInfoOrEvolution(false)
    }

    const handleClick = () => {
        setHeartButton(!heartButton);
    }

    if(pokemon === undefined) {
        return (
            <p>Ups, The pokemon you are looking for is not available <Link to="/">go back to home</Link></p>
        )
    }

    return(
        <>
        <header>
            <h2>Pokemon Card</h2>
            <Navegation informationOrEvolution={informationOrEvolution} handleInformation={handleInformation} handleEvolution={handleEvolution}/>
        </header>

        <main>
            {
                informationOrEvolution ? (
                    <>
                        <section>
                            <Information number={pokemon.number} name={pokemon.name} type={pokemon.type} category={pokemon.category} weaknesses={pokemon.weaknesses} heartButton={heartButton} handleClick={handleClick}/>
                            <Image name={pokemon.name} img_link={pokemon.img_link}/>
                        </section>
                        <Details/>
                    </>
                ) : (
                    <Evolution evolutions={pokemon.evolutions} number={number}/>
                )
            }
        </main>

        </>
    )
}