import apiKey from "./apiKey";

function getCurrentWeather(query) {
  const apiBase = "https://api.openweathermap.org/data/2.5/weather?q=";

  return fetch(`${apiBase}${query}&units=metric&appid=${apiKey}&lang=ru`);
}

export default getCurrentWeather;
