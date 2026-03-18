import { useState } from "react";
import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Chef(props){
   const [ingredients,setIngredients] = React.useState(["all the main spices", "pasta" ,"ground beef" ,"tomato paste"])
   const listedIngredients = ingredients.map((ingredient) =>(
        <li key={ingredient}> {ingredient} </li>
    ))
    
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
    
       
    return(
        <main>
            <form className="input-section" action={addIngredient} >
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn">Add Ingredient</button>
              
            </form>
            {ingredients.length ? <section className="recipe-section">
                <h1>Ingredients on Hand:</h1>
                <ul className="ingredients-list">{listedIngredients}</ul>
                {ingredients.length >= 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe for your list of ingredients</p>
                    </div>
                    <button onClick={toggleShowRecipe}>Get a recipe</button>
                </div>}

                {recipeShown ? 
                    <ClaudeRecipe/>
                : null}
                </section>
                
                : null}
        </main>
    )
}

