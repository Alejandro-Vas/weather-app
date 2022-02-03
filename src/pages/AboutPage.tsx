import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";
import githubLogo from "../resources/img/GitHub-Mark-32px.png";

import "./AboutPage.scss";

const AboutPage: React.FC = () => {
  return (
    <div className="fade-in shadow-lg p-3 mb-5 rounded">
      <div className="repo-link">
        <div className="repo-link__item">
          <a href="https://github.com/Alejandro-Vas/weather-app">
            <ButtonSubmit btnText="Alejandro-VAS" variant="warning">
              <img src={githubLogo} alt="gitHub repository" />
            </ButtonSubmit>
          </a>
        </div>
      </div>

      <div>
        Источник данных{" "}
        <a href="https://openweathermap.org/">openweathermap.org</a>
      </div>
    </div>
  );
};

export default AboutPage;
