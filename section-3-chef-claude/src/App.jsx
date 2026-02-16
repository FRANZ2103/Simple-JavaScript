import React from "react";
import padsData from "../sound pad components/pads";
import '../data-passing-components/SoundPadsChallenge/pads.css'
import Pads from "../data-passing-components/Pads";

export default function App(props){
  const [pads,setPads] = React.useState(padsData)// You already used the JS File for initlazation here

function togglePad(whichPad){
  setPads (prevPads =>prevPads.map(pad=>{
    if (whichPad === pad.id){
      console.log(pad.id + "" + whichPad)
      return {...pad, on: !pad.on      }
    }
    else{
      return pad
  /**
   * Update the rendering of pad sort of (setPads) from its current value (prevPads)
   * To do this, we take prevPads as input => output the new array by mapping prevPads and
   * for each pad object we use the if else logic attached. If it is the target id (whichPad),
   * copy all of it's current properties and alter the on property. Else, if it is not the target pad, 
   * return the same.
   * 
   * Doing this, will completely replace the target pad. It will use most of the current properties save for one
   */
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