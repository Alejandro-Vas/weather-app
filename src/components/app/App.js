import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import NavigateBar from "../navigateBar/NavigateBar";

import MainPage from "../../pages/MainPage";
import AboutPage from "../../pages/AboutPage";
import Page404 from "../../pages/404Page";
import useLocalStorage from "../../hooks/useLocalStorage";

import ForecastPage from "../../pages/ForecastPage";

import "./App.scss";

const App = () => {
  const [weather, setWeather] = useState({});

  const [coordinates, setCoordinates] = useLocalStorage(
    "coordinates",
    [58.5966, 49.6601]
  );
  const [queryLocalStorage, setQueryLocalStorage] = useLocalStorage(
    "Query",
    "Киров"
  );
  const [query, setQuery] = useState(queryLocalStorage);

  useEffect(() => {
    document.title = weather.name ? `Погода ${weather.name}` : `Погода`;
  }, [weather]);

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
                weather={weather}
                setWeather={setWeather}
                query={query}
                setQuery={setQuery}
                coordinates={coordinates}
                setCoordinates={setCoordinates}
                setQueryLocalStorage={setQueryLocalStorage}
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
                setCoordinates={setCoordinates}
                weatherName={weather.name}
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
