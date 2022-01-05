import ForecastHourly from "./forecastHourly/ForecastHourly";
import ForecastDaily from "./forecastDaily/ForecastDaily";
import { Accordion } from "react-bootstrap";
import "./AccordionForecast.scss";

const AccordionForecast = ({ forecast }) => {
  return (
    <Accordion
      className="accordion-forecast mt-2 shadow mb-5 rounded"
      defaultActiveKey={["0"]}
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h4>Прогноз на 12 часов</h4>
        </Accordion.Header>
        <Accordion.Body>
          <ForecastHourly forecast={forecast} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h4>Прогноз на 5 дней</h4>
        </Accordion.Header>
        <Accordion.Body>
          <ForecastDaily forecast={forecast} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionForecast;
