import { useState, useEffect } from "react";
import Spinner from "../components/spinner/Spinner";

import { LoadingError } from "../components/errors/Errors";

import getForecastWeather from "../services/getForecastWeather";
import AccordionForecast from "../components/accordionForecast/AccordionForecast";
import AlertDismissible from "../components/alertDismissible/AlertDismissible";

import { IForecast } from "../interfaces/IForecast";
import { useGetWeatherQuery } from "../store/weather/weatherApi";
import { useGetForecastQuery } from "../store/forecast/forecastApi";

interface IProps {
  query: string;
  setQuery: (query: string) => void;
  coordinates: number[];
  setCoordinates: (coordinates: number[]) => void;
  forecastCity: string | undefined;
}

const ForecastPage: React.FC<IProps> = (props) => {
  const { coordinates, query, forecastCity } = props;

  const { data, isLoading, error } = useGetForecastQuery(coordinates);

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

      {!error && data?.current ? (
        <div className="fade-in">
          <div>
            <h3>{forecastCity || query}</h3>
          </div>
          <AccordionForecast />
        </div>
      ) : null}
    </>
  );
};

export default ForecastPage;
