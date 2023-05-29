import './App.css';
import React, {useState} from "react";  
function App() {
  const fruits = [
  "🍇 Grapes",
  "🍈 Melon",
  "🍉 Watermelon",
  "🍊 Tangerine",
  "🍋 Lemon",
  "🍌 Banana",
  "🍍 Pineapple",
  "🥭 Mango",
  "🍎 Red Apple",
  "🍏 Green Apple",
  "🍐 Pear",
  "🍑 Peach",
  "🍒 Cherries",
  "🍓 Strawberry",
  "🫐 Blueberries",
  "🥝 Kiwi Fruit",
  "🍅 Tomato",
  "🫒 Olive",
  "🥥 Coconut",
  "🥑 Avocado",
  "🍆 Eggplant",
  "🥔 Potato",
  "🥕 Carrot"];
  const [data, setData] = new useState(fruits);
  function handler(event)
  {
    const filtered = fruits.filter((m1) => m1.includes(event.target.value));  
    setData(filtered);
  }

  return (
    <div className="App">
      <h4>Search:</h4>
      <input type='text' placeholder='Search Food & Drinks' onChange={handler}></input><br/>
      {data.map((fruit) => <h6>{fruit}</h6>)}
    </div>
  );
}

export default App;
