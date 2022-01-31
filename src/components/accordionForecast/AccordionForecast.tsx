import { Accordion } from "react-bootstrap";

import ForecastHourly from "./forecastHourly/ForecastHourly";
import ForecastDaily from "./forecastDaily/ForecastDaily";

import "./AccordionForecast.scss";

const AccordionForecast: React.FC = () => {
  return (
    <Accordion className="accordion-forecast mt-2 shadow mb-5 rounded">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h4>Прогноз на 12 часов</h4>
        </Accordion.Header>
        <Accordion.Body>
          <ForecastHourly />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h4>Прогноз на 5 дней</h4>
        </Accordion.Header>
        <Accordion.Body>
          <ForecastDaily />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionForecast;
