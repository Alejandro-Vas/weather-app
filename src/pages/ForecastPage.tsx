import { useEffect } from "react";
import Spinner from "../components/spinner/Spinner";

import { LoadingError } from "../components/errors/Errors";

import AccordionForecast from "../components/accordionForecast/AccordionForecast";
import AlertDismissible from "../components/alertDismissible/AlertDismissible";

import { useGetForecastQuery } from "../store/forecast/forecastApi";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useGetWeatherQuery } from "../store/weather/weatherApi";

import useActions from "../hooks/useActions";

const ForecastPage: React.FC = () => {
  const query = useTypedSelector((state) => state.query.value);
  const coordinates = useTypedSelector((state) => state.coordinates.value);

  const {
    data: forecast,
    isLoading,
    isFetching,
    error,
  } = useGetForecastQuery(coordinates);
  const { data: weather, isError: isWeatherError } = useGetWeatherQuery(query);
  const { setCoordinates } = useActions();

  useEffect(() => {
    setCoordinates([weather?.coord?.lat, weather?.coord?.lon]);
  }, [setCoordinates, weather]);

  return (
    <>
      {/* TODO: conditional rendering bug */}
      {isWeatherError && !isLoading && (
        <AlertDismissible
          variant="danger"
          alertHeading="Предупреждение"
          alertText="Сначала выберите город и загрузите погоду на сегодня"
        />
      )}

      {isLoading && <Spinner />}

      {error && !forecast?.current && !isFetching ? <LoadingError /> : null}

      {!error && forecast?.current ? (
        <div className="fade-in">
          <div>
            <h3>{weather?.name}</h3>
          </div>
          <AccordionForecast />
        </div>
      ) : null}
    </>
  );
};

export default ForecastPage;
