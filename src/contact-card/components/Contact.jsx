/*

Structured Props
export default function Contact(props){
    console.log(props);
    return(
        <article className="contact-card">
            <div className="card-image-container">
                <img className="card-image" src={props.img} alt={`image of $`}/>
            </div>
            <div className="contact-info">
                <h2> {props.name}</h2>
                <img src="src\assets\marker.png"/><span className="info">{props.phone}</span><br/>
                <img src="src\assets\marker.png"/><span className="info">{props.email}</span>
            </div>
        </article>
    )
}
*/


//Destructured Object, props
export default function Contact({img,name,phone,email}){
    return(
        <article className="contact-card">
            <div className="card-image-container">
                <img className="card-image" src={img} alt={`image of ${name}`}/>
            </div>
            <div className="contact-info">
                <h2> {name}</h2>
                <img src="src\assets\marker.png"/><span className="info">{phone}</span><br/>
                <img src="src\assets\marker.png"/><span className="info">{email}</span>
            </div>
        </article>
    )
}