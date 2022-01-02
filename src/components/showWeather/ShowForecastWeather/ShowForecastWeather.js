import { useState } from "react";
import Spinner from "../../../components/spinner/Spinner";

import { LoadingError } from "../../errors/Errors";

import getForecastWeather from "../../../services/getForecastWeather";
import AccordionForecast from "../../accordionForecast/AccordionForecast";

const ShowForecastWeather = (props) => {
  const { query, setQuery, coordinates } = props;
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);
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
        setShowAccordion(true);
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

      {showAccordion ? <AccordionForecast forecast={forecast} /> : null}
    </>
  );
};

export default ShowForecastWeather;
