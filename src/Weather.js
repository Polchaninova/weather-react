import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [city, setCity] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWidnd] = useState("");
  let [iconCode, setIconCode] = useState("");
  
  function showTemperature(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setCity(response.data.name);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWidnd(response.data.wind.speed);
    setIconCode(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  let apiKey = `12b765e58ad1df7247a7dd8bf64421e7`;
  let units = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showTemperature);

  
}
