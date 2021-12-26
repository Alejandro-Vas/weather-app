import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import MainPage from "../../pages/MainPage";
import NaviBar from "../naviBar/NaviBar";
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
