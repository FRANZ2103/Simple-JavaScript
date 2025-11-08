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
       }
    const [messages, setMessages] = React.useState([1,2])
    let msg
    function evaluateMessages(msg){
        if (messages.length === 1){
            msg = "You have 1 unread message"
        } else if(messages.length > 0){
            msg =` You have ${messages.length} messages `
        } else{
            msg = "You have no messages"
        }
        return msg

    }
    return(
        <main>
            <form className="input-section" action={addIngredient} >
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn">Add Ingredient</button>
              
            </form>
           <section className="Conditional Rendering"> 
            {/* {messages.length === 1 ? <h1>You have 1 unread message</h1> : messages ? <p>You have {messages.length} unread messages</p> : <p>No messages</p>} */}
            <h1>{ evaluateMessages()}</h1>
           </section>
            <ul>
               {listedIngredients}
            </ul>
        </main>
    )
}

