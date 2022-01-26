import ShowForecastWeather from "../components/showWeather/ShowForecastWeather/ShowForecastWeather";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
interface IProps {
  query: string;
  setQuery: (query: string) => void;
  coordinates: number[];
  setCoordinates: (coordinates: number[]) => void;
  weatherName: string | undefined;
}

const ForecastPage: React.FC<IProps> = (props) => {
  return (
    <>
      {/* <ErrorBoundary> */}
      <ShowForecastWeather {...props} />
      {/* </ErrorBoundary> */}
    </>
  );
};

export default ForecastPage;
