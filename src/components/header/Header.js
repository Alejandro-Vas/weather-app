// import logo from "../../resourses/img/logo-min-80px.png";

import "./Header.scss";

const Header = () => {
  const logoCdn =
    "https://rawcdn.githack.com/Alejandro-Vas/weather-app/10827780f269d8862b6f5a34a112d4463d8521d3/src/resourses/img/logo-min-80px.png";
  return (
    <>
      <div className="logo-wrapper">
        <div className="header-img">
          <img src={logoCdn} alt="Weatherman App logo" />
        </div>
        <div className="header-text">
          <h1>Weathermann</h1>
        </div>
      </div>
    </>
  );
};
export default Header;
