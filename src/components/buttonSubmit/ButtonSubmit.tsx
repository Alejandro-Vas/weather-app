import { Button } from "react-bootstrap";

import "./ButtonSubmit.scss";

interface IProps {
  variant: string;
  btnText: string;
  onClick?: () => void;
}

const ButtonSubmit: React.FC<IProps> = (props) => {
  const { variant, btnText, onClick, children } = props;

  return (
    <div className="button-wrapper">
      <div className=" mt-2 shadow mb-3 rounded">
        <Button variant={variant} onClick={onClick}>
          {children} {btnText}
        </Button>
      </div>
    </div>
  );
};

export default ButtonSubmit;
