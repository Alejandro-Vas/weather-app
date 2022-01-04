import { useState } from "react";
import Spinner from "../../../components/spinner/Spinner";
import ButtonSubmit from "../../buttonSubmit/ButtonSubmit";

import { LoadingError } from "../../errors/Errors";

import getForecastWeather from "../../../services/getForecastWeather";
import AccordionForecast from "../../accordionForecast/AccordionForecast";
import AlertDismissible from "../../alertDismissible/AlertDismissible";

const ShowForecastWeather = (props) => {
  const { coordinates, query } = props;
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);
  const [error, setError] = useState(false);

  const onSearch = () => {
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
  };

  return (
    <>
      {coordinates[0] !== null ? (
        <div>
          <ButtonSubmit
            onClick={onSearch}
            btnText="Загрузить прогноз"
            variant="success"
          />
        </div>
      ) : (
        <div>
          <AlertDismissible
            variant="danger"
            alertHeading="Предупреждение"
            alertText="Сначала выберите город и загрузите погоду на сегодня"
          />
        </div>
      )}

      {loading ? <Spinner /> : null}

      {!loading && error && showAccordion ? <LoadingError /> : null}

      {!error && forecast.lat ? (
        <>
          <div>
            <h3>{query}</h3>
          </div>
          <AccordionForecast forecast={forecast} />
        </>
      ) : null}
    </>
  );
};

export default ShowForecastWeather;
