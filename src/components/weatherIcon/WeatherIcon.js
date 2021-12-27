import weatherIconsAppear from "../../functions/weatherIconsAppear";

import "./WeatherIcon.scss";

const WeatherIcon = ({ icon }) => {
  return (
    <div>
      <img
        className="weather-img"
        alt="current weather"
        src={weatherIconsAppear(icon)}
      />
    </div>
  );
};

export default WeatherIcon;
