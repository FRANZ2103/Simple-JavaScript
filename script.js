// Challenge 1:
// Given an array of numbers, return an array of each number,
// squared



const nums = [1,2,3,4,5]
const squared = nums.map((x)=> x * x)
//or

console.log("x2 = " + squared)
/**
 * Challenge 2:
Given an array of strings, return an array where
the first letter of each string is capitalized
 */
const names = ["alice", "bob", "charlie", "danielle"]
const capitalized = names.map(function(singleName)
    {
    singleName = singleName.charAt(0).toUpperCase()
  + singleName.slice(1)
    return singleName
    })
console.log(capitalized)

/**
 * Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.
E.g. given: [ "Bulbasaur",
"Charmander"
"Squi rtle"]
return: " < p>Squi
"Charmander"
"Squi r t lei']

 */

const pokemon = ["Bulbasaur", "Squirtle","Charmander"]
const parTag = pokemon.map((x) =>{
    return "<p>" + x + "</p";
})
console.log(parTag)