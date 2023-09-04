import React, { useState } from "react";
import "./App.css";

export default function SearchCity(props) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!city) return;
    props.onSearch(city);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="SearchCity">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city"
          onChange={changeCity}
          className="AppSearch"
        />
        <input type="submit" value="Search" className="AppSearch" />
      </form>
    </div>
  );
}
