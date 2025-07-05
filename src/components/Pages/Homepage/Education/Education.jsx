import { educations } from "./educations";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from "./lottie/study.json";
import AnimationLottie from "../../Helper/animation-lottie";
import GlowCard from "./Glow-Card";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-top-border"></div>
        
        <div className="education-title-container">
          <div className="education-title">
            <span className="education-title-line"></span>
            <h2 className="education-title-text">Educations</h2>
            <span className="education-title-line"></span>
          </div>
        </div>

        <div className="education-content">
          <div className="education-animation-container">
            <AnimationLottie animationPath={lottieFile} />
          </div>

          <div className="education-cards">
            {educations.map((education) => (
              <GlowCard key={education.id} identifier={education.id}>
                <div className="education-card-inner">
                  <p className="education-duration">{education.duration}</p>
                  <div className="education-info">
                    <div className="education-icon-container">
                      <BsPersonWorkspace size={36} color="#7E22CE" />
                    </div>
                    <div className="education-details">
                      <h3 className="education-title-item">{education.title}</h3>
                      <p className="education-institution">{education.institution}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        <div className="education-bottom-border"></div>
      </div>
    </section>
  );
}

export default Education;