import React, { useEffect, useState } from "react";
import axios from "axios";

const dataArray = [
  {name: 'First Data', id: 1},
  {name: 'Second Data', id:2},
  {name: 'Third Data', id: 3},
];

const anotherListItems = dataArray.map(dataArray =>
  <li key={dataArray.id}>
    {dataArray.name}
  </li>
)

//declare a user function


const profile1 ={
  name: 'Franz Sundiam',
  avatar: 'https://i.imgur.com/on1pNmb.jpeg',
  imageSize:90
};

const products= [
  {title: 'Cabbage', id:'1'},
  {title: 'Apple', id: '2'}
]

const listItems = products.map(products =>
          <li key={products.id}>
            {products.title}
          </li>
          )

function MyButton(){
  // This is used as updater
  // Set something, update
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count + 1 )
  };
 
  const button_amount = 2;

  return (
  <button onClick={handleClick}>
    I'm a Button! {count}
  </button>
  );
}



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
          
          <ul>{anotherListItems}</ul>
          
          
          </div>
          </>
          }
    </div>
  );
}

export default App;
