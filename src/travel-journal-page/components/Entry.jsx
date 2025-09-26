export default function Entry(props){
    return(
        <article className="entry">
            <div className="main-image-container">
            <img className="main-image" src={props.imageProps.src} alt={props.imageProps.alt}/>
            </div>
            <div className="entry-text">
                <img className="map-marker" src="./src/assets/marker.png"/>
                <span className="place-text">{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2>{props.title}</h2>
                 <p className="date">{props.dates}</p>
                <p className="facts">{props.text}</p>
                              
        </div>
        </article>
    )
}