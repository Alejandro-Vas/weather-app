import ShowForecastWeather from "../components/showWeather/ShowForecastWeather/ShowForecastWeather";

const ForecastPage = ({ query, setQuery }) => {
  return (
    <>
      <div>
        Сервис "Прогноз" в разработке, в настоящее время отображается текущая
        погода
      </div>
      <p />
      <ShowForecastWeather query={query} setQuery={setQuery} />
    </>
  );
};

export default ForecastPage;
