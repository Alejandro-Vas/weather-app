import { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import NavigateBar from "../navigateBar/NavigateBar";

import MainPage from "../../pages/MainPage";
import AboutPage from "../../pages/AboutPage";
import Page404 from "../../pages/404Page";

import ForecastPage from "../../pages/ForecastPage";

import { IWeather } from "../../interfaces/IWeather";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useGetWeatherQuery } from "../../store/weather/weatherApi";

import "./App.scss";

const App: React.FC = () => {
  const [coordinates, setCoordinates] = useState([58.5966, 49.6601]);
  const [query, setQuery] = useState("Киров");

  const { data } = useGetWeatherQuery(query);

  useEffect(() => {
    document.title = data?.name ? `Погода ${data.name}` : `Погода`;
  }, [data]);

  return (
    <Router>
      <div className="container">
        <Header />
        <NavigateBar />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                coordinates={coordinates}
                setCoordinates={setCoordinates}
              />
            }
          />
          <Route
            path="forecast"
            element={
              <ForecastPage
                query={query}
                setQuery={setQuery}
                coordinates={coordinates}
                setCoordinates={setCoordinates}
                forecastCity={data?.name}
              />
            }
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
