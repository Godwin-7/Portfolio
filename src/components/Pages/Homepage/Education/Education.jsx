import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from "./lottie/study.json";
import "./Education.css";

const educations = [
  {
    id: 1,
    title: "B.E Computer Science & Engg",
    duration: "2022 - Present",
    institution: "Velammal Engineering College, Chennai",
  },
  {
    id: 2,
    title: "Higher Secondary",
    duration: "2020 - 2022",
    institution: "Don Bosco Matric Hr. Sec. School, Egmore",
  },
  {
    id: 3,
    title: "Secondary School",
    duration: "2015 - 2020",
    institution: "Don Bosco Matric Hr. Sec. School, Egmore",
  }
];

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

const GlowCard = ({ children, identifier }) => {
  useEffect(() => {
    const CARD = document.querySelector(`.edu-glow-card-${identifier}`);
    if (!CARD) return;

    const UPDATE = (e) => {
      const rect = CARD.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate distance from edges for rectangular effect
      const edgeDistance = Math.min(
        x, 
        rect.width - x, 
        y, 
        rect.height - y
      );
      
      // Dynamic color based on position
      const hue = (x / rect.width * 120 + y / rect.height * 180) % 360;
      const saturation = 80 + Math.sin(Date.now() / 500) * 20;
      
      CARD.style.setProperty('--mouse-x', `${x}px`);
      CARD.style.setProperty('--mouse-y', `${y}px`);
      CARD.style.setProperty('--edge-distance', `${edgeDistance}px`);
      CARD.style.setProperty('--hue', `${hue}`);
      CARD.style.setProperty('--saturation', `${saturation}%`);
      CARD.style.setProperty('--active', '1');
    };

    const handleLeave = () => {
      CARD.style.setProperty('--active', '0');
    };

    CARD.addEventListener('mousemove', UPDATE);
    CARD.addEventListener('mouseleave', handleLeave);

    return () => {
      CARD.removeEventListener('mousemove', UPDATE);
      CARD.removeEventListener('mouseleave', handleLeave);
    };
  }, [identifier]);

  return (
    <div className={`edu-glow-card edu-glow-card-${identifier}`}>
      <div className="edu-glow-rectangle"></div>
      <div className="edu-glow-border"></div>
      <div className="edu-card-content">
        {children}
      </div>
    </div>
  );
};

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