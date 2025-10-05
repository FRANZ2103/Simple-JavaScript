import { useState } from "react";
import React from "react";
export default function Chef(){
   const ingredients = ["Chicken", "Oregano", "Tomatoes"] 
   const listedIngredients =ingredients.map((ingredient) =>(
        <li key={ingredient}> {ingredient} </li>
    ))



    const [isGoingOut, setIsGoingOut] = React.useState(true)
    function handleClick(){
        {isGoingOut ? setIsGoingOut(isGoingOut => false) : setIsGoingOut(isGoingOut => true)}
    }

    function handleSubmit(event){    }
    return(
        <main>
            <form className="input-section" onSubmit={handleSubmit}>
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn">Add Ingredient</button>
            </form>
                <button className="add-ingredient-btn" onClick={handleClick}>{isGoingOut ? "Yes" : "No"}</button>

            <h1></h1>
            

            <ul>
               {/* {newList} */}
            </ul>
        </main>
    )
}