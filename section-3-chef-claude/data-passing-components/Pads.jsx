import React from "react";

export default function Pads(props){
    //  console.log(props.whichPad)
    // const [on, setOn] = React.useState(props.power)
    
    return(
        <>
        <button 
        style={{backgroundColor:props.color}}
        // className={
        //     on ? "on": null
        // }
        className={props.power ? "on" : null}

        onClick={()=>props.onPress(props.whichPad)}
        > </button>
        </>
    )
}