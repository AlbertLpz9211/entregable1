import { useState } from "react";
import "./App.css";
import Author from "./components/Author";
import Button from "./components/Button";
import QuoteBox from "./components/QuoteBox";
import quotes from "./quotes.json";

function App() {
  //Arreglo de colores
  const colors = ["#5e62c2", "#c261b9", "#ff6c9b", "#ff9277", "#ffc461"];
  //seteando un indice aleatorio para las frases
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [Index, setIndex] = useState(randomIndex);
  // seteando un indice para colores
  const randomIndexC = Math.floor(Math.random() * colors.length);
  const [IndexC, setIndexC] = useState(randomIndexC);

  function changeColor() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomIndexC = Math.floor(Math.random() * colors.length);
    setIndex(randomIndex);
    setIndexC(randomIndexC);
  }
  document.body.style =`background:${colors[IndexC]}`;
  return (
    <div className="App">
      
      <div className="card">
        
        <QuoteBox quote={quotes[Index].quote} colors={colors[IndexC]} />
        <Author author={quotes[Index].author} colors={colors[IndexC]} />
        <Button changeColor={changeColor} colors={colors[IndexC]} />
      </div>
    </div>
  );
}

export default App;
