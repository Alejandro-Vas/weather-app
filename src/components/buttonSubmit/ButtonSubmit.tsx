import { Button } from "react-bootstrap";

import "./ButtonSubmit.scss";

interface IProps {
  variant: string;
  btnText: string;
  onClick?: () => void;
}

const ButtonSubmit: React.FC<IProps> = (props) => {
  const { variant, btnText, onClick } = props;

  return (
    <div className="button-wrapper">
      <div className=" mt-2 shadow mb-5 rounded">
        <Button variant={variant} onClick={onClick}>
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default ButtonSubmit;
