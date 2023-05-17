import React from "react";
import styles from "./Weather.module.css";

const Weather = () => {
  return (
    <div>
      <h2>How's the weather out there?</h2>
      <form>
        <input
          type="text"
          placeholder="Enter City"
          maxLength={50}
          className={styles.textInput}
        />
        <button className={styles.Button} type="submit">
          Get Weather
        </button>
      </form>
    </div>
  );
};

export default Weather;
