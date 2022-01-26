import ShowCurrentWeather from "../components/showWeather/showCurrentWeather/ShowCurrentWeather";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
import { IWeather } from "../interfaces/IWeather";

interface IProps {
  weather: IWeather;
  setWeather: (weather: IWeather) => void;
  query: string;
  setQuery: (query: string) => void;
  coordinates: number[];
  setCoordinates: (coordinates: number[]) => void;

}

const MainPage: React.FC<IProps> = (props) => {
  return (
    <>
      {/* <ErrorBoundary> */}
      <ShowCurrentWeather {...props} />
      {/* </ErrorBoundary> */}
    </>
  );
};

export default MainPage;
