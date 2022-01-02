import { useState } from "react";
import Spinner from "../../../components/spinner/Spinner";

import { LoadingError } from "../../errors/Errors";

import getForecastWeather from "../../../services/getForecastWeather";
import AccordionForecast from "../../accordionForecast/AccordionForecast";

const ShowForecastWeather = (props) => {
  const { coordinates, query } = props;
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);
  const [error, setError] = useState(false);

  const onSearch = async () => {
    const result = await getForecastWeather(coordinates)
      .then((res) => res.json())
      .then((result) => {
        setError(false);
        setLoading(false);
        setForecast(result);
        setShowAccordion(true);
      })
      .then(setLoading(true))
      .catch(setError(true));
    return result;
  };

  return (
    <>
      <div>
        <button onClick={onSearch}>Показать прогноз</button>
      </div>
      {loading ? <Spinner /> : null}

      {!loading && error && showAccordion ? <LoadingError /> : null}

      {!error && forecast.lat ? (
        <>
          <div>
            <h3>Погода {query}</h3>
          </div>
          <AccordionForecast forecast={forecast} />
        </>
      ) : (
        <div>
          <LoadingError />
          <div>Сначала загрузите прогноз на сегодня</div>
        </div>
      )}
    </>
  );
};

export default ShowForecastWeather;
