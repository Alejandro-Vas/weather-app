import "./Spinner.scss";

const Spinner = ({ color }) => {
  return (
    <div className="spinner">
      <div className={`spinner-border text-${color}`} role="status"></div>
    </div>
  );
};
export default Spinner;
