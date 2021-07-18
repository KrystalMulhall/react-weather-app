import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response){
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: "Wednesday 07:00",
      city: response.data.name,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
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
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <button>Current</button>
        <h1>{weatherData.city}</h1>
        <h2>Last updated {weatherData.date}</h2>
  
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/hr</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src={weatherData.imgUrl} alt="snow" className="float-left" />
            <div className="float-left">
              <span className={weatherData.temperature}> </span>
              <span className="units">
                <a href="/">°C</a> |<a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6021e10603fc23c0d10bd4d5d31a42e3";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading...";
  }
}
