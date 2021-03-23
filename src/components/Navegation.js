import "./styles/Navegation.css";

export default function Navegation({informationOrEvolution, handleInformation, handleEvolution}){
    return (
        <nav>
            <ul>
                <button onClick={handleInformation} className={informationOrEvolution ? "active" : ""}>
                    Information
                </button>
                <button onClick={handleEvolution} className={!informationOrEvolution ? "active" : ""}>
                    Evolution
                </button>
            </ul>
        </nav>
    )
}