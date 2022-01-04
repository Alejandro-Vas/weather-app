import { Accordion } from "react-bootstrap";

import getWindDirection from "../../functions/getWindDirection";
import WeatherIcon from "../../components/weatherIcon/WeatherIcon";

import "./AccordionForecast.scss";
import ForecastMinutely from "./forecastMinutely/ForecastMinutely";
import ForecastHourly from "./forecastHourly/ForecastHourly";

const AccordionForecast = ({ forecast }) => {
  return (
    <Accordion
      className="accordion-forecast mt-2 shadow mb-5 rounded"
      defaultActiveKey={["0"]}
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Вероятность осадков в ближайший час</Accordion.Header>
        <Accordion.Body>
          <ForecastMinutely forecast={forecast} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Погода на завтра</Accordion.Header>
        <Accordion.Body>
          <ForecastHourly forecast={forecast} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Погода на 3 дня</Accordion.Header>
        <Accordion.Body>
          <div> {forecast.lon} </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>JSON</Accordion.Header>
        <Accordion.Body>
          <pre>{JSON.stringify(forecast, undefined, 2)}</pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionForecast;
