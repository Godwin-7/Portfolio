import React, { useEffect, useRef } from 'react';
import '../ProjectDetails.css';
import mlImg from './img/ml.jpg';

const ML = () => {
  const descriptionRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    // Enhanced dynamic font sizing for description based on content length
    if (descriptionRef.current) {
      const textContent = descriptionRef.current.textContent || '';
      const textLength = textContent.length;
      
      let lengthCategory;
      if (textLength < 100) {
        lengthCategory = 'very-short';
      } else if (textLength < 200) {
        lengthCategory = 'short';
      } else if (textLength < 350) {
        lengthCategory = 'medium';
      } else if (textLength < 500) {
        lengthCategory = 'long';
      } else if (textLength < 800) {
        lengthCategory = 'very-long';
      } else {
        lengthCategory = 'extremely-long';
      }
      
      descriptionRef.current.setAttribute('data-length', lengthCategory);
    }

    // Enhanced dynamic font sizing for meta section based on item count
    if (metaRef.current) {
      const metaItems = metaRef.current.querySelectorAll('li');
      const itemCount = metaItems.length;
      
      // Set data attribute for CSS targeting
      metaRef.current.setAttribute('data-items', Math.min(itemCount, 10).toString());
      
      // Additional logic to handle very long individual items
      let hasLongItems = false;
      metaItems.forEach(item => {
        const itemText = item.textContent || '';
        if (itemText.length > 80) {
          hasLongItems = true;
        }
      });
      
      // If items are particularly long, reduce font size further
      if (hasLongItems && itemCount >= 3) {
        const currentSize = parseInt(window.getComputedStyle(metaRef.current).fontSize);
        metaRef.current.style.fontSize = `${Math.max(currentSize - 1, 8)}px`;
      }
    }
  }, []);

  return (
    <div className="project-detail">
      <div className="project-top">
        <div className="project-image-section">
          <img src={mlImg} alt="ML-DL WebApp" className="project-thumbnail" />
        </div>
        
        <div className="project-top-right">
          <div className="project-title-section">
            <h2 className="project-title">ML-DL WebApp</h2>
          </div>
          
          <div className="project-tech-section">
            <ul className="project-meta" ref={metaRef}>
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
          </div>
        </div>
      </div>

      <div className="project-description-section">
        <div className="project-description" ref={descriptionRef}>
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