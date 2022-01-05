import WeatherIcon from "../../weatherIcon/WeatherIcon";
import unixTimeToLocal from "./../../../functions/unixTimetoLocal";
import getWindDirection from "./../../../functions/getWindDirection";

import "./ForecastHourly.scss";

const ForecastHourly = (props) => {
  const {
    forecast: { hourly },
  } = props;
  return (
    <>
      {hourly.map((el, index) => {
        return index > 0 && index < 13 ? (
          <>
            <div key={index} className="hourly-weather fs-2">
              <div className="hourly-weather__item">
                {unixTimeToLocal(el.dt, true)}
              </div>
              <WeatherIcon
                icon={el.weather[0].icon}
                className="hourly-weather__item"
              />
              <div className="hourly-weather__item">{Math.round(el.temp)}°</div>
              <div className="hourly-weather__item_column">
                <div className="item__column-item">
                  {getWindDirection(el.wind_deg)}
                </div>
                <div className="item__column-item">
                  {Math.round(el.wind_speed)} м/с
                </div>
              </div>
            </div>
            {index < 12 && <hr id="hr-hourly" />}
          </>
        ) : null;
      })}
    </>
  );
};
export default ForecastHourly;
