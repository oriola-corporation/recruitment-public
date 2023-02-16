import React, {useState} from 'react';
import styles from './Weather.module.css';

const Weather = () => {

  let [location, setLocation] = useState("");
  let [currentWeather, setCurrentWeather] = useState({});

  const getCurrentWeather = async (e) => {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a17480f70f0d4368ad0b5eabd0e37b66`, {
      "method": "GET"
    })
      .then(response => response.json())
      .then(response => {
        setCurrentWeather(response);
      });
  }

  return (
    <div>
      <h2>How's the weather out there?</h2>
      <form onSubmit={getCurrentWeather}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength={50}
          className={styles.textInput}
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />

        <button className={styles.Button} type="submit">Get Weather</button>
      </form>
      <div>
        <pre>{JSON.stringify(currentWeather, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Weather;