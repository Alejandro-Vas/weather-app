import apiKey from "./apiKey";

function getForecastWeather(coordinates) {
  const [lat, lon] = coordinates;
  const apiBase = "https://api.openweathermap.org/data/2.5/onecall?";

  console.log(
    `${apiBase}lat=${lat}&lon=${lon}&appid=${apiKey}&lang=ru&units=metric`
  );

  return fetch(
    `${apiBase}lat=${lat}&lon=${lon}&appid=${apiKey}&lang=ru&units=metric`
  );
}

export default getForecastWeather;
