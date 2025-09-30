
import HeaderSection from "./travel-journal-page/components/HeaderSection";
import "./travel-journal-page/components/Journal.css"
import Entry from "./travel-journal-page/components/Entry";
import Data from "./travel-journal-page/data folder/data.js"
import { createRoot } from "react-dom/client";

const journalData = Data.map((jData)=>{
  return(
    
    <Entry
      key ={jData.id}
      {...jData}

 />
  )
})

createRoot(document.getElementById("root")).render(
  <>
    <HeaderSection/>
  {journalData}
  </>
)

export default App;