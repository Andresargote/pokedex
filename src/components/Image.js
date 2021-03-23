import "./styles/Image.css";

export default function Image({name, img_link}){
    return (
        <div className="image">
            <img src={`${img_link}`} alt={`${name}`}/>
        </div>
    )
}
