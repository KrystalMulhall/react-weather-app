import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props) {
    return (
        <div className="WeatherInfo">
<h1>{props.data.city}</h1>
        <h2>Last Updated:<FormattedDate date={props.data.date} /></h2>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <ul>
                <li className="text-capitalize">{props.data.description}</li>
                  <li>Humidity: {Math.round(props.data.humidity)}%</li>
                  <li>Wind: {Math.round(props.data.wind)} km/hr</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="float-left">
            <WeatherIcon code={props.data.icon} size={67} />
            </div>
              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} /> 
              </div>
            </div>
          </div>
        </div>
    );
}