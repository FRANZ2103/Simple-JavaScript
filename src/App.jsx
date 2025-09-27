/**
 * Challenge:
import the array of data from data. js
map over the array to create an <Entry / > component
for every item in the data array.
display the array of Entry components in place of the curr
hard-coded < Entry / > instance.
 */
import HeaderSection from "./travel-journal-page/components/HeaderSection";
import "./travel-journal-page/components/Journal.css"
import Entry from "./travel-journal-page/components/Entry";
// const dataPath = "src\travel-journal-page\data folder\data.js"
import Data from "./travel-journal-page/data folder/data.js"
import { createRoot } from "react-dom/client";

const journalData = Data.map((jData)=>{
  return(
    <>
    <Entry
    imageProps = {jData.img}
    title = {jData.title}
    country = {jData.country}
    googleMapsLink = {jData.googleMapsLink}
    dates = {jData.dates}
    text = {jData.text}

 /></>
  )
})

createRoot(document.getElementById("root")).render(
  <>
    <HeaderSection/>
  {journalData}
  </>
)

export default App;



/*export default function App(){
  return(
<>
 <HeaderSection/>
 <Entry
    imageProps = {
                  {
                    src: "https://scrimba.com/links/travel-journal-japan-image-url",
                    alt: "Mount Fuji"
                  }
                }
    title =" Mount Fuji"
    country = "Japan"
    googleMapsLink = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
    dates = "12 Jan, 2021 - 24 Jan, 2021"
    text = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."

 />
 </>
  )
  }
  */