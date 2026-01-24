import React from "react";
import padsData from "../sound pad components/pads";
import '../data-passing-components/SoundPadsChallenge/pads.css'
import Pads from "../data-passing-components/Pads";


export default function App(props){
  const padRender = padsData.map((toPass=>{
    return(
      <Pads
      key={toPass.id}
      color={toPass.color}
      power={toPass.on}
      
      />
    )
  }))
  return (


    <div className="pads-container">
      {padRender }
    </div>
  )
}