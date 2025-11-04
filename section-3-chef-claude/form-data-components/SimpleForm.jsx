export default function SimpleForm(){

    function handleAction(formData){
        const log = Object.fromEntries(formData)
        const chckBox = formData.getAll("chckBox")
        console.log(log)
        console.log(chckBox)
    }

    return(
        <>
        <h1> This is a form example starting from scratch</h1>
        <br/>
        <form action={handleAction}>
            <div className="fields">
                <label htmlFor="emailField">Enter your email: </label>
                <input type="email" name="emailField" id="emailField" placeholder="franz@email.com" defaultValue="franz@email.com"></input>
                </div>
            <div className="fields">
                <label htmlFor="passwordField">Enter your Password: </label>
            <input type="password" name="passwordField" id="passwordField"required></input>
            </div>
            <fieldset>
                <legend>Employment Status</legend>
                <label><input type="radio" name="radioBTN" value="Employed"></input>Employed</label>
                <label><input type="radio" name="radioBTN" value="Fulltime"></input>Fulltime</label>
                <label><input type="radio" name="radioBTN" value="Part-time"></input>Part-time</label>
                <label><input type="radio" name="radioBTN" value="Unemployed" defaultChecked></input>Unemployed</label>
            </fieldset>
            
            <fieldset>
                <legend>Dietary Restrictions</legend>
                <label><input type="checkbox" name="chckBox" value="Kosher" defaultChecked></input>Kosher</label>
                <label><input type="checkbox" name="chckBox" value="Vegan"></input>Vegan</label>
                <label><input type="checkbox" name="chckBox" value="Gluten-free"></input>Gluten-free</label>
            </fieldset>
            
            <button className="submitBTN" id="submitBTN">Submit Form</button>

        </form>
        </>
    )
}