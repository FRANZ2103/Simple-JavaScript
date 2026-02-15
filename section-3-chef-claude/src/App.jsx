import React from "react";
import padsData from "../sound pad components/pads";
import '../data-passing-components/SoundPadsChallenge/pads.css'
import Pads from "../data-passing-components/Pads";

export default function App(props){
  const [pads,setPads] = React.useState(padsData)
  
  function appToggle(whichPad){

    console.log("Sanity Test")
    console.log(whichPad)
    //Theory, update the data






setPads( prevPad => prevPad.map(pad=>{
  if (pad.id === whichPad){
    console.log("Match test reached")
    console.log(pad.id + " = " + whichPad)
    console.log(pad.on)
    return{
    // ...pad,

    }
  }return pad
})
)
   
  }
// Render all pad buttons initially
const padRender = pads.map((pad)=>{
  return(
    <Pads
    key={pad.id}
    power={pad.on}
    color={pad.color}
    whichPad={pad.id}
    onPress={appToggle}
    allData = {pad}
    
    />
  )
})
  return (
    <div className="pads-container">
    {padRender}
    </div>
  )
}