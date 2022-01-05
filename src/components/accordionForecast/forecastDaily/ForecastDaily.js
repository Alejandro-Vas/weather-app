import WeatherIcon from "../../weatherIcon/WeatherIcon";
import unixTimeToLocal from "../../../functions/unixTimetoLocal";
import getWindDirection from "../../../functions/getWindDirection";

import "../Forecast.scss";

const ForecastDaily = (props) => {
  const {
    forecast: { daily },
  } = props;
  return (
    <>
      {daily.map((el, index) => {
        const date = new Date(el.dt * 1000).toLocaleString().slice(0, 5);
        return index < 5 ? (
          <>
            <div key={index} className="forecast fs-6">
              <div className="forecast__item">{date}</div>
              <WeatherIcon
                icon={el.weather[0].icon}
                className="forecast__item"
              />
              <div className="forecast__item_column">
                <div className="item__column-item">
                  ночь {Math.round(el.temp.night)}°
                </div>
                <div className="item__column-item">
                  утро {Math.round(el.temp.morn)}°
                </div>
                <div className="item__column-item">
                  день {Math.round(el.temp.day)}°
                </div>
                <div className="item__column-item">
                  вечер {Math.round(el.temp.eve)}°
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
            {index < 6 && <hr id="gradient-hr" />}
          </>
        ) : null;
      })}
    </>
  );
};
export default ForecastDaily;
