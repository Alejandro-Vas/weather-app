import { useEffect, useState } from "react";
import { useGetWeatherQuery } from "../store/weather/weatherApi";
import { useTypedSelector } from "../hooks/useTypedSelector";

import { LoadingError } from "../components/errors/Errors";
import ShowWeather from "../components/showWeather/ShowWeather";
import SearchBox from "../components/searchBox/SearchBox";
import Spinner from "../components/spinner/Spinner";
import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";

const MainPage: React.FC = () => {
  const query = useTypedSelector((state) => state.query.value);
  const [queryValue, setQueryValue] = useState(query);

  const {
    data: weather,
    isFetching,
    isLoading,
    isError,
  } = useGetWeatherQuery(query);

  useEffect(() => {
    document.title = weather?.name ? `Погода ${weather.name}` : `Погода`;
  }, [weather]);

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

      {isFetching && <Spinner color="primary" />}

      {isError && <LoadingError />}

      {/* <ErrorBoundary> */}
      {!isFetching && weather?.sys! && !isError && queryValue && (
        <ShowWeather data={weather} />
      )}
      {/* <ErrorBoundary/> */}
    </div>
  );
};

export default MainPage;
