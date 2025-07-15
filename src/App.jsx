import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FloatingLogos from './components/Pages/Homepage/Floating Logos/FloatingLogos';
import Home from './components/Pages/Homepage/Home/Home';
import Skills from './components/Pages/Homepage/Skills/Skills';
import Education from './components/Pages/Homepage/Education/Education';
import Proficiency from './components/Pages/Homepage/Proficiency/Proficiency';
import Projects from './components/Pages/Homepage/Projects/Projects';
import Interest from './components/Pages/Homepage/Interests/Interest';
import ThingsIDo from './components/Pages/Homepage/ThingsIDo/ThingsIDo';
import ContactSection from './components/Pages/Homepage/Contact/Contact';
import Experience from './components/Pages/Homepage/Experience/Experience';
import Certificates from './components/Pages/Homepage/Certificates/Certificates';
import { About } from './components/Pages/Homepage/About/About';
import { Footer } from './components/Pages/Homepage/Footer/Footer';
import Scroll from './components/Pages/Homepage/ScrollToTop/Scroll';


import Music from './components/Pages/Homepage/Projects/Projects-all/Music/Music';
import ML from './components/Pages/Homepage/Projects/Projects-all/ML/ML';
import Resume from './components/Pages/Homepage/Projects/Projects-all/Resume/Resume';
import Twitter from './components/Pages/Homepage/Projects/Projects-all/Twitter/Twitter';

function App() {
  return (
    <>
      {/* 🚨 Render FloatingLogos OUTSIDE all app content */}
      <FloatingLogos />

      <Router>
        <div className="bg-[#0d1224] min-h-screen text-white">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <ThingsIDo />
                  <Education />
                  <Proficiency />
                  <Projects />
                  <Skills />
                  <Interest />
                  <ContactSection />
                  <Experience />
                  <Certificates />
                  <About />
                  <Footer />
                  <Scroll />
                </>
              }
            />
            <Route path="/projects/music" element={<Music />} />
            <Route path="/projects/ml" element={<ML />} />
            <Route path="/projects/resume" element={<Resume />} />
            <Route path="/projects/twitter" element={<Twitter />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
