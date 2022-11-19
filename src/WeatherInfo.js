import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div>
            <div className="row-location">
                <div className="row">
                    <div className="col-6">
                        <h2 id="currentLocation">
                            <i className="fas fa-map-marker-alt"></i> {props.data.city}
                        </h2>
                        <FormattedDate date={props.data.date} />
                    </div>
                </div>
            </div>
            <br />

            <div className="row-info">
                <div className="row">
                    <div className="col-6">
                        <span id="description">{props.data.description}</span>
                        <h2 id="currentTemperature">
                            <span id="currentTemperatureDigit">{Math.round(props.data.temperature)}</span>
                            {/*<a href="#" id="metric">*/}°C{/*</a>|<a href="#" id="imperial">°F</a>*/}
                            <img src={props.data.iconLink} alt="" id="icon" />
                        </h2>
                    </div>
                    <div className="col-6">
                        <i className="fa-solid fa-droplet"></i> Humidity:
                        <span id="humidity">{props.data.humidity}</span>%
                        <br />
                        <i className="fa-solid fa-wind"></i> Wind:
                        <span id="wind">{props.data.wind}</span>km/h
                    </div>
                </div>
            </div>
            <br />

            <br />
        </div>
    );
}