import React from "react";
import Weather from "./Weather";
import "./App.css";
import City from "./City";

function App() {
  let city = "Kharkov";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React from {city}</h1>
        <Weather city="Kharkov" />
        <City />
        <a
          href="https://www.shecodes.io/learn/workshops/941/units/74/lessons/293"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          SheCodes
        </a>
      </header>
    </div>
  );
}
export default App;
