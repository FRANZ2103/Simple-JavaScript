import React from "react";
import padsData from "../sound pad components/pads";
import '../data-passing-components/SoundPadsChallenge/pads.css'
import Pads from "../data-passing-components/Pads";


export default function App(props){
//  need to map on JS file to render Pads.jsx multiple times
const padRender = padsData.map((pDataFromJS)=>{
  return(
    <Pads
    key={pDataFromJS.id}
    power={pDataFromJS.on}
    color={pDataFromJS.color}
    whichPad={pDataFromJS.id}
    
    />
  )
})
  return (
    <div className="pads-container">
    {padRender}
    </div>
  )
}