import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import "./Proficiency.css";

// Portfolio Data - Skills/Proficiency
const SkillBars = [
  {
    Stack: "Frontend/Design",
    progressPercentage: "90"
  },
  {
    Stack: "Backend", 
    progressPercentage: "70"
  },
  {
    Stack: "Programming",
    progressPercentage: "60"
  },
  {
    Stack: "Database",
    progressPercentage: "80"
  },
  {
    Stack: "Web Development",
    progressPercentage: "50"
  },
  {
    Stack: "Mobile Development",
    progressPercentage: "65"
  }
];

// Lottie Animation Component
const GreetingLottie = ({ animationPath }) => {
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load animation data
    fetch(animationPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setAnimationData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading animation:', error);
        setIsLoading(false);
      });
  }, [animationPath]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  if (isLoading) {
    return (
      <div className="prof-lottie-placeholder">
        <div className="prof-placeholder-content">
          <div className="prof-placeholder-icon">⚡</div>
          <div className="prof-placeholder-text">Loading...</div>
        </div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className="prof-lottie-placeholder">
        <div className="prof-placeholder-content">
          <div className="prof-placeholder-icon">🔧</div>
          <div className="prof-placeholder-text">Building...</div>
          <div className="prof-placeholder-subtext">Skills & Expertise</div>
        </div>
      </div>
    );
  }

  return (
    <div className="prof-lottie-animation">
      <Lottie 
        options={defaultOptions} 
        height="100%"
        width="100%"
        style={{ overflow: "visible", maxWidth: "100%", maxHeight: "100%" }} // ✅ clean & safe
      />
    </div>
  );
};

const Proficiency = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    SkillBars && (
      <div className="prof-section prof-section-lg">
        <motion.div
          className="prof-container"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="prof-row">
            <div className="prof-skills-column">
              <motion.h1 className="prof-h1" variants={itemVariants}>
                Proficiency
              </motion.h1>
              {SkillBars.map((skill, index) => {
                return (
                  <motion.div 
                    className="prof-progress-info" 
                    key={skill.Stack}
                    variants={itemVariants}
                  >
                    <div className="prof-progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="prof-progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <div className="prof-progress-wrapper">
                      <div className="prof-progress-bg"></div>
                      <motion.div
                        className="prof-progress-bar-animated"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.progressPercentage}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          ease: "easeOut",
                          delay: 0.5 + (index * 0.2)
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="prof-animation-column">
              <motion.div 
                className="prof-lottie-container"
                variants={itemVariants}
              >
                <GreetingLottie animationPath="../../lottie/build.json" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  );
};

export default Proficiency;