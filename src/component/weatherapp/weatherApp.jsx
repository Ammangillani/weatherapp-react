import React from 'react'
import './weatherApp.css';
import clearicon from "../assets/clear.png";
import searchicon from "../assets/search.png";
import rainicon from "../assets/rain.png";
import snow from "../assets/snow.png";
import cloudicon from "../assets/cloud.png";
import drizzleicon from "../assets/drizzle.png";
import humidityicon from "../assets/humidity.png";
 const weatherApp = () => {
  return (
    <div className='container'>
      <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search'/>
            <div className="search-icon">
              <img src={searchicon} alt="" />
            </div>
      </div>
    </div>
  )
}

export default weatherApp