import WeatherIcon from "../../weatherIcon/WeatherIcon";
import getWindDirection from "../../../functions/getWindDirection";
import getWeekDay from "../../../functions/getWeekDay";
import { IForecast } from "../../../interfaces/IForecast";

import "../Forecast.scss";
interface IProps {
  forecast: IForecast;
}

const ForecastDaily: React.FC<IProps> = (props) => {
  const { forecast }: IProps = props;
  return (
    <>
      {forecast.daily?.map((el, index) => {
        const date = new Date(el.dt * 1000).toLocaleString().slice(0, 5);
        const weekDay = getWeekDay(el.dt);
        return (
          index > 0 &&
          index < 6 && (
            <div key={index}>
              <div className="forecast fs-6">
                <div className="forecast__item_column">
                  <div className="forecast__item_column fs-4">{date}</div>
                  <div className="forecast__item_column">{weekDay}</div>
                </div>
                <div className="forecast__item">
                  <WeatherIcon icon={el.weather![0].icon} />
                </div>

                <div className="forecast__item_column">
                  <div className="item__column-item">
                    ночь {Math.round(el.temp.night)}°
                  </div>
                  <div className="item__column-item">
                    день {Math.round(el.temp.day)}°
                  </div>
                </div>
                <div className="forecast__item_column">
                  <div className="item__column-item">
                    {getWindDirection(el.wind_deg)}
                  </div>
                  <div className="item__column-item">
                    {Math.round(el.wind_speed)} м/с
                  </div>
                </div>
              </div>
              {index < 7 && <hr className="gradient-hr" />}
            </div>
          )
        );
      })}
    </>
  );
};
export default ForecastDaily;
