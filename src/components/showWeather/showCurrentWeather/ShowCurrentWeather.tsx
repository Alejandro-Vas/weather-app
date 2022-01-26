import WeatherIcon from "../../weatherIcon/WeatherIcon";

import unixTimeToLocal from "../../../functions/unixTimeToLocal";
import getWindDirection from "../../../functions/getWindDirection";

import "./ShowCurrentWeather.scss";

import { IWeather } from "../../../interfaces/IWeather";

const ShowCurrentWeather: React.FC = ({ weather }: IWeather) => {
  return (
    <div className="fade-in shadow-lg p-3 mb-5 rounded">
      <div className="city-header">
        <h3>
          {weather.name} (
          {weather.sys.country === "RU" ? "Россия" : weather.sys.country})
        </h3>
      </div>
      <div className="weather">
        <div className="weather weather_center">
          <div className="weather__item">
            <WeatherIcon icon={weather.weather[0].icon} />
          </div>
          <div className="weather__item">
            <div>{Math.round(weather.main.temp)}°</div>
          </div>
        </div>

        <div className="weather__item">
          <div>Ощущается </div>
          <div>{Math.round(weather.main.feels_like)}°</div>
        </div>
      </div>
      <hr className="gradient-hr"></hr>
      <div className="weather">
        <div className="weather__item">
          <div>Ветер: {Math.round(weather.wind.speed)} м/с</div>
          <div>Направление: {getWindDirection(weather.wind.deg)}</div>
        </div>

        <div className="weather__item">
          <div>
            Восход {unixTimeToLocal(weather.sys.sunrise + weather.timezone)}
          </div>
          <div>
            Закат {unixTimeToLocal(weather.sys.sunset + weather.timezone)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCurrentWeather;
