import React from "react";
import padsData from "../sound pad components/pads";
import '../data-passing-components/SoundPadsChallenge/pads.css'
// const [pads,setPads] = React.useState(padsData)
const padsJSData = padsData.map((pdata)=>{
  return(
    <button key={pdata.id}/>
    // console.log(pdata.id)
  )
})

export default function App(){
  const [pads,setPads] = React.useState(padsData)
  return (


    <div className="pads-container">
    {padsJSData}
    </div>
  )
}