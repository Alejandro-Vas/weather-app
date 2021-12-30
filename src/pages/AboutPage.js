import githubLogo from "../resourses/img/GitHub-Mark-32px.png";

const AboutPage = () => {
  return (
    <>
      <div>Спасибо, что пользуетесь данным сервисом.</div>
      <div>
        Пожелания по развитию проекта можно направлять:
        <div>
          <a href="https://github.com/Alejandro-Vas/weather-app">
            <img src={githubLogo} alt="gitHub repository" />
          </a>
          <a href="https://github.com/Alejandro-Vas/weather-app">
            GitHub Repository
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
