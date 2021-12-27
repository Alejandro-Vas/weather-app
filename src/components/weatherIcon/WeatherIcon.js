import weatherIconsAppear from "../../functions/weatherIconsAppear";

const WeatherIcon = ({ icon }) => {
  return (
    <div>
      <img alt="current weather icon" src={weatherIconsAppear(icon)} />
    </div>
  );
};

export default WeatherIcon;
