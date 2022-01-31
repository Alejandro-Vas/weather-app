import { IWeather } from "../../../interfaces/IWeather";

import WeatherIcon from "../../weatherIcon/WeatherIcon";
import unixTimeToLocal from "../../../functions/unixTimeToLocal";
import getWindDirection from "../../../functions/getWindDirection";

import "./ShowCurrentWeather.scss";

interface IProps {
  data: IWeather;
}

const ShowCurrentWeather: React.FC<IProps> = ({ data }) => {
  return (
    <div className="fade-in shadow-lg p-3 mb-5 rounded">
      <div className="city-header">
        <h3>
          {data.name} (
          {data.sys?.country === "RU" ? "Россия" : data.sys?.country})
        </h3>
      </div>
      <div className="weather">
        <div className="weather weather_center">
          <div className="weather__item">
            <WeatherIcon icon={data.weather![0].icon!} />
          </div>
          <div className="weather__item">
            <div>{Math.round(data.main?.temp!)}°</div>
          </div>
        </div>

        <div className="weather__item">
          <div>Ощущается </div>
          <div>{Math.round(data.main?.feels_like!)}°</div>
        </div>
      </div>
      <hr className="gradient-hr"></hr>
      <div className="weather">
        <div className="weather__item">
          <div>Ветер: {Math.round(data.wind?.speed!)} м/с</div>
          <div>Направление: {getWindDirection(data.wind?.deg!)}</div>
        </div>

        <div className="weather__item">
          <div>
            Восход {unixTimeToLocal(data.sys?.sunrise!, data.timezone!)}
          </div>
          <div>Закат {unixTimeToLocal(data.sys?.sunset!, data.timezone!)}</div>
        </div>
      </div>
    </div>
  );
};

export default ShowCurrentWeather;
