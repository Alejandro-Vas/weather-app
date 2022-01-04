import { NavLink } from "react-router-dom";

import "./NaviBar.scss";

const NaviBar = () => {
  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            id="pills-home-tab"
            data-toggle="pill"
            to="/"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            ПОГОДА СЕЙЧАС
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            id="pills-profile-tab"
            data-toggle="pill"
            to="forecast"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            ПРОГНОЗ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            id="pills-contact-tab"
            data-toggle="pill"
            to="about"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            ABOUT
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NaviBar;
