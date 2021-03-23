import "./styles/Evolution.css";

export default function Evolution({evolutions, number}){

    return (
        <section className="evolution">
            {
                evolutions.map(pokemon => {
                    return (
                        <div className={pokemon.number === number ? "pokemon-card pokemon-active" : "pokemon-card"} key={pokemon.number}>
                            <span>Number: {pokemon.number}</span>
                            <span>Name: {pokemon.name}</span>
                        </div>
                    )
                })
            }
        </section>
    )
}