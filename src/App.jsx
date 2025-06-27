import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Skills from './components/Pages/Homepage/Skills/skills';
import Education from './components/Pages/Homepage/Education/Education';
// import Experience from './components/Pages/Homepage/Experience/Experience';
import Scroll from './components/Pages/Homepage/ScrollToTop/Scroll';

import Projects from './components/Pages/Homepage/Projects/Projects';
import Music from './components/Pages/Homepage/Projects/Projects-all/Music/Music';
import ML from './components/Pages/Homepage/Projects/Projects-all/ML/ML';
import Resume from './components/Pages/Homepage/Projects/Projects-all/Resume/Resume';
import Twitter from './components/Pages/Homepage/Projects/Projects-all/Twitter/Twitter';

function App() {
  return (
    <Router>
      <div className="bg-[#0d1224] min-h-screen text-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Skills />
                <Education />
                {/* <Experience /> */}
                <Projects />
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
  );
}

export default App;
