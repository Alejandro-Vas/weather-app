import { useState } from "react";
import unixTimeToLocal from "../../functions/unixTimetoLocal";

const api = {
  key: "4a988ac25507ea7c902562b2aa291b85",
  base: "https://api.openweathermap.org/data/2.5/weather?q="
};

const NowWeather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}${query}&units=metric&appid=${api.key}&lang=ru`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        })
        .then(setLoading(false))
        .then(console.log(loading));
    }
  };

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Введие название города"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {/* //   Город: ${res.name}

//   Облачность: ${res.clouds.all}% ${res.weather[0].description}
//   Температура: ${Math.round(weather.main.temp)}°
//   Ощущается как: ${Math.round(weather.main.feels_like)}°
//   Видимость: ${weather.visibility} метров
//   Скорость ветра: ${weather.wind.speed} м/с
//   Порывы ветра до: ${weather.wind.gust} м/с
//   Направление ветра: ${weather.wind.deg}°
//   Координаты: ${weather.coord.lat} с.ш. ${res.coord.lon} в.д
//   Восход: ${unixTimeToLocal(res.sys.sunrise)}
//   Закат: ${unixTimeToLocal(res.sys.sunset)} */}
      {typeof weather.sys !== "undefined" ? (
        <>
          <div>
            <h2>Погода сейчас</h2>
          </div>
          <div>
            <h3>Город: {weather.name} </h3>
          </div>
          <div>
            Страна:{" "}
            {weather.sys.country === "RU" ? "Россия" : weather.sys.country}
          </div>
          <div>Температура: {Math.round(weather.main.temp)}°</div>
          <div>Ощущается как: {Math.round(weather.main.feels_like)}°</div>
          <div>Видимость: {weather.visibility} метров</div>
          <div>Скорость ветра: {weather.wind.speed} м/с</div>
          <div>Порывы ветра до: {weather.wind.gust} м/с</div>
          <div>Направление ветра: {weather.wind.deg}°</div>
          <div>
            Координаты: {weather.coord.lat} с.ш. {weather.coord.lon}
          </div>
          <div>Восход: {unixTimeToLocal(weather.sys.sunrise)}</div>
          <div>Закат: {unixTimeToLocal(weather.sys.sunset)}</div>
        </>
      ) : null}
    </>
  );
};

export default NowWeather;
