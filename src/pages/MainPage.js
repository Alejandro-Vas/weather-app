import ShowCurrentWeather from "../components/showWeather/showCurrentWeather/ShowCurrentWeather";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

const MainPage = (props) => {
  return (
    <>
      <ErrorBoundary>
        <ShowCurrentWeather {...props} />
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
