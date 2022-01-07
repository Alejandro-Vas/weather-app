import logo from "../../resources/img/logo-min-80px.png";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <Link to="/">
          <div className="header-wrapper__img">
            <img
              className="header-wrapper__logo"
              src={logo}
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
