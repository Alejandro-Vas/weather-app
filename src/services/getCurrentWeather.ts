import apiKey from "./apiKey";

function getCurrentWeather(query: string) {
  const apiBase = "https://api.openweathermap.org/data/2.5/weather?q=";
  console.log(`${apiBase}${query}&units=metric&appid=${apiKey}&lang=ru`);

  return fetch(`${apiBase}${query}&units=metric&appid=${apiKey}&lang=ru`);
}

export default getCurrentWeather;
