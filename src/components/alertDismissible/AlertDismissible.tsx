import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonSubmit from "../buttonSubmit/ButtonSubmit";

interface IProps {
  variant: string;
  alertHeading: string;
  alertText: string;
}

const AlertDismissible: React.FC<IProps> = (props) => {
  const { variant, alertHeading, alertText } = props;
  const [show, setShow] = useState(true);

  return !show ? (
    <Button onClick={() => setShow(true)} variant={variant}>
      {alertHeading}
    </Button>
  ) : (
    <Alert variant={variant} onClose={() => setShow(false)} dismissible>
      <Alert.Heading>{alertHeading}</Alert.Heading>
      <div className="d-flex justify-content-center">{alertText}</div>
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
};

export default AlertDismissible;
