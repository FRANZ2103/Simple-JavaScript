import React from "react";
import padsData from "../sound pad components/pads";
import '../data-passing-components/SoundPadsChallenge/pads.css'
import Pads from "../data-passing-components/Pads";

export default function App(props){
  const [pads,setPads] = React.useState(padsData)
//     Challenge:
// Call setPads to update the state of the one pad that was clicked. 
// Map over the previous pads array, and if the current item you're iterating over has the same id as the 'id' passed
// to this function, then return a new object with the 'ons value
// set to the opposite of what it was before.
// Otherwise (if the ids don't match),
// just return the previous
// item as it was, unchanged.'
  
  function appToggle(whichPad){
//think in data, not components

//I must update the on data
setPads( prevPad => prevPad.map(pad=>{
  if (pad.id === whichPad){
    return{
    ...pad,
    on: !pad.on}
  }return pad
})
)
   
  }

const padRender = padsData.map((pDataFromJS)=>{
  return(
    <Pads
    key={pDataFromJS.id}
    power={pDataFromJS.on}
    color={pDataFromJS.color}
    whichPad={pDataFromJS.id}
    onPress={appToggle}
    allData = {pDataFromJS}
    
    />
  )
})
  return (
    <div className="pads-container">
    {padRender}
    </div>
  )
}