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
            <div key={index} className="hourly-weather">
              <div className="hourly-weather__item">
                <h3>{unixTimeToLocal(el.dt, true)}</h3>
              </div>
              <WeatherIcon
                icon={el.weather[0].icon}
                className="hourly-weather__item"
              />
              <div className="hourly-weather__item">
                <h3>{Math.round(el.temp)}°</h3>
              </div>
              <div className="hourly-weather__item_column">
                <div className="item__column-item">
                  <h4>{getWindDirection(el.wind_deg)}</h4>
                </div>
                <div className="item__column-item">
                  <h5>{Math.round(el.wind_speed)} м/с</h5>
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
