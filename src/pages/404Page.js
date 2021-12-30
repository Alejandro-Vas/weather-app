import { Link } from "react-router-dom";
import "./404page.scss";

const Page404 = () => {
  return (
    <div>
      <p className="not-found-text">Страница не найдена</p>
      <Link className="back-to-main" to="/">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default Page404;
