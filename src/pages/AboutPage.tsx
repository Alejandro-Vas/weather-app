import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";
import githubLogo from "../resources/img/GitHub-Mark-32px.png";
import "./AboutPage.scss";

const AboutPage: React.FC = () => {
  return (
    <div className="fade-in">
      <div>
        Источник данных{" "}
        <a href="https://openweathermap.org/">openweathermap.org</a>
      </div>
      <div>
        Пожелания по развитию проекта можно направлять:
        <div className="repo-link">
          <div className="repo-link__item repo-link__item_icon ">
            <a href="https://github.com/Alejandro-Vas/weather-app">
              <img src={githubLogo} alt="gitHub repository" />
            </a>
          </div>

          <div className="repo-link__item">
            <a href="https://github.com/Alejandro-Vas/weather-app">
              <ButtonSubmit btnText="Перейти на GitHub" variant="success" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;