import React, { useEffect, useRef } from 'react';
import '../ProjectDetails.css';
import spinachImg from './img/spinach.jpg';

const SpinachClassification = () => {
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
          <img src={spinachImg} alt="Texture-Based Classification of Organic and Pesticidal Spinach" className="project-thumbnail" />
        </div>
        
        <div className="project-top-right">
          <div className="project-title-section">
            <h2 className="project-title">Texture-Based Classification of Organic and Pesticidal Spinach</h2>
          </div>
          
          <div className="project-tech-section">
            <ul className="project-meta" ref={metaRef}>
              <li><strong>Tech Stack:</strong> Local Binary Patterns (LBP), Support Vector Machine (SVM), Image Processing, Machine Learning</li>
              <li><strong>Techniques:</strong> Cross-validation, Histogram analysis, Noise reduction, Contrast enhancement</li>
              <li>
                <strong>Research Paper:</strong>{' '}
                <a href="https://doi.org/10.1007/978-981-97-3526-6_8" target="_blank" rel="noopener noreferrer">
                  Published in Springer Conference Proceedings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-description-section">
        <div className="project-description" ref={descriptionRef}>
          <p>
            This research develops an automated system to distinguish organic from pesticide-treated spinach using machine learning and texture analysis. The method employs Local Binary Patterns (LBP) to extract subtle texture features from spinach leaf images, identifying distinctive patterns where organic spinach shows higher intensities in specific texture features.
          </p>
          <p>
            Combined with Support Vector Machine classification and rigorous preprocessing techniques including noise reduction and contrast enhancement, the system achieves superior accuracy compared to existing methods. The solution addresses food safety concerns, enables automated agricultural quality control, and supports sustainable farming practices by providing consumers reliable pesticide detection capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpinachClassification;