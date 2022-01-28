import { useState, useCallback } from "react";

import ShowCurrentWeather from "../components/showWeather/showCurrentWeather/ShowCurrentWeather";
import { IWeather } from "../interfaces/IWeather";

import SearchBox from "../components/searchBox/SearchBox";
import Spinner from "../components/spinner/Spinner";
import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";
import { CityNotFound, LoadingError } from "../components/errors/Errors";

import getCurrentWeather from "../services/getCurrentWeather";

import { useGetWeatherQuery } from "../store/weather/weather-api";

export interface IProps {
  query: string;
  setQuery: (query: string) => void;
  coordinates: number[];
  setCoordinates: (coordinates: number[]) => void;
}

const MainPage: React.FC<IProps> = (props) => {
  const { query, setQuery, setCoordinates } = props;

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { data, isFetching, isLoading, isSuccess, isError } =
    useGetWeatherQuery(query);

  const onClearSearch = () => {
    setQuery("");
    setCoordinates([]);
  };

  // const clearError = useCallback(() => setError(null), []);

  // const onSearch = async (event: React.FormEvent) => {
  //   setLoading(true);
  //   event.preventDefault();
  //   const result = await getCurrentWeather(query)
  //     .then((result) => result.json())
  //     .then((result) => {
  //       setLoading(false);
  //       setError(null);
  //       setWeather(result);
  //       setQuery(query);
  //       setCoordinates([result.coord.lat, result.coord.lon]);
  //       clearError();
  //     })
  //     .then();

  //   return result;
  // };

  return (
    <div className="fade-in">
      <SearchBox query={query} setQuery={setQuery} loading={isLoading} />

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
