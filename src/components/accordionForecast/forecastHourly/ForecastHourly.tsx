import WeatherIcon from "../../weatherIcon/WeatherIcon";
import unixTimeToLocal from "../../../functions/unixTimeToLocal";
import getWindDirection from "../../../functions/getWindDirection";

import "../Forecast.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useGetForecastQuery } from "../../../store/forecast/forecastApi";

const ForecastHourly: React.FC = () => {
  const coordinates = useTypedSelector((state) => state.coordinates.value);
  console.log(coordinates);
  const { data: forecast } = useGetForecastQuery(coordinates);
  console.log(forecast);
  return (
    <>
      {forecast?.hourly?.map((el, index) => {
        return index > 0 && index < 13 ? (
          <div key={index}>
            <div className="forecast fs-5">
              <div className="forecast__item  fs-3">
                {unixTimeToLocal(el.dt, forecast?.timezone_offset!)}
              </div>
              <div className="forecast__item">
                <WeatherIcon icon={el.weather![0].icon} />
              </div>

              <div className="forecast__item">{Math.round(el.temp)}°</div>
              <div className="forecast__item_column">
                <div className="item__column-item">
                  {getWindDirection(el.wind_deg)}
                </div>
                <div className="item__column-item">
                  {Math.round(el.wind_speed)} м/с
                </div>
              </div>
            </div>
            {index < 12 && <hr className="gradient-hr" />}
          </div>
        ) : null;
      })}
    </>
  );
};
export default ForecastHourly;
