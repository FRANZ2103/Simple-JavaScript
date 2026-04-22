import { useState } from "react";
import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";

export default function Chef(props){
   const [ingredients,setIngredients] = React.useState([])

   
   const [recipe, setRecipe] = React.useState("Test")
   console.log(recipe) // Initial recipe state

   
React.useEffect(() => {
    console.log("Updated recipe:", recipe)
}, [recipe])
   
async function handleRecipe() {
    const airecipe = await getRecipeFromMistral(ingredients)
    // console.log("Mistral" + airecipe) //Actual recipe data from Mistral
    setRecipe(airecipe)
    // console.log(recipe) //Recipe state after setting it to the generated recipe
    
}
function clearRecipe(){
    setRecipe("")
}
    
    const [recipeShown, setRecipeShown] = React.useState(false)
    function toggleShowRecipe(){
        setRecipeShown(prevValue=>!prevValue)
        // Boolean function for changing Get Recipe Value
    }

    function addIngredient(formData){ 
        const fieldIngredient = formData.get("ingredient")
        setIngredients(()=>[...ingredients,fieldIngredient])
        console.log(ingredients)
        console.log(recipeShown)
        // Function for adding an ingredient to the listed data
        // Pass this to child then parent?
       }
    // console.log(import.meta.env.VITE_HF_API_KEY)
       
    return(
        <main>
            <center><p>Enter your Ingredients in the field below:</p></center>
            <form className="input-section" action={addIngredient} >
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn">Add Ingredient</button>
              
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients= {ingredients} toggleShowRecipe ={handleRecipe}/>}

                <button className="add-ingredient-btn" onClick={clearRecipe}>Clear Recipe</button>
          
                    <ClaudeRecipe  generatedRecipe = {recipe}/>
                
        </main>
    )
}

