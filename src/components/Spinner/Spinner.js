import "./Spinner.scss";

const Spinner = ({ color }) => {
  return (
    <div className="spinner">
      <div className={`spinner-border text-${color}`} role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>
    </div>
  );
};
export default Spinner;
