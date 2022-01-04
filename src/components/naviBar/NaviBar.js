import { useState } from "react";
import { Link } from "react-router-dom";

import "./NaviBar.scss";

const NaviBar = () => {
  const [isActive, setActive] = useState({ 0: true, 1: false, 2: false });

  const handleToggle = (i) => {
    setActive({ 0: false, 1: false, 2: false });
    setActive((prevState) => ({ ...prevState, [i]: true }));
  };

  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item">
          <Link
            className={isActive[0] ? "nav-link active" : "nav-link"}
            onClick={() => handleToggle(0)}
            id="pills-home-tab"
            data-toggle="pill"
            to="/"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            ПОГОДА СЕЙЧАС
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={isActive[1] ? "nav-link active" : "nav-link"}
            onClick={() => handleToggle(1)}
            id="pills-profile-tab"
            data-toggle="pill"
            to="forecast"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            ПРОГНОЗ
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={isActive[2] ? "nav-link active" : "nav-link"}
            onClick={() => handleToggle(2)}
            id="pills-contact-tab"
            data-toggle="pill"
            to="about"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            ABOUT
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NaviBar;
