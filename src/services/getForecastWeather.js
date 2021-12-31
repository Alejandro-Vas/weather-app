function getForecastWeather(coordiantes) {
  const [lat, lon] = coordiantes;
  const api = {
    key: "4a988ac25507ea7c902562b2aa291b85",
    base: "https://api.openweathermap.org/data/2.5/onecall?",
  };
  console.log(`${api.base}lat=${lat}&lon=${lon}&appid=${api.key}&lang=ru`);

  return fetch(`${api.base}lat=${lat}&lon=${lon}&appid=${api.key}&lang=ru`);
}

export default getForecastWeather;
