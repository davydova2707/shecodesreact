import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [speed, setSpeed] = useState(null);
  let [icon, setIcon] = useState(null);

  function getData(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setSpeed(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=cb83cd89bebae00ada77eb1feb5129d6&units=metric`;
  axios.get(url).then(getData);

  return (
    <div>
      <p></p>
      <p>City : {props.city}</p>
      <p>Temperature : {Math.round(temperature)} °C</p>
      <p>Description : {description}</p>
      <p>Humidity : {humidity}%</p>
      <p>Wind : {speed} km/h</p>
      <p>
        <img src={icon} alt="Weather Icon"/>
      </p>
    </div>
  );
}
