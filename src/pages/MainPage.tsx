import ShowCurrentWeather from "../components/showWeather/showCurrentWeather/ShowCurrentWeather";

import SearchBox from "../components/searchBox/SearchBox";
import Spinner from "../components/spinner/Spinner";
import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";
import { CityNotFound, LoadingError } from "../components/errors/Errors";

import { useGetWeatherQuery } from "../store/weather/weather-api";
import useActions from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useState } from "react";

export interface IProps {
  coordinates: number[];
  setCoordinates: (coordinates: number[]) => void;
}

const MainPage: React.FC<IProps> = (props) => {
  const { setCoordinates } = props;
  const query = useTypedSelector((state) => state.query.value);
  const [queryValue, setQueryValue] = useState(query);

  const { data, isFetching, isLoading, isError } = useGetWeatherQuery(query);

  const onClearSearch = () => {
    setQueryValue("");
  };

  return (
    <div className="fade-in">
      <SearchBox
        loading={isLoading}
        queryValue={queryValue}
        setQueryValue={setQueryValue}
      />

      <ButtonSubmit
        onClick={onClearSearch}
        btnText="Очистить"
        variant="danger"
      />

      {isFetching && <Spinner />}

      {data?.message === "city not found" && <CityNotFound />}

      {!isLoading && isError && queryValue && <LoadingError />}

      {/* <ErrorBoundary> */}
      {!isFetching && data?.sys! && !isError && queryValue && (
        <ShowCurrentWeather data={data} />
      )}
      {/* <ErrorBoundary/> */}
    </div>
  );
};

export default MainPage;
