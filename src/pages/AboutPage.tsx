import ButtonSubmit from "../components/buttonSubmit/ButtonSubmit";
import githubLogo from "../resources/img/GitHub-Mark-32px.png";

const AboutPage: React.FC = () => {
  return (
    <div className="fade-in shadow-lg p-3 mb-5 rounded">
      <div className="repo-link repo-link_text">
        <div>
          Источник данных:
          <a className="link" href="https://openweathermap.org/">
            {" "}
            openweathermap.org
          </a>
        </div>
      </div>
      <div className="repo-link ">
        <div className="repo-link__item">
          <a
            className="link"
            href="https://github.com/Alejandro-Vas/weather-app"
          >
            <ButtonSubmit btnText="Alejandro-Vas" variant="success">
              <img src={githubLogo} alt="gitHub repository" />
            </ButtonSubmit>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
