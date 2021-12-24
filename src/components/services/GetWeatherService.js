import unixTimeToLocal from "../functions/unixTimetoLocal";

const GetWeatherService = () => {
  const _apiKey = "4a988ac25507ea7c902562b2aa291b85";
  const _apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const city = "Киров";

  // console.log(`${_apiUrl}${city}&units=metric&appid=${_apiKey}&lang=ru`)

  async function getWeather(_apiKey, _apiUrl, city) {
    const res = await fetch(
      `${_apiUrl}${city}&units=metric&appid=${_apiKey}&lang=ru`
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch(console.error);

    return res;
  }
  // const result = getWeather(_apiKey, _apiUrl, city);

  async function weatherLog() {
    const res = await getWeather(_apiKey, _apiUrl, city);
    console.log(res);

    let countryRuCheck =
      res.sys.country === "RU" ? "Россия" : "res.sys.country";

    const result = `
    Погода сейчас:
    Город: ${res.name}
    Страна: ${countryRuCheck}
    Облачность: ${res.clouds.all}% ${res.weather[0].description} 
    Температура: ${Math.round(res.main.temp)}°
    Ощущается как: ${Math.round(res.main.feels_like)}°
    Видимость: ${res.visibility} метров
    Скорость ветра: ${res.wind.speed} м/с
    Порывы ветра до: ${res.wind.gust} м/с
    Направление ветра: ${res.wind.deg}°
    Координаты: ${res.coord.lat} с.ш. ${res.coord.lon} в.д
    Восход: ${unixTimeToLocal(res.sys.sunrise)}
    Закат: ${unixTimeToLocal(res.sys.sunset)}
    `;
    console.log(result);
  }

  weatherLog();
};

export default GetWeatherService;
