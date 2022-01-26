import { useState, useCallback } from "react";

import ShowCurrentWeather from "../components/showWeather/showCurrentWeather/ShowCurrentWeather";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
import { IWeather } from "../interfaces/IWeather";

import SearchBox from "../components/searchBox/SearchBox";
import Spinner from "../components/spinner/Spinner";
import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";
import { CityNotFound, LoadingError } from "../components/errors/Errors";

import getCurrentWeather from "../services/getCurrentWeather";

export interface IProps {
  weather: IWeather;
  setWeather: (weather: IWeather) => void;
  query: string;
  setQuery: (query: string) => void;
  coordinates: number[];
  setCoordinates: (coordinates: number[]) => void;
}

const MainPage: React.FC<IProps> = (props) => {
  const { query, setQuery, setCoordinates, weather, setWeather } = props;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClearSearch = () => {
    setQuery("");
    setWeather({});
    setCoordinates([]);
  };

  const clearError = useCallback(() => setError(false), []);

  const onSearch = async (event) => {
    setLoading(true);
    event.preventDefault();
    const result = await getCurrentWeather(query)
      .then((result) => result.json())
      .then((result) => {
        setLoading(false);
        setError(false);
        setWeather(result);
        setQuery(query);
        setCoordinates([result.coord.lat, result.coord.lon]);

        // setLoading(true);
        clearError();
      })
      .then();
    // .catch(setError(true));

    return result;
  };

  return (
    <div className="fade-in">
      <SearchBox
        query={query}
        setQuery={setQuery}
        onSearch={onSearch}
        loading={loading}
      />

      {query && (
        <ButtonSubmit
          onClick={onClearSearch}
          btnText="Очистить"
          variant="danger"
        />
      )}

      {loading && <Spinner />}

      {weather.message === "city not found" ? <CityNotFound /> : null}

      {!loading && error && <LoadingError />}
      {/* <ErrorBoundary> */}

      {!loading && typeof weather.sys !== "undefined" ? (
        <ShowCurrentWeather weather={weather} />
      ) : null}
      {/* <ErrorBoundary/> */}
    </div>
  );
};

export default MainPage;
