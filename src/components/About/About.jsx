import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="conta-img">
        <img src="/src/Tp/htimg.png" alt="About Me" />
      </div>
      <div className="conta-text">
        <h1>
          About <span>Me</span>
        </h1>
        <h5>
          <span>Web page</span> developer
        </h5>
        <p>
          Specialized in web development and design. I am passionate about
          technological advancements and strive to create innovative web
          solutions, whether by customizing existing platforms or building them
          from scratch.
        </p>
      </div>
    </section>
  );
};

export default About;
