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
       function signUp(formData){
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email + " " + password)
       }

       
    return(
        <main>
            <form className="input-section" onSubmit={handleSubmit}>
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn">Add Ingredient</button>
            </form>
            <section>
                <h1>Signup Form</h1>
                <form action={signUp}>
                    <label> Email: 
                        <input type="email" name="email" placeholder="kirstenfaith@gmail.com"/>
                    </label>
                    <br/>
                    <label>Password: 
                        <input type="password" name="password"/>
                    </label>
                    <button>Submit</button>

                </form>
            </section>
            <ul>
               {listedIngredients}
            </ul>
        </main>
    )
}