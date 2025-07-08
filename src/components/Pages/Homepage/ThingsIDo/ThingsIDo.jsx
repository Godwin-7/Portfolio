/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import "./ThingsIDo.css";

// Import local JSON files
import frontendAnimation from './animations/frontend.json';
import backendAnimation from './animations/coding.json';
import mobileAnimation from './animations/mobile.json';

// Fade animation component (replacing react-awesome-reveal)
const Fade = ({ children, cascade, damping, direction, triggerOnce }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('fade-up-animate');
          }, 100);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [triggerOnce]);

  return (
    <div ref={elementRef} className="fade-up-initial">
      {children}
    </div>
  );
};

// Default service data with local animations
const defaultServiceData = [
  {
    title: "Frontend Development",
    animationData: frontendAnimation
  },
  {
    title: "Backend Development", 
    animationData: backendAnimation
  },
  {
    title: "Mobile App Development",
    animationData: mobileAnimation
  }
  // TO ADD MORE BOXES: Simply add new objects to this array following the same structure:
  // {
  //   title: "Your New Service Title",
  //   animationData: yourNewAnimationData
  // }
  // The layout will automatically handle the new boxes and arrange them in rows of 3
];

export default function ThingsIDo({ data = defaultServiceData }) {
  useEffect(() => {
    // Load Lottie player script if not already loaded
    if (!document.querySelector('script[src*="lottie-player"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="things-section">
      <div className="container pt-20 mx-auto pb-28">
        <h1 className="section-title">
          Things I Do
        </h1>

        <p className="section-subtitle">
          Currently I am improving my skills in these areas
        </p>

        <div className="skills-container">
          {data.map((item, index) => (
            <div key={index} className="skills-item">
              <Fade cascade damping={0.5} direction="up" triggerOnce>
                <div className="skills-box">
                  <lottie-player
                    src={`data:application/json;base64,${btoa(JSON.stringify(item.animationData))}`}
                    background="transparent"
                    speed="1"
                    style={{ width: "100%", height: "300px" }}
                    loop
                    autoplay
                    direction="1"
                    mode="normal"
                  ></lottie-player>
                  <h2 className="skills-box-title">
                    {item.title}
                  </h2>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}