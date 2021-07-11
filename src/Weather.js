import React from "react";
import "./Weather.css";

export default function Weather() {
  let WeatherData = {
    temperature: 21,
    city: "Toronto",
    date: "May 17, 2021",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 48,
    wind: 8
  };
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeHolder="Enter Your City..."
              className="form-control"
              autoFocus="off"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <button>Current</button>
      <h1>{WeatherData.city}</h1>
      <h2>Last updated {WeatherData.date}</h2>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <ul>
                <li>Humidity: {WeatherData.humidity}%</li>
                <li>Wind: {WeatherData.wind} km/hr</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src={WeatherData.imgUrl} alt="snow" className="float-left" />
          <div className="float-left">
            <span className={WeatherData.temperature}> </span>
            <span className="units">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
