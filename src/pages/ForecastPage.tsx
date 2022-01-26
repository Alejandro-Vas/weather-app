import { useState, useEffect } from "react";
import Spinner from "../components/spinner/Spinner";

import { LoadingError } from "../components/errors/Errors";

import getForecastWeather from "../services/getForecastWeather";
import AccordionForecast from "../components/accordionForecast/AccordionForecast";
import AlertDismissible from "../components/alertDismissible/AlertDismissible";

import { IForecast } from "../interfaces/IForecast";

interface IProps {
  query: string;
  setQuery: (query: string) => void;
  coordinates: number[];
  setCoordinates: (coordinates: number[]) => void;
  weatherName: string | undefined;
}

const ForecastPage: React.FC<IProps> = (props) => {
  const { coordinates, weatherName } = props;
  const [forecast, setForecast] = useState<IForecast>({
    lat: 58.5966,
    lon: 49.6601,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getForecastWeather(coordinates)
      .then((res) => res.json())
      .then((res) => {
        setError(null);
        setLoading(false);
        setForecast(res);
        console.log(res);
      });
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

      {!loading && error ? <LoadingError /> : null}

      {!error && forecast.current ? (
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

export default ForecastPage;
