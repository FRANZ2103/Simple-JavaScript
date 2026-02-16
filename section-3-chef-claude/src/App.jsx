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