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
        return index > 0 && index < 12 ? (
          <>
            <div key={index} className="d-flex align-items-center">
              <div>
                <h3>{unixTimeToLocal(el.dt, true)}</h3>
              </div>
              <WeatherIcon icon={el.weather[0].icon} />
              <div className="forecast-wrapper">
                <div>
                  температура {Math.round(el.temp)}°, ощущается как{" "}
                  {el.feels_like}°
                </div>
                <div>
                  ветер {el.wind_speed} м/с, {getWindDirection(el.wind_deg)},{" "}
                  {el.weather[0].description}
                </div>
              </div>
            </div>
            <hr />
          </>
        ) : null;
      })}
    </>
  );
};
export default ForecastHourly;
