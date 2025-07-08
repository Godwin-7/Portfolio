import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import "./LaptopAnimation.css"; // Custom styles

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side - Text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="hero-title">
            Hello there! I&apos;m{" "}
            <span className="highlighted-name">Your Name</span>
          </h1>
          <p className="hero-subtitle">
            An Aspiring Full Stack Developer passionate about building immersive web experiences.
          </p>
          <a
            href="/YourResume.pdf"
            download
            className="hero-btn"
          >
            <span>Download CV</span>
            <svg
              className="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>

        {/* Right Side - 3D Model */}
        <motion.div
          className="hero-spline"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <Spline scene="https://draft.spline.design/f1XcjIxmTvV5jSIf/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
