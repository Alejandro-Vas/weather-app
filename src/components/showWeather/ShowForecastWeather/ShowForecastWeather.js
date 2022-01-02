import { useState } from "react";
import SearchBox from "../../../components/searchBox/SearchBox";
import Spinner from "../../../components/spinner/Spinner";
import WeatherIcon from "../../../components/weatherIcon/WeatherIcon";
import { CityNotFound, LoadingError } from "../../errors/Errors";

import unixTimeToLocal from "../../../functions/unixTimetoLocal";
import getWindDirection from "../../../functions/getWindDirection";
import getForecastWeather from "../../../services/getForecastWeather";
import AccordionForecast from "../../accordionForecast/AccordionForecast";
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
      <div>
        <button onClick={onSearch}>Показать прогноз</button>
      </div>

      {loading ? <Spinner /> : null}

      {!loading && error ? <LoadingError /> : null}

      {!loading && forecast ? <AccordionForecast forecast={forecast} /> : null}
    </>
  );
};

export default ShowForecastWeather;
