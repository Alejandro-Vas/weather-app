import WeatherIcon from "../../weatherIcon/WeatherIcon";
import unixTimeToLocal from "./../../../functions/unixTimetoLocal";
import getWindDirection from "./../../../functions/getWindDirection";

const ForecastHourly = (props) => {
  const {
    forecast: { hourly },
  } = props;
  return (
    <>
      {hourly.map((el, index) => {
        return index > 0 && index < 12 ? (
          <div key={index}>
            <WeatherIcon icon={el.weather[0].icon} />
            <div>{unixTimeToLocal(el.dt, true)}</div>
            <div>
              температура {Math.round(el.temp)}°, ощущается как {el.feels_like}
              °, ветер {el.wind_speed} м/с, {getWindDirection(el.wind_deg)},{" "}
              {el.weather[0].description}
            </div>
            <hr />
          </div>
        ) : null;
      })}
    </>
  );
};
export default ForecastHourly;
