import React, { useEffect, useRef } from 'react';
import './About.css';
import profileImage from './files/myself.jpg'; // Replace with your actual image path

export function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll('.fade-in-left, .fade-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="container">
        <div className="about-img">
          <div className="fade-in-left delay-2">
            <img src={profileImage} alt="Ganesha Ram" />
          </div>
        </div>
        
        <div className="about-content">
          <div className="fade-in-right">
            <h2 className="heading">About Me</h2>
          </div>
          
          <div className="fade-in-right delay-1">
            <h3>Hi, I'm <span>Ganesha Ram!</span></h3>
          </div>
          
          <div className="fade-in-right delay-2">
            <p>
              I'm a Pre-Final Year Computer Science and Engineering Student at 
              Velammal Engineering College. An Ambitious Engineer with a great 
              passion for becoming a Data Scientist.
            </p>
          </div>
          
          <div className="fade-in-right delay-3">
            <p>
              Self-motivated learner with insatiable curiosity to drive for 
              personal and professional growth. Well-organized with good time 
              management skills. Clear, logical thinker with a practical approach 
              to problem-solving. Detail-oriented with good verbal communication 
              skills. Technologically adept and eager to bring growth to a 
              flourishing establishment.
            </p>
          </div>
          
          <div className="fade-in-right delay-4">
            <a href="./files/resume.pdf" download="Godwin_Resume.pdf" className="download-btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}