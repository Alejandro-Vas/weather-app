import { Link } from "react-router-dom";
import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";

const Page404: React.FC = () => {
  return (
    <div>
      <p className="not-found-text">Страница не найдена</p>
      <Link className="back-to-main-link" to="/">
        <ButtonSubmit btnText="Вернуться на главную" variant="primary" />
      </Link>
    </div>
  );
};

export default Page404;
