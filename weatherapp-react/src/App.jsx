import React, { useState, useEffect} from 'react'
// import './App.css'
import axios from 'axios';

function App() {
 const [city, setCity] = useState("");
 const [data, setData] = useState(null);
  
 const fetchWeather = () => {
  if (!city) return; 

  axios
    .get(`http://127.0.0.1:5000/weather?city=${city}`)
    .then((response) => {
      setData(response.data); 
      console.log(response.data);
      setCity(""); 
    })
    .catch((error) => console.error("Error fetching data: ", error));
};

return (
  <div className="container">
    {/* Search Bar Section */}
    <div className="search-section">
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="add-button" onClick={fetchWeather}>
        Fetch Weather
      </button>
    </div>

  
    {data && (
      <div className="current-weather">
        <h2 className="city">Weather in {data.city}</h2>
        <p className="temperature">{data.temperature}°C</p>
      </div>
    )}


    {data && (
      <div className="additional-info">
        <div className="info-box">
          <span>Humidity</span>
          <div>{data.humidity}</div>
        </div>
        <div className="info-box">
          <span>Weather</span>
          <div>{data.weather}</div>
        </div>
      </div>
    )}
  </div>
);
};


export default App
