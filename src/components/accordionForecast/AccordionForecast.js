import { Accordion } from "react-bootstrap";

import unixTimeToLocal from "../../functions/unixTimetoLocal";
import getWindDirection from "../../functions/getWindDirection";
import WeatherIcon from "../../components/weatherIcon/WeatherIcon";

import "./AccordionForecast.scss";

const AccordionForecast = ({ forecast }) => {
  return (
    <Accordion
      className="accordion-forecast"
      defaultActiveKey={["0"]}
      alwaysOpen
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Погода поминуно</Accordion.Header>
        <Accordion.Body>
          <div> {forecast.lat} </div>
          <div> {forecast.lon} </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Погода на завтра</Accordion.Header>
        <Accordion.Body>
          <div> {forecast.lat} </div>
          <div> {forecast.lon} </div>
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
