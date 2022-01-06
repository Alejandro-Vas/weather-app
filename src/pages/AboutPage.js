import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";
import githubLogo from "../resourses/img/GitHub-Mark-32px.png";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <div>
        <h3>Источник данных - openweathermap.org</h3>
      </div>

      <div>
        Пожелания по развитию проекта можно направлять:
        <div className="repo-link">
          <div className="repo-link__item mt-2">
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
    </>
  );
};

export default AboutPage;
