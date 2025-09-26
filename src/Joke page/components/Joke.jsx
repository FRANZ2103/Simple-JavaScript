export default function Joke(props){
    const added = props.number + props.number
    return(
        <main>
            {props.setup}
            {props.punchline}
            {/* {props.number ? <p>{added}</p> :<p></p>}
            <h1>{props.test}</h1> */}
        </main>
    )
}