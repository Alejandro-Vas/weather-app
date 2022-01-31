import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import NavigateBar from "../navigateBar/NavigateBar";

import MainPage from "../../pages/MainPage";
import AboutPage from "../../pages/AboutPage";
import Page404 from "../../pages/404Page";

import ForecastPage from "../../pages/ForecastPage";

import { useGetWeatherQuery } from "../../store/weather/weatherApi";

import "./App.scss";

const App: React.FC = () => {
  const { data: weather } = useGetWeatherQuery("Киров");



  return (
    <Router>
      <div className="container">
        <Header />
        <NavigateBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="forecast" element={<ForecastPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
