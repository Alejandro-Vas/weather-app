import { useState } from "react";
import SearchBox from "../components/searchBox/SearchBox";

import unixTimeToLocal from "../functions/unixTimetoLocal";

const api = {
  key: "4a988ac25507ea7c902562b2aa291b85",
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};

const MainPage = () => {
  const [query, setQuery] = useState("Киров");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dateNow = new Date().toLocaleString();

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}${query}&units=metric&appid=${api.key}&lang=ru`)
        .then((res) => res.json())
        .then((result) => {
          setError(false);
          setLoading(false);
          setWeather(result);
          setQuery("");
        })
        .then(setLoading(true))
        .catch(setError(true));
    }
  };

  return (
    <>
      <SearchBox query={query} search={search} setQuery={setQuery} />

      {loading ? "ЗАГРУЗКА..." : null}

      {weather.message === "city not found" ? (
        <div>
          <h2>Город не найден</h2>
        </div>
      ) : null}

      {!loading && error ? (
        <div>
          <h2>Ошибка загрузки</h2>
        </div>
      ) : null}

      {typeof weather.sys !== "undefined" ? (
        <div>
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
        </div>
      ) : null}
    </>
  );
};

export default MainPage;
