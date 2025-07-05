import { skillsData } from "./skillsData";
import { skillsImage } from "./skill-image";
import Marquee from "react-fast-marquee";
import "./Skills.css";

function Skills() {
  return (
    <div id="skills" className="skills-section">
      <div className="skills-glow"></div>

      <div className="skills-gradient-line-container">
        <div className="skills-gradient-line"></div>
      </div>

      <div className="skills-title-container">
        <div className="skills-title-wrapper">
          <span className="skills-title-line"></span>
          <span className="skills-title">Skills</span>
          <span className="skills-title-line"></span>
        </div>
      </div>

      {/* Outer container to enable horizontal scroll */}
      <div className="skills-scroll-container">
        {/* Marquee for looping effect */}
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          loop={0}
          direction="left"
          className="skills-marquee"
        >
          {skillsData.map((skill, id) => (
            <div className="skills-card" key={id}>
              <div className="skills-card-inner">
                <div className="skills-card-gradient-line-container">
                  <div className="skills-card-gradient-line"></div>
                </div>
                <div className="skills-card-content">
                  <div className="skills-card-image-container">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      className="skills-card-image"
                    />
                  </div>
                  <p className="skills-card-title">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Bottom gradient line - same as top */}
      <div className="skills-gradient-line-container">
        <div className="skills-gradient-line"></div>
      </div>
      
    </div>
  );
}

export default Skills;