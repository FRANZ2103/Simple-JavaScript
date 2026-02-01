import React from "react";

export default function Pads(props){
    //  console.log(props.whichPad)
    const [on, setOn] = React.useState(props.power)
    function toggleAction(){
        setOn(prevOn =>
            //get prev value
            prevOn = !prevOn
        )
    }
    return(
        <>
        <button 
        style={{backgroundColor:props.color}}
        className={
            on ? "on": null
        }
        onClick={()=>props.onPress(props.whichPad)}
        > </button>
        </>
    )
}