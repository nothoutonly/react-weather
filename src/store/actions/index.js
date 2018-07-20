import fetch from "cross-fetch";

import { ROOT_URL } from "../../config";

export const LOADING_WEATHER_DATA = "LOADING_WEATHER_DATA";
export const LOADED_WEATHER_DATA = "LOADED_WEATHER_DATA";
export const ERROR_WEATHER_DATA = "ERROR_WEATHER_DATA";
export const GET_WEATHER_DATA = "GET_WEATHER_DATA";

const requestWeather = city => ({
  type: LOADING_WEATHER_DATA,
  payload: city
});
const reseiveWeather = weatherSearchData => ({
  type: LOADED_WEATHER_DATA,
  payload: weatherSearchData
});
const fetchWeatherError = error => ({
  type: ERROR_WEATHER_DATA,
  payload: error
});

export const fetchWeather = city => {
  return dispatch => {
    dispatch(requestWeather(city));
    return fetch(`${ROOT_URL}&q=${city}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then(weatherSearchData => {
        console.log(weatherSearchData);
        return dispatch(reseiveWeather(weatherSearchData));
      })
      .catch(error => {
        return dispatch(fetchWeatherError(error));
      });
  };
};
