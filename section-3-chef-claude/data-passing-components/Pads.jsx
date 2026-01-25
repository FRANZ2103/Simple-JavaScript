import React from "react"

export default function Pads(props){
    const [on, setOn] = React.useState(props.power)
    function toggleClick(){
        setOn (prevOn => !prevOn)
    }
    console.log(on)
    return(
        <>
        <button
        key={props.id}
        style={{backgroundColor: props.color}}
        className={on ? "on": null}
        onClick={toggleClick}
        ></button>
        </>
    )
}