import { useState } from "react";
import SearchBox from "../../../components/searchBox/SearchBox";
import Spinner from "../../../components/spinner/Spinner";
import WeatherIcon from "../../../components/weatherIcon/WeatherIcon";

import unixTimeToLocal from "../../../functions/unixTimetoLocal";
import getWindDirection from "../../../functions/getWindDirection";
import getForecastWeather from "../../../services/getForecastWeather";

const dateNow = new Date().toLocaleString();

const ShowForecastWeather = (props) => {
  const { query, setQuery, coordinates, setCoordiantes } = props;
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClearSearch = () => {
    setQuery("");
    setWeather({});
  };

  const onSearch = (event) => {
    event.preventDefault();
    getForecastWeather(query)
      .then((res) => res.json())
      .then((result) => {
        setError(false);
        setLoading(false);
        setWeather(result);
      })
      .then(setLoading(true))
      // .console.log(coordinates)
      .catch(setError(true));
  };

  return (
    <>
      <SearchBox query={query} setQuery={setQuery} onSearch={onSearch} />

      <button onClick={onClearSearch}>Очистить результаты</button>

      {loading ? <Spinner /> : null}

      {!loading && weather.message === "city not found" ? (
        <CityNotFound />
      ) : null}

      {!loading && error ? <LoadingError /> : null}

      {!loading && typeof weather.sys !== "undefined" ? (
        <View weather={weather} />
      ) : null}
    </>
  );
};

export default ShowForecastWeather;

const View = ({ weather }) => {
  return (
    <div>
      <div>
        <h2>Погода на {dateNow}</h2>
      </div>

      <div>
        <h3>Город: {weather.name} </h3>
      </div>
      <WeatherIcon icon={weather.weather[0].icon} />
      <div>
        Страна: {weather.sys.country === "RU" ? "Россия" : weather.sys.country}
      </div>
      <div>
        {/* {{weather.weather[0].main}
        {weather.weather[0].description} */}
        {/* {weather.weather[0].icon} */}
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
  );
};

const CityNotFound = () => {
  return (
    <div>
      <h2>Город не найден</h2>
    </div>
  );
};

const LoadingError = () => {
  return (
    <div>
      <h2>Ошибка загрузки</h2>
    </div>
  );
};
