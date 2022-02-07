import weatherIconsAppear from "../../functions/weatherIconsAppear";
import "./WeatherIcon.scss";
interface IProps {
  icon: string;
}

const WeatherIcon: React.FC<IProps> = ({ icon }) => {
  return (
    <div>
      <img
        className="weather-img"
        alt="current weather"
        src={weatherIconsAppear(icon)}
      />
    </div>
  );
};

export default WeatherIcon;
