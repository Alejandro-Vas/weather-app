import logo from "../../resourses/img/logo-min-80px.png";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="logo-wrapper">
        <div className="header-img">
          <img src={logo} alt="Weatherman App logo" />
        </div>
        <div className="header-text">
          <h1>Weathermann</h1>
        </div>
      </div>
    </>
  );
};
export default Header;
