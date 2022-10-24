import { useState } from "react";
import "./App.css";
import Author from "./components/Author";
import Button from "./components/Button";
import QuoteBox from "./components/QuoteBox";
import quotes from "./quotes.json";

function App() {
  const [color, setColor] = useState("");
  const changeState = () => {

  };

  return (
    <div className="App">
      {/* <h1>{quotes[0].author}</h1> */}
      <div className="card">
        <QuoteBox />
        <Author />
        <Button />
      </div>
    </div>
  );
}

export default App;
