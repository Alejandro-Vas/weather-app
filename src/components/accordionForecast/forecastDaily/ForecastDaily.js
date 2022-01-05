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
        return index < 5 ? (
          <>
            <div key={index} className="forecast fs-2">
              <div className="forecast__item">{unixTimeToLocal(el.dt)}</div>
              <WeatherIcon
                icon={el.weather[0].icon}
                className="forecast__item"
              />
              <div className="forecast__item">{Math.round(el.temp.day)}°</div>
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
