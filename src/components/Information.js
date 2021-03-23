import Heart from "./Heart";
import "./styles/Information.css";

export default function Information({number, name, type, category, weaknesses, heartButton, handleClick}){
    return (
        <div className="information">
            <Heart onClick={handleClick} className={heartButton ? "heart heart-active" : "heart"} />
            <span>Number: {number}</span>
            <span>Name: {name}</span>
            <span>Type: {type}</span>
            <span>Category: {category}</span>
            <span>Weaknesses: 
                <div>
                    {weaknesses.map(weaknesses => <span className="weaknesses" key={weaknesses}>{weaknesses}</span>)}
                </div>
            </span>
        </div>
    )
}