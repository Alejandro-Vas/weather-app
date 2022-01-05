import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonSubmit from "../buttonSubmit/ButtonSubmit";

const AlertDismissible = (props) => {
  const { variant, alertHeading, alertText } = props;
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{alertHeading}</Alert.Heading>
        {alertText}
        <div className="d-flex justify-content-around">
          <Link className="alert__item" to="/">
            <ButtonSubmit btnText="Выбрать город" variant={variant} />
          </Link>

          <Link className="alert__item" to="/about">
            <ButtonSubmit btnText="Узнать больше" variant="warning" />
          </Link>
        </div>
      </Alert>
    );
  }
  return (
    <Button onClick={() => setShow(true)} variant={variant}>
      {alertHeading}
    </Button>
  );
};

export default AlertDismissible;
