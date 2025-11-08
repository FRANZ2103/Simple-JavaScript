import { useState } from "react";
import React from "react";
export default function Chef(){
   const [ingredients,setIngredients] = React.useState([])
   const listedIngredients = ingredients.map((ingredient) =>(
        <li key={ingredient}> {ingredient} </li>
    ))
    

    function addIngredient(formData){ 
        const fieldIngredient = formData.get("ingredient")
        setIngredients(()=>[...ingredients,fieldIngredient])
        console.log(ingredients)
       }
    
       
    return(
        <main>
            <form className="input-section" action={addIngredient} >
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn">Add Ingredient</button>
              
            </form>
            {ingredients.length ? <section>
                <h1>Ingredients on Hand:</h1>
                <ul className="ingredients-list">{listedIngredients}</ul>
                {ingredients.length >= 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe for your list of ingredients</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
                </section>
                
                : null}
        </main>
    )
}

