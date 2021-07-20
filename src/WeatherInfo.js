import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo (props) {
    return (
        <div className="WeatherInfo">
<h1>{props.data.city}</h1>
        <h2><FormattedDate date={props.data.date} /></h2>
  
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <ul>
                  <li>Temperature: {Math.round(props.data.temperature)}</li>
                  <li>Humidity: {Math.round(props.data.humidity)}%</li>
                  <li>Wind: {Math.round(props.data.wind)} km/hr</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src={props.data.imgUrl} alt="snow" className="float-left" />
            <div className="float-left">
              <span className={props.data.temperature}> </span>
              <span className="units">
                <a href="/">°C</a> |<a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        </div>
    );
}