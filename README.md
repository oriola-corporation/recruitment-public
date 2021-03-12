# Coding Assignment 

## Summary

Create a Weather App. The app should fetch data from an API like OpenWeatherMap and display the weather information for a city.

As data source you _can_ use the openweathermap API. You can use this API token `a17480f70f0d4368ad0b5eabd0e37b66` for authentication or register your own.

Example query:
```
curl "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=a17480f70f0d4368ad0b5eabd0e37b66"
```

### Requirements
The test is divided into two parts. If you are applying for a junior frontend position, you are only expected to complete the first part. If you are applying for a senior frontend position, you are expected to complete both parts.

### Part 1
* User should be able to search for a city
* Show weather conditions like temperature, wind speed, humidity etc.
* Use React state and props for managing data
* Make the ui interactive. For example, the background could change depending on the weather conditions
* Code should be structured and clean. Make sure to comment your code.

### Part 2
* Add a favorite city feature. The user should be able to "star" their favorite cities.
* Introduce unit tests to check the functionality.
* Add an extra feature which you believe would be a good addition to the app.
* Implement a global state solution.
* Make your application accessible and responsive.

### Clarifications
- A skeleton written in React is provided, but you don't need to use any of it
- You should be able to explain and discuss your solution at the interview

### Tips
- Use at most 2 hours for the assignment. We don't need perfect code. We just want to have something we can discuss.
- Have fun and `yarn start`!
