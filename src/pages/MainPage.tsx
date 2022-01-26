import { useState, useCallback } from "react";

import ShowCurrentWeather from "../components/showWeather/showCurrentWeather/ShowCurrentWeather";
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
  const initialWeatherValue = { name: "" };
  const { query, setQuery, setCoordinates, weather, setWeather } = props;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onClearSearch = () => {
    setQuery("");
    setWeather(initialWeatherValue);
    setCoordinates([]);
  };

  const clearError = useCallback(() => setError(null), []);

  const onSearch = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    const result = await getCurrentWeather(query)
      .then((result) => result.json())
      .then((result) => {
        setLoading(false);
        setError(null);
        setWeather(result);
        setQuery(query);
        setCoordinates([result.coord.lat, result.coord.lon]);
        clearError();
      })
      .then();

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
