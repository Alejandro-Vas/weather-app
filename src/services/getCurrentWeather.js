function getCurrentWeather(query) {
  const api = {
    key: "4a988ac25507ea7c902562b2aa291b85",
    base: "https://api.openweathermap.org/data/2.5/weather?q="
  };
  return fetch(`${api.base}${query}&units=metric&appid=${api.key}&lang=ru`);
}

export default getCurrentWeather;
