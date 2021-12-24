import Header from "../header/Header";
import GetWeatherService from "../../services/GetWeatherService";

GetWeatherService();

const App = () => {
  return (
    <>
      <Header />
      <div>hi</div>
    </>
  );
};

export default App;
