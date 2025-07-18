import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Load Boxicons CSS
    const boxiconsLink = document.createElement('link');
    boxiconsLink.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    boxiconsLink.rel = 'stylesheet';
    boxiconsLink.id = 'boxicons-css';
    
    // Load Google Fonts CSS
    const fontsLink = document.createElement('link');
    fontsLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    fontsLink.rel = 'stylesheet';
    fontsLink.id = 'poppins-font';
    
    // Check if already loaded to avoid duplicates
    if (!document.getElementById('boxicons-css')) {
      document.head.appendChild(boxiconsLink);
    }
    if (!document.getElementById('poppins-font')) {
      document.head.appendChild(fontsLink);
    }
    
    // Cleanup function
    return () => {
      const existingBoxicons = document.getElementById('boxicons-css');
      const existingFonts = document.getElementById('poppins-font');
      if (existingBoxicons) {
        document.head.removeChild(existingBoxicons);
      }
      if (existingFonts) {
        document.head.removeChild(existingFonts);
      }
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-row">
          <div className="home-content-column">
            <div className="home-content">
              <h3>Hi, I am</h3>
              <h1>Godwin Wilfred</h1>
              <p>Aspiring Data Scientist &<br />Machine Learning Enthusiast</p>
              
              <div className="home-social-media">
                <a href="https://www.linkedin.com/in/ganesharam2003/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-linkedin'></i>
                </a>
                <a href="https://github.com/ganesha62" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-github'></i>
                </a>
                <a href="https://www.instagram.com/g_raam62/?hl=en" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-instagram'></i>
                </a>
              </div>
              <a href="#contact" id="contact_button" className="home-btn">Contact Me</a>
            </div>
          </div>

          <div className="home-animation-column">
            <div className="home-profession-container">
              <div className="home-profession-box">
                <div className="home-profession" style={{'--i': 0}}>
                  <i className='bx bx-code-alt'></i>
                  <h3>Data Scientist</h3>
                </div>
                <div className="home-profession" style={{'--i': 1}}>
                  <i className='bx bx-book-heart'></i>
                  <h3>Web Developer</h3>
                </div>
                <div className="home-profession" style={{'--i': 2}}>
                  <i className='bx bxs-graduation'></i>
                  <h3>ML Enthusiast</h3>
                </div>
                <div className="home-profession" style={{'--i': 3}}>
                  <i className='bx bxl-react'></i>
                  <h3>AI Engineer</h3>
                </div>
                <div className="home-circle"></div>
              </div>
              <div className="home-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;