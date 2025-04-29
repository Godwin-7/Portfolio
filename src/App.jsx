import React from 'react';
import Skills from './components/Pages/Homepage/Skills/skills';
import Education from './components/Pages/Homepage/Education/Education';
//import Experience from './components/Pages/Homepage/Experience/Experience';
import Scroll from './components/Pages/Homepage/ScrollToTop/Scroll';


function App() {
  return (
    <div className="bg-[#0d1224] min-h-screen text-white">
      <Skills />
      <Education/>
      {/*<Experience/>*/}
      <Scroll/>
    </div>
  );
}

export default App;