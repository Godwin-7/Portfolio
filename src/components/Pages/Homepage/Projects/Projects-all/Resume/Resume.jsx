import React from 'react';
import '../ProjectDetails.css';
import resumeImg from './img/resume.jpg';

const Resume = () => {
  return (
    <div className="project-detail">
      <div className="project-top">
        <img src={resumeImg} alt="Resume Section Classifier" className="project-thumbnail" />
        <h2 className="project-title">Resume Section Classifier</h2>
      </div>

      <div className="project-description-section">
        <ul className="project-meta">
          <li><strong>Tech Stack:</strong> Python, scikit-learn, numpy, pandas</li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/rajaprerak/ResumeSectionClassifier" target="_blank" rel="noopener noreferrer">
              github.com/rajaprerak/ResumeSectionClassifier
            </a>
          </li>
        </ul>

        <div className="project-description">
          <p>
            Given a resume, this classifier identifies key section words like "experience", "skills", "projects", etc.
          </p>
          <p>
            It implements various machine learning algorithms to parse and categorize different segments of a resume with high accuracy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
