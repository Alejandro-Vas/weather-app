import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import NaviBar from "../naviBar/NaviBar";

import MainPage from "../../pages/MainPage";
import AboutPage from "../../pages/AboutPage";

import ForecastPage from "../../pages/ForecastPage";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <NaviBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route exact path="forecast" element={<ForecastPage />} />
          <Route exat path="about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
