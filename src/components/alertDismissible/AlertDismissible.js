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
        <p>{alertText}</p>
        <p>
          <Link className="back-to-main" to="/">
            <ButtonSubmit btnText="Выбрать город" variant={variant} />
          </Link>
        </p>
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
