import Star from "./Star"
import React from "react"
import avatar from "./Contact-assets/user.png"
import starFilled from "./Contact-assets/star-filled.png"
import starEmpty from "./Contact-assets/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    function toggleFavorite() {
      setContact(prevContact => {
        return{
            ...prevContact,
             isFavorite: !prevContact.isFavorite
        }
      })
    }

    const [userName, setUserName] = React.useState("Joe")

    return (
        <main>
            <img src={starFilled} alt=""/>
            <p>{userName}</p>


            {/* <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    
                        <Star
                            isFilled = {contact.isFavorite}
                            handleClick ={toggleFavorite}
                        
                        />
                    
                        
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article> */}
        </main>
    )
}