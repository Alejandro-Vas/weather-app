function getForecastWeather(coordinates) {
  const [lat, lon] = coordinates;
  const api = {
    key: "4a988ac25507ea7c902562b2aa291b85",
    base: "https://api.openweathermap.org/data/2.5/onecall?",
  };
  console.log(
    `${api.base}lat=${lat}&lon=${lon}&appid=${api.key}&lang=ru&units=metric`
  );

  return fetch(
    `${api.base}lat=${lat}&lon=${lon}&appid=${api.key}&lang=ru&units=metric`
  );
}

export default getForecastWeather;
