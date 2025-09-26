export default function Joke(props){
    const added = props.number + props.number
    return(
        <main>
            {/* <h4> Setup: {props.setup}</h4> */}
            {props.setup ? <h4> Setup: {props.setup}</h4> :<p></p>}
            <p>Punchline: {props.punchline}</p>
            <hr/>
            {/* {props.number ? <p>{added}</p> :<p></p>}
            <h1>{props.test}</h1> 
            
            Git acc changed test*/}
        </main>
    )
}