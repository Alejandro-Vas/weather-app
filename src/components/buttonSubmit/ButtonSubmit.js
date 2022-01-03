import { Button } from "react-bootstrap";

const ButtonSubmit = (props) => {
  const { variant, btnText } = props;

  return (
    <div className="mt-2 shadow-lg mb-5 bg-white rounded">
      <Button variant={variant}>{btnText}</Button>
    </div>
  );
};

export default ButtonSubmit;
