import React, { useEffect } from 'react';
import './ProjectModal.css';

import Music from './Projects-all/Music/Music';
import ML from './Projects-all/ML/ML';
import Resume from './Projects-all/Resume/Resume';
import Twitter from './Projects-all/Twitter/Twitter';
import SpinachClassification from './Projects-all/SpinachClassification/SpinachClassification';
import FoodQualityResearch from './Projects-all/FoodQualityResearch/FoodQualityResearch';
import CIRP from './Projects-all/CIRP/CIRP';
import ExpenseTracker from './Projects-all/ExpenseTracker/ExpenseTracker';
import WeatherApp from './Projects-all/WeatherApp/WeatherApp';

export default function ProjectModal({ project, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const components = {
    music: Music,
    ml: ML,
    resume: Resume,
    twitter: Twitter,
    spinach: SpinachClassification,
    foodquality: FoodQualityResearch,
    cirp: CIRP,
    expensetracker: ExpenseTracker,
    weatherapp: WeatherApp,
    // Add more mappings here if needed
  };

  const DetailComponent = components[project.component];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && hasPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [hasPrev, hasNext, onPrev, onNext, onClose]);

  if (!DetailComponent) return null;

  return (
    <div className="projects-modal-overlay">
      <div className="projects-modal-content">
        <button className="projects-modal-close" onClick={onClose}>×</button>

        {hasPrev && (
          <button className="projects-modal-nav left" onClick={onPrev} title="Previous Project">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
        )}
        {hasNext && (
          <button className="projects-modal-nav right" onClick={onNext} title="Next Project">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        )}

        <div className="projects-modal-inner">
          <DetailComponent />
        </div>
      </div>
    </div>
  );
}