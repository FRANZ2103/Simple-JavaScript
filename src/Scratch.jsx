/*** Challenge: manually turn this string array into an array of
* JSX elements by surrounding each ninja turtle with an <h2> element */

const ninjaTurtIes = ["Rafael", "Leonardo", "Donatello","Michaelangelo"]
const testTurtle = ninjaTurtIes.map((x) => `<h1>${x}</h1>`)
export default function Scratch(){
    console.log(testTurtle)
    return(
        <main>
            {testTurtle}
            
        </main>
    )
}