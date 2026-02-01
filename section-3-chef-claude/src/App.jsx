import React from "react";
import padsData from "../sound pad components/pads";
import '../data-passing-components/SoundPadsChallenge/pads.css'
import Pads from "../data-passing-components/Pads";

// need ng toggle function to be passed
export default function App(props){
  const [pads,setPads] = React.useState(padsData)

  function appToggle(){
    console.log("clicked!")
  }

//  need to map on JS file to render Pads.jsx multiple times
const padRender = padsData.map((pDataFromJS)=>{
  return(
    <Pads
    key={pDataFromJS.id}
    power={pDataFromJS.on}
    color={pDataFromJS.color}
    whichPad={pDataFromJS.id}
    onPress={appToggle}
    
    />
  )
})
  return (
    <div className="pads-container">
    {padRender}
    </div>
  )
}