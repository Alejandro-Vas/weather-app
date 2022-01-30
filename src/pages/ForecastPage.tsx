import Spinner from "../components/spinner/Spinner";

import { LoadingError } from "../components/errors/Errors";

import AccordionForecast from "../components/accordionForecast/AccordionForecast";
import AlertDismissible from "../components/alertDismissible/AlertDismissible";

import { useGetForecastQuery } from "../store/forecast/forecastApi";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useGetWeatherQuery } from "../store/weather/weatherApi";

interface IProps {
  setQuery: (query: string) => void;
}

const ForecastPage: React.FC<IProps> = (props) => {
  const query = useTypedSelector((state) => state.query.value);
  const coordinates = useTypedSelector((state) => state.coordinates.value);

  const { data: forecast, isLoading, error } = useGetForecastQuery(coordinates);
  const { data: weather } = useGetWeatherQuery(query);

  return (
    <>
      {!coordinates[0] && (
        <AlertDismissible
          variant="danger"
          alertHeading="Предупреждение"
          alertText="Сначала выберите город и загрузите погоду на сегодня"
        />
      )}

      {isLoading && <Spinner />}

      {!isLoading && error ? <LoadingError /> : null}

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
