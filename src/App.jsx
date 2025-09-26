import { createRoot } from "react-dom/client";
import Scratch from "./Scratch";
import MainContent from "./travel-journal-page/components/MainContent";
import HeaderSection from "./travel-journal-page/components/HeaderSection";
import Contact from "./contact-card/components/Contact";
import "./travel-journal-page/components/Journal.css"
// import "./contact-card/components/Contact.css"
import Joke from "./Joke page/components/Joke";
import Entry from "./travel-journal-page/components/Entry";
import jokesData from "./Joke page/jokesData";
console.log(jokesData);
/**
 *  Challenge: See if you can correctly pass the necessary props to the
*  Joke component in the . map() (and render the jokeEIements array) so
* the jokes show up on the page again
 */

const jokeElements = jokesData.map((x)=>{
// return `Setup: ${x.setup} Punchline: ${x.punchline}`
return <><h1 key={x.id}>Setup:{x.setup}</h1> <p key={x.id}>Punchline:{x.punchline}</p></>
}
)
const punchlines = jokesData.map((x)=>{
return 
}
)


createRoot(document.getElementById("root")).render(
  <>
  <Joke
  setup = {jokeElements}
  // punchline = {punchlines}
  />

  </>
)

export default App

 {/* <HeaderSection
 />
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
   */}