import React from 'react';
import './ProjectModal.css';

import Music from './Projects-all/Music/Music';
import ML from './Projects-all/ML/ML';
import Resume from './Projects-all/Resume/Resume';
import Twitter from './Projects-all/Twitter/Twitter';

export default function ProjectModal({ project, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const components = {
    music: Music,
    ml: ML,
    resume: Resume,
    twitter: Twitter,
    // Add more mappings here if needed
  };

  const DetailComponent = components[project.component];

  if (!DetailComponent) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>

        {hasPrev && (
          <button className="modal-nav left" onClick={onPrev} title="Previous Project">
            ‹
          </button>
        )}
        {hasNext && (
          <button className="modal-nav right" onClick={onNext} title="Next Project">
            ›
          </button>
        )}

        <div className="modal-inner">
          <DetailComponent />
        </div>
      </div>
    </div>
  );
}
