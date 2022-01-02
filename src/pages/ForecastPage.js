import ShowForecastWeather from "../components/showWeather/ShowForecastWeather/ShowForecastWeather";

const ForecastPage = (props) => {
  return (
    <>
      <div>Сервис "Прогноз" в разработке...</div>
      <p />

      <ShowForecastWeather {...props} />
    </>
  );
};

export default ForecastPage;
