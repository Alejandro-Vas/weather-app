import { useState } from "react";
import SearchBox from "../../../components/searchBox/SearchBox";
import Spinner from "../../../components/spinner/Spinner";
import WeatherIcon from "../../../components/weatherIcon/WeatherIcon";
import ButtonSubmit from "../../buttonSubmit/ButtonSubmit";
import { CityNotFound, LoadingError } from "../../errors/Errors";

import unixTimeToLocal from "../../../functions/unixTimeToLocal";
import getWindDirection from "../../../functions/getWindDirection";
import getCurrentWeather from "../../../services/getCurrentWeather";

const ShowCurrentWeather = (props) => {
  const { query, setQuery, coordinates, setCoordinates, setQueryLocalStorage } =
    props;
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClearSearch = () => {
    setQuery("");
    setWeather({});
    setCoordinates([null, null]);
  };

  const onSearch = async (event) => {
    event.preventDefault();
    const result = await getCurrentWeather(query)
      .then((result) => result.json())
      .then((result) => {
        setError(false);
        setLoading(false);
        setWeather(result);
        setQueryLocalStorage(query);
        setCoordinates([result?.coord?.lat, result?.coord?.lon]);
      })
      .then(setLoading(true))
      .catch(setError(true));

    return result;
  };

  return (
    <>
      <SearchBox query={query} setQuery={setQuery} onSearch={onSearch} />

      {query && (
        <ButtonSubmit
          onClick={onClearSearch}
          btnText="Очистить"
          variant="danger"
        />
      )}

      {loading && <Spinner />}

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

const View = ({ weather }) => {
  return (
    <div>
      <div>
        <h4>
          {weather.name} (
          {weather.sys.country === "RU" ? "Россия" : weather.sys.country})
        </h4>
      </div>
      <div>Страна:</div>
      <WeatherIcon icon={weather.weather[0].icon} />

      <div>Температура: {Math.round(weather.main.temp)}°</div>
      <div>Ощущается как: {Math.round(weather.main.feels_like)}°</div>
      <div>Скорость ветра: {weather.wind.speed} м/с</div>
      <div>Направление ветра: {getWindDirection(weather.wind.deg)}</div>
      <div>
        Восход: {unixTimeToLocal(weather.sys.sunrise + weather.timezone)}
      </div>
      <div>Закат: {unixTimeToLocal(weather.sys.sunset + weather.timezone)}</div>
    </div>
  );
};
