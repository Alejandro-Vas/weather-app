import "./Spinner.scss";

const Spinner = ({ color }) => {
  return (
    <div className="spinner fade-in">
      <div
        className={`spinner__icon spinner-border text-${color}`}
        role="status"
      ></div>
      <div className="spinner__text">загрузка...</div>
    </div>
  );
};
export default Spinner;
