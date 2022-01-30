import ShowCurrentWeather from "../components/showWeather/showCurrentWeather/ShowCurrentWeather";

import SearchBox from "../components/searchBox/SearchBox";
import Spinner from "../components/spinner/Spinner";
import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";
import { CityNotFound, LoadingError } from "../components/errors/Errors";

import { useGetWeatherQuery } from "../store/weather/weatherApi";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useState } from "react";

export interface IProps {
  coordinates: number[];
  setCoordinates: (coordinates: number[]) => void;
}

const MainPage: React.FC<IProps> = (props) => {
  const query = useTypedSelector((state) => state.query.value);
  const [queryValue, setQueryValue] = useState(query);

  const { data, error, isFetching, isLoading, isError } =
    useGetWeatherQuery(query);
  console.log("error", error);

  const onClearSearch = () => {
    setQueryValue("");
  };

  console.log("dataMessage", data);

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

      {isError && <LoadingError />}

      {/* <ErrorBoundary> */}
      {!isFetching && data?.sys! && !isError && queryValue && (
        <ShowCurrentWeather data={data} />
      )}
      {/* <ErrorBoundary/> */}
    </div>
  );
};

export default MainPage;
