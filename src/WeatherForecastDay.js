import React from "react";
import WeatherForecastIcon from "./WeatherForecastIcon";


export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
        <strong> {day()} </strong>
        <br />
        <WeatherForecastIcon code={props.data.weather[0].icon} />
        <br />
        <div class="weather-forecast-temperature">
            <strong> {maxTemperature()} </strong>
                / {minTemperature()}
        </div>
    </div>
  );
}