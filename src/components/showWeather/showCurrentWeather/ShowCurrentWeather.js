import { useState } from "react";
import SearchBox from "../../../components/searchBox/SearchBox";
import Spinner from "../../../components/spinner/Spinner";
import WeatherIcon from "../../../components/weatherIcon/WeatherIcon";
import { CityNotFound, LoadingError } from "../../errors/Errors";

import unixTimeToLocal from "../../../functions/unixTimetoLocal";
import getWindDirection from "../../../functions/getWindDirection";
import getCurrentWeather from "../../../services/getCurrentWeather";

const dateNow = new Date().toLocaleString();

const ShowCurrentWeather = (props) => {
  const { query, setQuery, coordinates, setCoordiantes } = props;
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClearSearch = () => {
    setQuery("");
    setWeather({});
  };

  const onSearch = async (event) => {
    event.preventDefault();
    const result = await getCurrentWeather(query)
      .then((result) => result.json())
      .then((result) => {
        setError(false);
        setLoading(false);
        setWeather(result);
        setCoordiantes([result?.coord?.lat, result?.coord?.lon]);
      })
      .then(setLoading(true))
      .catch(setError(true));
    return result;
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
        <View weather={weather} coordinates={coordinates} />
      ) : null}
    </>
  );
};

export default ShowCurrentWeather;

const View = ({ weather, coordinates }) => {
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
