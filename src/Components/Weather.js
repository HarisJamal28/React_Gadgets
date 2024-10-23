import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Weather() {

  const conditionIcons = {
    "SUNNY": "fa-solid fa-sun",
    "PARTLY CLOUDY": "fa-solid fa-cloud-sun",
    "CLOUDY": "fa-solid fa-cloud",
    "OVERCAST": "fa-solid fa-cloud",
    "RAIN": "fa-solid fa-cloud-showers-heavy",
    "THUNDERSTORM": "fa-solid fa-bolt",
    "SNOW": "fa-solid fa-snowflake",
    "FOG": "fa-solid fa-smog",
    "CLEAR": "fa-solid fa-sun",
    "CLEAR_NIGHT": "fa-solid fa-moon",
    "MIST": "fa-solid fa-smog",
  };

  const [city, setCity] = useState('Peshawar');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'a12817233f5746f2be5151211242010';

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching weather data');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className='weather'>
      <section className='main'>

        <br />

        <div className='Create'>
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              value={city}
              onChange={handleInputChange}
            />
            <button type="submit"><i className='fa-solid fa-compass fa-lg'></i></button>
          </form>
        </div>
        <br />

        {error && <p style={{color:'#ff6347', fontSize:'1.5rem'}}>{error}</p>}

        {weatherData && (
          <div className='ForecastFrame'>
            <div className='Forecast'>
              <ul className='ForecastAVT'>
                <li>
                  <i className={`fa-3x ${conditionIcons[weatherData.current.condition.text.toUpperCase()] || 'fa-solid fa-cloud'}`}></i>
                </li>
              </ul>
            </div>
            <div className='ForecastDetails'>
              <ul>
                <li>{weatherData.location.name}</li>
                <li>{weatherData.location.country}</li>
                <li>{weatherData.location.region}</li>
                <li>{weatherData.current.condition.text.toUpperCase()}</li>
                <li>{weatherData.current.temp_c} °C</li>
                <li>{new Date(weatherData.current.last_updated).toLocaleString()}</li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
