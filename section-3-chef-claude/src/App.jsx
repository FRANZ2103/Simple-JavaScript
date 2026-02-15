import React from "react";
import padsData from "../sound pad components/pads";
import '../data-passing-components/SoundPadsChallenge/pads.css'
import Pads from "../data-passing-components/Pads";

export default function App(props){
//For later, we need the toggle pad to:
// detect the whichpad id, once matched, switch the value


  const [pads,setPads] = React.useState(padsData)// You already used the JS File for initlazation here
 // After that, render using the pads above

function togglePad(whichPad){
  console.log("Hello World")
  console.log(whichPad)
  // map first?
  //state settir, then sa loob get prev value, return => prevpad na mapped nung pads. 
  //Afterwards, don sa loob ung if statement
  setPads (prevPads =>prevPads.map(pad=>{
    
    // console.log(pad.id)
    if (whichPad === pad.id){
      console.log(pad.id + "" + whichPad) //Match found confirmer
      return {...pad, on: !pad.on      }
    }else
{return pad
  
}

}))
  
}
 const padRender = pads.map(pads=>
  //pass the props
  <Pads
  key = {pads.id}
  power = {pads.on}
  color = {pads.color}
  whichPad ={pads.id}
  onPress = {togglePad}

  
  />

 )
  return (
    <div className="pads-container">
    {padRender}
    </div>
  )
}