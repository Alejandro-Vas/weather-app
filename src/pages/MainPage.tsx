import { useState, useCallback } from "react";

import ShowCurrentWeather from "../components/showWeather/showCurrentWeather/ShowCurrentWeather";
import { IWeather } from "../interfaces/IWeather";

import SearchBox from "../components/searchBox/SearchBox";
import Spinner from "../components/spinner/Spinner";
import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";
import { CityNotFound, LoadingError } from "../components/errors/Errors";

import getCurrentWeather from "../services/getCurrentWeather";

import { useGetWeatherQuery } from "../store/weather/weather-api";
import useActions from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export interface IProps {
  coordinates: number[];
  setCoordinates: (coordinates: number[]) => void;
}

const MainPage: React.FC<IProps> = (props) => {
  const { setCoordinates } = props;

  const { clearQuery } = useActions();

  const query = useTypedSelector((state) => state.query.value);

  const { data, isFetching, isLoading, isSuccess, isError } =
    useGetWeatherQuery(query);

  const onClearSearch = () => {
    clearQuery();
    setCoordinates([]);
  };

  return (
    <div className="fade-in">
      <SearchBox query={query} loading={isLoading} />

      {query && (
        <ButtonSubmit
          onClick={onClearSearch}
          btnText="Очистить"
          variant="danger"
        />
      )}

      {data?.message === "city not found" ? <CityNotFound /> : null}

      {!isLoading && isError && <LoadingError />}

      {/* <ErrorBoundary> */}
      {!isFetching && data?.sys! ? (
        <ShowCurrentWeather data={data} />
      ) : (
        <Spinner />
      )}
      {/* <ErrorBoundary/> */}
    </div>
  );
};

export default MainPage;
