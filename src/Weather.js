import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getData(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconLink: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb83cd89bebae00ada77eb1feb5129d6&units=metric`;
    axios.get(url).then(getData);
  }
    
  function handleSubmit() {
    search();
  }
  
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form id="search-form">
              <div className="search">
                <div className="row">
                  <div className="col-12">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a city"
                        aria-label="Enter a city"
                        aria-describedby="button-addon2"
                        id="enterAcity"
                        onChange={updateCity}
                        onKeyPress={event => {
                          if (event.key === 'Enter') {
                            event.preventDefault();
                            search();
                          }
                        }}
                      />
                      {/*
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="buttongeo"
                      >
                        Current
                      </button>
                      */}
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={handleSubmit}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData.coordinates} />        
        
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
