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

  return (
    <div className="App">
      {/* <h1>{quotes[0].author}</h1> */}
      <div className="card">
        <QuoteBox quote={quotes[Index].quote} colors={colors[IndexC]} />
        <Author />
        <Button />
      </div>
    </div>
  );
}

export default App;
