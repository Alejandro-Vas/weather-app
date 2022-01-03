import { Link } from "react-router-dom";

import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";
import "./404page.scss";

const Page404 = () => {
  return (
    <div>
      <p className="not-found-text">Страница не найдена</p>
      <Link className="back-to-main" to="/">
        <ButtonSubmit btnText="Вернуться на главную" variant="primary" />
      </Link>
    </div>
  );
};

export default Page404;
