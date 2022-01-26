import "./Spinner.scss";

interface IProps {
  color?: string;
}

const Spinner: React.FC<IProps> = ({ color }) => {
  return (
    <div className="spinner">
      <div
        className={`spinner__icon spinner-border text-${color}`}
        role="status"
      ></div>
      <div className="spinner__text">загрузка...</div>
    </div>
  );
};
export default Spinner;
