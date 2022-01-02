import { Accordion } from "react-bootstrap";

import "./AccordionForecast.scss";

const AccordionForecast = ({ forecast }) => {
  return (
    <Accordion
      className="accordion-forecast"
      defaultActiveKey={["0"]}
      alwaysOpen
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <pre>{JSON.stringify(forecast, undefined, 2)}</pre>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          <pre>{JSON.stringify(forecast, undefined, 2)}</pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionForecast;
