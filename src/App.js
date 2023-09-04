import React, { useState } from "react";
import Weather from "./Weather";
import "./App.css";
import SearchCity from "./SearchCity";

export default function App() {
  const [city, setCity] = useState("");
  function onHandleSearch(city) {
    setCity(city);
  }
  return (
    <div className="App">
      <h1 className="App-text">Weather App</h1>
      <SearchCity onSearch={onHandleSearch} />
      <Weather city={city} />
    </div>
  );
}
