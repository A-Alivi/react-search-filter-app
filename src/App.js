import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
      <input type='text' id='search' placeholder='Search' onChange={handler}></input><br/>
      <ul className='list-group'>
        {data.map((item) => <li className='list-group-item'>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
