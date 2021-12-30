import githubLogo from "../resourses/img/GitHub-Mark-32px.png";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <div>Спасибо, что пользуетесь данным сервисом.</div>
      <div>
        Пожелания по развитию проекта можно направлять:
        <div className="repo-link">
          <div className="repo-link--item">
            <a href="https://github.com/Alejandro-Vas/weather-app">
              <img src={githubLogo} alt="gitHub repository" />
            </a>
          </div>

          <div className="repo-link--item">
            <a
              className="repo-link"
              href="https://github.com/Alejandro-Vas/weather-app"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
