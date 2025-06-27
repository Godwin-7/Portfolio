import React from 'react';
import '../ProjectDetails.css';
import mlImg from './img/ml.jpg';

const ML = () => {
  return (
    <div className="project-detail">
      <div className="project-top">
        <img src={mlImg} alt="ML-DL WebApp" className="project-thumbnail" />
        <h2 className="project-title">ML-DL WebApp</h2>
      </div>

      <div className="project-description-section">
        <ul className="project-meta">
          <li><strong>Tech Stack:</strong> Flask, Python, Heroku, SQLite, HTML, CSS</li>
          <li>
            <strong>Live Site:</strong>{' '}
            <a href="https://ml-dl-webapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              ml-dl-webapp.herokuapp.com
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/rajaprerak/ML_DL_WebApp" target="_blank" rel="noopener noreferrer">
              github.com/rajaprerak/ML_DL_WebApp
            </a>
          </li>
        </ul>

        <div className="project-description">
          <p>
            A Flask-based web application that demonstrates multiple ML and DL projects via a simple UI.
          </p>
          <p>
            Includes tools like text summarizer, image classifier, and iris classifier — all built into one deployable platform on Heroku.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ML;
