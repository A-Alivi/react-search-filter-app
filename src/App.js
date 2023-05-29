import './App.css';
import React, {useState} from "react";  
function App() {
  const fruits  = ["apple","mango","pineapple","avocado","strawberry","watermelon"];
  const [data, setData] = new useState(fruits);
  function handler(event){
    const search = event.target.value;
    const filtered = fruits.filter((data) => data.includes(search));  
    setData(filtered);
  }

  return (
    <div className="App">
      <label > Search</label>
      <input type='text' placeholder='Search' onChange={handler}></input><br/>
      {data.map((item) => <h6>{item}</h6>)}
    </div>
  );
}

export default App;
