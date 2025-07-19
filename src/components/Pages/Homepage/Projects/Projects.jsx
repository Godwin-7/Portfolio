import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Import images using ES module syntax
import musicImg from './Projects-all/Music/img/musicplayer.jpg';
import mlImg from './Projects-all/ML/img/ml.jpg';
import resumeImg from './Projects-all/Resume/img/resume.jpg';
import twitterImg from './Projects-all/Twitter/img/twitteranalysis.jpg';
/*import irasImg from './Projects-all/Image/img/iras.jpeg';
import recommenderImg from './Projects-all/Movies/img/recommender.jpg';
import vdgImg from './Projects-all/VDG/img/vdg.jpg';
import ganImg from './Projects-all/GAN/img/gan.jpg';*/

const projects = [
  {
    title: 'Music Streaming Website',
    image: musicImg,
    component: 'music',
    category: 'app',
  },
  {
    title: 'ML-DL Web-App',
    image: mlImg,
    component: 'ml',
    category: 'app',
  },
  {
    title: 'Resume Section Classifier',
    image: resumeImg,
    component: 'resume',
    category: 'project',
  },
  {
    title: 'Twitter Analysis',
    image: twitterImg,
    component: 'twitter',
    category: 'app',
  },
    /*
  {
    title: 'Image recognition as Service',
    image: irasImg,
    component: 'iras',
    category: 'app',
  },
  {
    title: 'Movie Recommender',
    image: recommenderImg,
    component: 'recommender',
    category: 'app',
  },
  {
    title: 'Video Description Generator',
    image: vdgImg,
    component: 'vdg',
    category: 'project',
  },
  {
    title: 'Image Generator',
    image: ganImg,
    component: 'gan',
    category: 'project',
  },
  */
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [renderKey, setRenderKey] = useState(0);

  const filtered = projects.filter(p => filter === 'all' || p.category === filter);

  const openModal = idx => setSelectedIdx(idx);
  const closeModal = () => setSelectedIdx(null);
  const showPrev = () => setSelectedIdx(i => (i > 0 ? i - 1 : i));
  const showNext = () => setSelectedIdx(i => (i < filtered.length - 1 ? i + 1 : i));

  // Magnetic effect handlers
  const handleMagneticMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    e.currentTarget.style.transform = `translateX(calc(-50% + ${x * 0.1}px)) translateY(${y * 0.1}px)`;
  };

  const handleMagneticLeave = (e) => {
    e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
  };

  // Ripple effect handler
  const handleRippleClick = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('projects-ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  };

  // Scroll prevention functions
  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const keydownHandler = (e) => {
    if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (selectedIdx !== null) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      
      // Add event listeners to prevent scroll events
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', keydownHandler);
    } else {
      // Restore scrolling
      document.body.style.overflow = '';
      
      // Remove event listeners
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', keydownHandler);
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [selectedIdx]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-back',
      once: false,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
    setRenderKey(prev => prev + 1);
  }, [filter]);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-section-title">Projects</h2>

        <div className="projects-filters">
          <button
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'active' : ''}
          >
            All
          </button>
          <button
            onClick={() => setFilter('app')}
            className={filter === 'app' ? 'active' : ''}
          >
            Web-App
          </button>
          <button
            onClick={() => setFilter('project')}
            className={filter === 'project' ? 'active' : ''}
          >
            Project
          </button>
        </div>

        <div className="projects-grid">
          {filtered.map((project, idx) => (
            <div
              key={`${project.title}-${renderKey}`}
              data-aos="flip-up"
              data-aos-delay={`${idx * 100}`}
              data-aos-easing="ease-in-out-back"
              data-aos-duration="1000"
            >
              <div
                className={`projects-card filter-${project.category}`}
                onClick={() => openModal(idx)}
              >
                <div className="projects-image-container">
                  <img src={project.image} alt={project.title} />
                  <div className="projects-overlay">
                    <div className="projects-info-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="28"
                        height="28"
                      >
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <span 
                      className="projects-view-project-text projects-magnetic"
                      onMouseMove={handleMagneticMove}
                      onMouseLeave={handleMagneticLeave}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRippleClick(e);
                        openModal(idx);
                      }}
                    >
                      View Project
                    </span>
                  </div>
                </div>
                <h4>{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIdx !== null && (
        <ProjectModal
          project={filtered[selectedIdx]}
          onClose={closeModal}
          onPrev={showPrev}
          onNext={showNext}
          hasPrev={selectedIdx > 0}
          hasNext={selectedIdx < filtered.length - 1}
        />
      )}
    </section>
  );
}