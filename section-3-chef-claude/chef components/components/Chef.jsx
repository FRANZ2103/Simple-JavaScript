export default function Chef(){
   const ingredients = ["Chicken", "Oregano", "Tomatoes"] 
   const listedIngredients =ingredients.map((ingredient) =>(
    <li key={ingredient}> {ingredient} </li>
    ))
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
        return(
            console.log(listedIngredients)
        )

    }
    return(
        <main>
            <form className="input-section" onSubmit={handleSubmit}>
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn" >Add Ingredient</button>
            </form>
            <ul>
               {listedIngredients}
            </ul>
        </main>
    )
}