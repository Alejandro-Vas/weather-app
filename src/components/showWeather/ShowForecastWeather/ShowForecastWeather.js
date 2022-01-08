import { useState, useEffect } from "react";
import Spinner from "../../../components/spinner/Spinner";

import { LoadingError } from "../../errors/Errors";

import getForecastWeather from "../../../services/getForecastWeather";
import AccordionForecast from "../../accordionForecast/AccordionForecast";
import AlertDismissible from "../../alertDismissible/AlertDismissible";

import "./ShowForecastWeather.scss";

const ShowForecastWeather = (props) => {
  const { coordinates, weatherName } = props;
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getForecastWeather(coordinates)
      .then((res) => res.json())
      .then((res) => {
        setError(false);
        setLoading(false);
        setForecast(res);
        setShowAccordion(true);
        console.log(res);
      })
      .then(setLoading(true))
      .catch(setError(true));
  }, [coordinates]);

  return (
    <>
      {!coordinates[0] && (
        <AlertDismissible
          variant="danger"
          alertHeading="Предупреждение"
          alertText="Сначала выберите город и загрузите погоду на сегодня"
        />
      )}

      {loading && <Spinner />}

      {!loading && error && showAccordion ? <LoadingError /> : null}

      {!error && forecast.lat ? (
        <div className="fade-in">
          <div>
            <h3>{weatherName}</h3>
          </div>
          <AccordionForecast forecast={forecast} />
        </div>
      ) : null}
    </>
  );
};

export default ShowForecastWeather;
