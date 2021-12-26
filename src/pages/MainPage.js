import { useState } from "react";
import SearchBox from "../components/searchBox/SearchBox";
import Spinner from "../components/Spinner/Spinner";

import unixTimeToLocal from "../functions/unixTimetoLocal";
import getWindDirection from "../functions/getWindDirection";

const api = {
  key: "4a988ac25507ea7c902562b2aa291b85",
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};

const dateNow = new Date().toLocaleString();

const MainPage = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClearSearch = () => {
    setQuery("");
    setWeather({});
  };

  const onSearch = (event) => {
    event.preventDefault();
    fetch(`${api.base}${query}&units=metric&appid=${api.key}&lang=ru`)
      .then((res) => res.json())
      .then((result) => {
        setError(false);
        setLoading(false);
        setWeather(result);
      })
      .then(setLoading(true))
      .catch(setError(true));
  };

  return (
    <>
      <SearchBox query={query} setQuery={setQuery} onSearch={onSearch} />

      <button onClick={onClearSearch}>Очистить результаты</button>

      {loading ? <Spinner /> : null}

      {!loading && weather.message === "city not found" ? (
        <div>
          <h2>Город не найден</h2>
        </div>
      ) : null}

      {!loading && error ? (
        <div>
          <h2>Ошибка загрузки</h2>
        </div>
      ) : null}

      {!loading && typeof weather.sys !== "undefined" ? (
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
          <div>
            {/* {weather.weather[0].main}
            {weather.weather[0].description}
            {weather.weather[0].icon} */}
          </div>
          <div>Температура: {Math.round(weather.main.temp)}°</div>
          <div>Ощущается как: {Math.round(weather.main.feels_like)}°</div>
          <div>Видимость: {weather.visibility} метров</div>
          <div>Скорость ветра: {weather.wind.speed} м/с</div>
          <div>Порывы ветра до: {weather.wind.gust} м/с</div>
          <div>Направление ветра: {getWindDirection(weather.wind.deg)}</div>
          <div>
            Координаты: {weather.coord.lat} {weather.coord.lon}
          </div>
          <div>Восход: {unixTimeToLocal(weather.sys.sunrise)} (GMT+3)</div>
          <div>Закат: {unixTimeToLocal(weather.sys.sunset)} (GMT+3)</div>
        </div>
      ) : null}
    </>
  );
};

export default MainPage;
