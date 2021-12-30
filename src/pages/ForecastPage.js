import ShowForecastWeather from "../components/showWeather/ShowForecastWeather/ShowForecastWeather";

const ForecastPage = (props) => {
  return (
    <>
      <div>
        Сервис "Прогноз" в разработке, в настоящее время отображается текущая
        погода
      </div>
      <p />
      <ShowForecastWeather {...props} />
    </>
  );
};

export default ForecastPage;
