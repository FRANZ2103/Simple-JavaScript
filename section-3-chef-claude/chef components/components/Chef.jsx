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
        const diet = formData.getAll("diet")
        console.log(diet)            
        const color = formData.get("color")
        console.log(color)            

       }
       
       
    return(
        <main>
            <form className="input-section" action={addIngredient} >
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn">Add Ingredient</button>
                <br/>
                <fieldset>
                    <legend>Employment Status</legend>
                    <label><input type="radio" name="employmentStatus"  value="Employed"/>Employed</label>
                    <label><input type="radio" name="employmentStatus" value="Unemployed"/>Unemployed</label>
                    <label><input type="radio" name="employmentStatus" value="Part-time"/>Part-time</label>
                </fieldset>
                <fieldset>
                    <legend>Dietary restrictions</legend>
                    <label><input type="checkbox" name="diet"  value="Kosher"/>Kosher</label>
                    <label><input type="checkbox" name="diet" value="Gluten-free"/>Gluten-free</label>
                    <label><input type="checkbox" name="diet" value="Vegan"/>Vegan</label>
                </fieldset>
                
                <label htmlFor="color"> Favorite color
                <fieldset>
                    <select name="color" id="color" required defaultValue="">
                        <option value="" disabled>-- Choose Color--</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>
                </fieldset> 
            </label>
           
            </form>
           
            <ul>
               {listedIngredients}
            </ul>
        </main>
    )
}

