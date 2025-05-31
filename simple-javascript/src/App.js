import React, { useEffect, useState } from "react";
import axios from "axios";


//declare a user function

const profile1 ={
  name: 'Franz Sundiam',
  avatar: 'https://i.imgur.com/on1pNmb.jpeg',
  imageSize:90
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.randomuser.me/?nat=US&results=5")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);


function MyButton(){
  return (
  <button>
    I'm a Button!
  </button>
  );
}
  return (
    <div className="App">
      {
        <>
        <div>
          <MyButton />
          <h1>
            {profile1.name}
          </h1>
          <img 
          src = {profile1.avatar} 
          alt = {'Photo of ' + profile1.name}
          style = {{ 
            height: profile1.imageSize,
            width: profile1.imageSize
            }} ></img>
          
          </div>
          </>
          }
    </div>
  );
}

export default App;
