import { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleMouseOver = (skillName) => {
    setHoveredSkill(skillName);
  };

  const handleMouseOut = () => {
    setHoveredSkill(null);
  };

  const handleSkillClick = (url) => {
    window.open(url, "_blank"); // فتح الرابط في صفحة جديدة
  };

  return (
    <section className="skills" id="skills">
      <div className="conta-skills">
        <h1>
          My <span>Skills</span>
        </h1>
        <div className="cont-skills">
          <div
            className="skill"
            onMouseOver={() => handleMouseOver("Unity Engine")}
            onMouseOut={handleMouseOut}
            onClick={() => handleSkillClick("https://unity.com")} // رابط Unity
          >
            <img src="/src/ce4/Unity.png" alt="Unity Logo" />
            {hoveredSkill === "Unity Engine" && <span className="skill-name">Unity Engine</span>}
          </div>
          <div
            className="skill"
            onMouseOver={() => handleMouseOver("HTML5")}
            onMouseOut={handleMouseOut}
            onClick={() => handleSkillClick("https://developer.mozilla.org/en-US/docs/Web/HTML")} // رابط HTML5
          >
            <img src="/src/ce4/html-5-logo.png" alt="HTML5 Logo" />
            {hoveredSkill === "HTML5" && <span className="skill-name">HTML5</span>}
          </div>
          <div
            className="skill"
            onMouseOver={() => handleMouseOver("CSS")}
            onMouseOut={handleMouseOut}
            onClick={() => handleSkillClick("https://developer.mozilla.org/en-US/docs/Web/CSS")} // رابط CSS
          >
            <img src="/src/ce4/css.png" alt="CSS Logo" />
            {hoveredSkill === "CSS" && <span className="skill-name">CSS</span>}
          </div>
          <div
            className="skill"
            onMouseOver={() => handleMouseOver("React JSX")}
            onMouseOut={handleMouseOut}
            onClick={() => handleSkillClick("https://react.dev")} // رابط React
          >
            <img src="/src/ce4/React.png" alt="React Logo" />
            {hoveredSkill === "React JSX" && <span className="skill-name">React JSX</span>}
          </div>
          <div
            className="skill"
            onMouseOver={() => handleMouseOver("C#")}
            onMouseOut={handleMouseOut}
            onClick={() => handleSkillClick("https://learn.microsoft.com/en-us/dotnet/csharp/")} // رابط C#
          >
            <img src="/src/ce4/C sharp.png" alt="C# Logo" />
            {hoveredSkill === "C#" && <span className="skill-name">C#</span>}
          </div>
          <div
            className="skill"
            onMouseOver={() => handleMouseOver("JavaScript")}
            onMouseOut={handleMouseOut}
            onClick={() => handleSkillClick("https://developer.mozilla.org/en-US/docs/Web/JavaScript")} // رابط JavaScript
          >
            <img src="/src/ce4/java-script.png" alt="JavaScript Logo" />
            {hoveredSkill === "JavaScript" && <span className="skill-name">JavaScript</span>}
          </div>
        </div>
      </div>
      <div className="conta-img">
        <img src="/src/ce4/Digital.png" alt="Digital Design" />
      </div>
    </section>
  );
};

export default Skills;
