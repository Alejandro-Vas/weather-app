import { useState, useCallback } from "react";
import SearchBox from "../../searchBox/SearchBox";
import Spinner from "../../spinner/Spinner";
import WeatherIcon from "../../weatherIcon/WeatherIcon";
import ButtonSubmit from "../../buttonSubmit/ButtonSubmit";
import { CityNotFound, LoadingError } from "../../errors/Errors";

import unixTimeToLocal from "../../../functions/unixTimeToLocal";
import getWindDirection from "../../../functions/getWindDirection";
import getCurrentWeather from "../../../services/getCurrentWeather";

import "./ShowCurrentWeather.scss";

import { IProps } from "../../../pages/MainPage";

const ShowCurrentWeather: React.FC<IProps> = (props) => {
  const { query, setQuery, setCoordinates, weather, setWeather } = props;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClearSearch = () => {
    setQuery("");
    setWeather({});
    setCoordinates([]);
  };

  const clearError = useCallback(() => setError(false), []);

  const onSearch = async (event) => {
    setLoading(true);
    event.preventDefault();
    const result = await getCurrentWeather(query)
      .then((result) => result.json())
      .then((result) => {
        setError(false);
        setWeather(result);
        setQuery(query);
        setCoordinates([result.coord.lat, result.coord.lon]);
        setLoading(false);
        // setLoading(true);
        clearError();
      })
      .then();
    // .catch(setError(true));

    return result;
  };

  return (
    <div className="fade-in">
      <SearchBox
        query={query}
        setQuery={setQuery}
        onSearch={onSearch}
        loading={loading}
      />

      {query && (
        <ButtonSubmit
          onClick={onClearSearch}
          btnText="Очистить"
          variant="danger"
        />
      )}

      {loading && <Spinner />}

      {weather.message === "city not found" ? <CityNotFound /> : null}

      {!loading && error && <LoadingError />}

      {!loading && typeof weather.sys !== "undefined" ? (
        <View weather={weather} />
      ) : null}
    </div>
  );
};

export default ShowCurrentWeather;

const View = ({ weather }) => {
  return (
    <div className="fade-in shadow-lg p-3 mb-5 rounded">
      <div className="city-header">
        <h3>
          {weather.name} (
          {weather.sys.country === "RU" ? "Россия" : weather.sys.country})
        </h3>
      </div>
      <div className="weather">
        <div className="weather weather_center">
          <div className="weather__item">
            <WeatherIcon icon={weather.weather[0].icon} />
          </div>
          <div className="weather__item">
            <div>{Math.round(weather.main.temp)}°</div>
          </div>
        </div>

        <div className="weather__item">
          <div>Ощущается </div>
          <div>{Math.round(weather.main.feels_like)}°</div>
        </div>
      </div>
      <hr className="gradient-hr"></hr>
      <div className="weather">
        <div className="weather__item">
          <div>Ветер: {Math.round(weather.wind.speed)} м/с</div>
          <div>Направление: {getWindDirection(weather.wind.deg)}</div>
        </div>

        <div className="weather__item">
          <div>
            Восход {unixTimeToLocal(weather.sys.sunrise + weather.timezone)}
          </div>
          <div>
            Закат {unixTimeToLocal(weather.sys.sunset + weather.timezone)}
          </div>
        </div>
      </div>
    </div>
  );
};
