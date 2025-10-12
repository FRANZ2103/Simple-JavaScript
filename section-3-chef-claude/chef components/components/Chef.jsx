import { useState } from "react";
import React from "react";
export default function Chef(){
   const [ingredients,setIngredients] = React.useState([])
   const listedIngredients = ingredients.map((ingredient) =>(
        <li key={ingredient}> {ingredient} </li>
    ))

    function handleClick(){
        return
    }

    function handleSubmit(event){ 
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const fieldIngredient = formData.get("ingredient")
        setIngredients(()=>[...ingredients,fieldIngredient])

       }
    return(
        <main>
            <form className="input-section" onSubmit={handleSubmit}>
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn">Add Ingredient</button>
            </form>
            <ul>
               {listedIngredients}
            </ul>
        </main>
    )
}