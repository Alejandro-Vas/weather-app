import WeatherIcon from "../../weatherIcon/WeatherIcon";
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
        return (
          index > 0 &&
          index < 6 && (
            <div key={index}>
              <div className="forecast fs-6">
                <div className="forecast__item_date fs-3">{date}</div>
                <WeatherIcon
                  icon={el.weather[0].icon}
                  className="forecast__item"
                />
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
              {index < 7 && <hr id="gradient-hr" />}
            </div>
          )
        );
      })}
    </>
  );
};
export default ForecastDaily;
