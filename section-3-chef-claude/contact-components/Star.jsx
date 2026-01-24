import starFilled from "./Contact-assets/star-filled.png"
import starEmpty from "./Contact-assets/star-empty.png"
export default function Star(props){
    let starIcon = props.isFilled ? starFilled : starEmpty
    
    return(
        <>
        <button
            onClick={props.handleClick}
            aria-pressed={props.isFilled}
            aria-label={props.isFilled ? "Remove from Favorites" : "Add to Favorites"}
            className="favorite-button"
        >
        
        <img
            src={starIcon}
            alt= {props.isFilled ? "filled star icon": "empty star"}
            className="favorite"
        />
        </button>
        </>
    )
}