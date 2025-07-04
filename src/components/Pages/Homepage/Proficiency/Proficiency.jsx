import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
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
      <div className="lottie-placeholder">
        <div className="placeholder-content">
          <div className="placeholder-icon">⚡</div>
          <div className="placeholder-text">Loading...</div>
        </div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className="lottie-placeholder">
        <div className="placeholder-content">
          <div className="placeholder-icon">🔧</div>
          <div className="placeholder-text">Building...</div>
          <div className="placeholder-subtext">Skills & Expertise</div>
        </div>
      </div>
    );
  }

  return (
    <div className="lottie-animation">
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
      <Container className="section section-lg">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Row className="proficiency-row">
            <Col lg="6" className="skills-column">
              <motion.h1 className="h1" variants={itemVariants}>
                Proficiency
              </motion.h1>
              {SkillBars.map((skill, index) => {
                return (
                  <motion.div 
                    className="progress-info" 
                    key={skill.Stack}
                    variants={itemVariants}
                  >
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress-bg"></div>
                      <motion.div
                        className="progress-bar-animated"
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
            </Col>
            <Col lg="6" className="animation-column">
              <motion.div 
                className="lottie-container"
                variants={itemVariants}
              >
                <GreetingLottie animationPath="../../lottie/build.json" />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    )
  );
};

export default Proficiency;