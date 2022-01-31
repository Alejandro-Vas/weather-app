import ShowCurrentWeather from "../components/showWeather/showCurrentWeather/ShowCurrentWeather";

import SearchBox from "../components/searchBox/SearchBox";
import Spinner from "../components/spinner/Spinner";
import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";
import { LoadingError } from "../components/errors/Errors";

import { useGetWeatherQuery } from "../store/weather/weatherApi";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useEffect, useState } from "react";

import useActions from "../hooks/useActions";

const MainPage: React.FC = () => {
  const query = useTypedSelector((state) => state.query.value);
  const [queryValue, setQueryValue] = useState(query);
  const { setCoordinates } = useActions();

  const {
    data: weather,
    isFetching,
    isLoading,
    isError,
  } = useGetWeatherQuery(query);

  const onClearSearch = () => {
    setQueryValue("");
  };

  return (
    <div className="fade-in">
      <SearchBox
        isLoading={isLoading}
        queryValue={queryValue}
        setQueryValue={setQueryValue}
      />

      <ButtonSubmit
        onClick={onClearSearch}
        btnText="Очистить"
        variant="danger"
      />

      {isFetching && <Spinner />}

      {isError && <LoadingError />}

      {/* <ErrorBoundary> */}
      {!isFetching && weather?.sys! && !isError && queryValue && (
        <ShowCurrentWeather data={weather} />
      )}
      {/* <ErrorBoundary/> */}
    </div>
  );
};

export default MainPage;
