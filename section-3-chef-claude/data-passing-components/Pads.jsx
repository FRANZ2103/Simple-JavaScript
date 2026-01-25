import React from "react";

// need to know on, and color
//next is switching on off
// need to initalize a state setter
//need to add toggle action 


export default function Pads(props){
    const [on, setOn] = React.useState(props.power)
    function toggleAction(){
        setOn(prevOn =>
            //get prev value
            prevOn = !prevOn
        )
        console.log(props.whichPad)
    }
    return(
        <>
        <button 
        style={
            {
                backgroundColor:props.color
            }
        }
        className={
            on ? "on": null
        }
        onClick={toggleAction}
        > </button>
        </>
    )
}