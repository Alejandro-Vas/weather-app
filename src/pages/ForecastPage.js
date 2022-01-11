import ShowForecastWeather from "../components/showWeather/ShowForecastWeather/ShowForecastWeather";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
const ForecastPage = (props) => {
  return (
    <>
      <ErrorBoundary>
        <ShowForecastWeather {...props} />
      </ErrorBoundary>
    </>
  );
};

export default ForecastPage;
