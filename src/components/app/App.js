import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import NaviBar from "../naviBar/NaviBar";

import MainPage from "../../pages/MainPage";
import AboutPage from "../../pages/AboutPage";
import Page404 from "../../pages/404Page";

import ForecastPage from "../../pages/ForecastPage";

import "./App.scss";

const App = () => {
  const [query, setQuery] = useState("");

  const [coordinates, setCoordinates] = useState([58.5966, 49.6601]);

  return (
    <Router>
      <div className="container">
        <Header />
        <NaviBar />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                query={query}
                setQuery={setQuery}
                coordinates={coordinates}
                setCoordiantes={setCoordinates}
              />
            }
          />
          <Route
            exact
            path="forecast"
            element={
              <ForecastPage
                query={query}
                setQuery={setQuery}
                coordinates={coordinates}
                setCoordiantes={setCoordinates}
              />
            }
          />
          <Route exat path="about" element={<AboutPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
