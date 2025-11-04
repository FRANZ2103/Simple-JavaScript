import { useState } from "react";
import React from "react";
export default function Chef(){
   const [ingredients,setIngredients] = React.useState(["Eggplant"])
   const listedIngredients = ingredients.map((ingredient) =>(
        <li key={ingredient}> {ingredient} </li>
    ))


    function addIngredient(formData){ 
        const fieldIngredient = formData.get("ingredient")
        setIngredients(()=>[...ingredients,fieldIngredient])
        const emplo = formData.get("employmentStatus")
        console.log(emplo)    
        

       }
       
       
    return(
        <main>
            <form className="input-section" action={addIngredient}>
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn">Add Ingredient</button>
                <br/>
                <fieldset>
                    <legend>Employment Status</legend>
                    <label><input type="radio" name="employmentStatus"  value="Employed"/>Employed</label>
                    <label><input type="radio" name="employmentStatus" value="Unemployed"/>Unemployed</label>
                    <label><input type="radio" name="employmentStatus" value="Part-time"/>Part-time</label>
                </fieldset>
           
            </form>
           
            <ul>
               {listedIngredients}
            </ul>
        </main>
    )
}

