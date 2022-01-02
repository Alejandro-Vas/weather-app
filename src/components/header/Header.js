// import logo from "../../resourses/img/logo-min-80px.png";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const logoCDN =
    "https://rawcdn.githack.com/Alejandro-Vas/weather-app/10827780f269d8862b6f5a34a112d4463d8521d3/src/resourses/img/logo-min-80px.png";
  return (
    <>
      <div className="header-wrapper">
        <Link to="/">
          <div className="header-wrapper__img">
            <img
              className="header-wrapper__logo"
              src={logoCDN}
              alt="Weather App"
            />
          </div>
        </Link>

        <div className="header-text">
          <h1>Weathermann</h1>
        </div>
      </div>
    </>
  );
};
export default Header;
