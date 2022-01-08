import ShowCurrentWeather from "../components/showWeather/showCurrentWeather/ShowCurrentWeather";

const MainPage = (props) => {
  return (
    <>
      <ShowCurrentWeather {...props} />
    </>
  );
};

export default MainPage;

