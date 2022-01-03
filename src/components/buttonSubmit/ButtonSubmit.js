import { Button } from "react-bootstrap";

import "./ButtonSubmit.scss";

const ButtonSubmit = (props) => {
  const { variant, btnText } = props;

  return (
    <div className="button-wrapper">
      <div className=" mt-2 shadow mb-5 bg-white rounded">
        <Button variant={variant}>{btnText}</Button>
      </div>
    </div>
  );
};

export default ButtonSubmit;
