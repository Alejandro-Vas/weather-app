import GetWeatherService from "../../services/GetWeatherService";

const TodayWeather = () => {
  GetWeatherService();
  return (
    <>
      <div>todayWeather</div>
    </>
  );
};

export default TodayWeather;
