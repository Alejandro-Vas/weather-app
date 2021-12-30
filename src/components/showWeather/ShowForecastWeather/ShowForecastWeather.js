import { useState } from "react";
import SearchBox from "../../../components/searchBox/SearchBox";
import Spinner from "../../../components/spinner/Spinner";
import WeatherIcon from "../../../components/weatherIcon/WeatherIcon";

import unixTimeToLocal from "../../../functions/unixTimetoLocal";
import getWindDirection from "../../../functions/getWindDirection";
import getForecastWeather from "../../../services/getForecastWeather";
import ForecastPage from "../../../pages/ForecastPage";

const dateNow = new Date().toLocaleString();

const ShowForecastWeather = (props) => {
  const { query, setQuery, coordinates } = props;
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClearSearch = () => {
    setQuery("");
    setWeather({});
  };

  const onSearch = (event) => {
    event.preventDefault();
    getForecastWeather(coordinates)
      .then((res) => res.json())
      .then((result) => {
        setError(false);
        setLoading(false);
        setForecast(result);
      })
      .then(setLoading(true))
      .catch(setError(true));
  };

  return (
    <>
      <SearchBox query={query} setQuery={setQuery} onSearch={onSearch} />

      <button onClick={onClearSearch}>Очистить результаты</button>
      <div> {forecast?.current?.dt}</div>
    </>
  );
};

export default ShowForecastWeather;
