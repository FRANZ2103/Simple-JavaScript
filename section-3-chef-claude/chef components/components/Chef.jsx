import { useState } from "react";
import React from "react";
export default function Chef(){
   const [ingredients,setIngredients] = React.useState(["Eggplant"])
   const listedIngredients = ingredients.map((ingredient) =>(
        <li key={ingredient}> {ingredient} </li>
    ))


    function addIngredient(formData){ 
        const fieldIngredient = formData.get("ingredient")
        const description= formData.get("description")
        setIngredients(()=>[...ingredients,fieldIngredient])
        console.log(description)
       }
      
       
    return(
        <main>
            <form className="input-section" action={addIngredient}>
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn">Add Ingredient</button>
                <label>
                    <textarea name="description"></textarea>
                    {/* Text area not relevant */}
                </label>
            </form>
           
            <ul>
               {listedIngredients}
            </ul>
        </main>
    )
}

