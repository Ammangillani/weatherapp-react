import React from "react";
import "./weatherApp.css";
import clearicon from "../assets/clear.png";
import searchicon from "../assets/search.png";
import rainicon from "../assets/rain.png";
import snow from "../assets/snow.png";
import cloudicon from "../assets/cloud.png";
import drizzleicon from "../assets/drizzle.png";
import humidityicon from "../assets/humidity.png";
import windicon from "../assets/wind.png";

const weatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon">
          <img src={searchicon} alt="" />
        </div>
      </div>
      <div className="weather-img">
        <img src={cloudicon} alt="" />
      </div>
      <div className="weather-temp">24&deg;c</div>
      <div className="weather-loc">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityicon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-per">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windicon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-per">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default weatherApp;
