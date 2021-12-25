import { useState } from "react";
import SearchBox from "../components/searchBox/SearchBox";

import unixTimeToLocal from "../functions/unixTimetoLocal";

const api = {
  key: "4a988ac25507ea7c902562b2aa291b85",
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};

const NowWeather = () => {
  const [query, setQuery] = useState("Киров");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const dateNow = new Date().toLocaleString();

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
      <SearchBox query={query} search={search} setQuery={setQuery} />

      {typeof weather.sys !== "undefined" ? (
        <>
          <div>
            <h2>Погода на {dateNow}</h2>
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
