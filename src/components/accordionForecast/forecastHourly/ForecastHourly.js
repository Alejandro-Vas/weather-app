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
            <div
              key={index}
              className="d-flex align-items-center justify-content-start"
            >
              <div>
                <h3>{unixTimeToLocal(el.dt, true)}</h3>
              </div>
              <WeatherIcon icon={el.weather[0].icon} />
              <div>
                <h3>{Math.round(el.temp)}°</h3>
              </div>
              <div className="d-flex flex-column justify-content-between m-2">
                <div className="text-center">
                  <h4>{getWindDirection(el.wind_deg)}</h4>
                </div>
                <div className="text-center">
                  <h5>{Math.round(el.wind_speed)} м/с</h5>
                </div>
              </div>
            </div>
            {index < 11 && <hr />}
          </>
        ) : null;
      })}
    </>
  );
};
export default ForecastHourly;
