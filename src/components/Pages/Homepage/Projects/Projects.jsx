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
  const [renderKey, setRenderKey] = useState(0); // ✅ Used to force re-animation

  const filtered = projects.filter(p => filter === 'all' || p.category === filter);

  const openModal = idx => setSelectedIdx(idx);
  const closeModal = () => setSelectedIdx(null);
  const showPrev = () => setSelectedIdx(i => (i > 0 ? i - 1 : i));
  const showNext = () => setSelectedIdx(i => (i < filtered.length - 1 ? i + 1 : i));

  // ✅ Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIdx]);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-back',
      once: false,
      mirror: false,
    });
  }, []);

  // ✅ Refresh and re-trigger on filter change
  useEffect(() => {
    AOS.refreshHard();
    setRenderKey(prev => prev + 1);
  }, [filter]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="filters">
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
              className={`project-card filter-${project.category}`}
              onClick={() => openModal(idx)}
              data-aos="flip-up"
              data-aos-delay={`${idx * 100}`}
              data-aos-easing="ease-in-out-back"
              data-aos-duration="1000"
            >
              <div className="image-container">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <div className="info-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            width="24"
                            height="24"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12" y2="8" />
                        </svg>
                    </div>

                  <span className="view-project-text">View Project</span>
                </div>
                <span className="border-highlight"></span>
              </div>
              <h4>{project.title}</h4>
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
