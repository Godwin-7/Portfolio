import React, { useEffect, useRef } from 'react';
import '../ProjectDetails.css';
import foodQualityImg from './img/food-quality.jpg';

const FoodQualityResearch = () => {
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
          <img src={foodQualityImg} alt="Machine Learning-Assisted Food Quality Index" className="project-thumbnail" />
        </div>
        
        <div className="project-top-right">
          <div className="project-title-section">
            <h2 className="project-title">ML-Assisted Food Quality Index Determination</h2>
          </div>
          
          <div className="project-tech-section">
            <ul className="project-meta" ref={metaRef}>
              <li><strong>Research Focus:</strong> CNNs, DenseNets, ResNets, Computer Vision, Food Safety</li>
              <li><strong>Conference:</strong> International Conference on Computational Intelligence (ICCI 2023)</li>
              <li><strong>Publisher:</strong> Springer Nature - Algorithms for Intelligent Systems Series</li>
              <li>
                <strong>Publication:</strong>{' '}
                <a href="https://link.springer.com/chapter/10.1007/978-981-97-3526-6_8" target="_blank" rel="noopener noreferrer">
                  link.springer.com/chapter/10.1007/978-981-97-3526-6_8
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-description-section">
        <div className="project-description" ref={descriptionRef}>
          <p>
            This research addresses the critical global health challenge where 600 million people annually suffer from foodborne diseases, resulting in 420,000 deaths. Our study proposes a revolutionary non-destructive approach using Convolutional Neural Networks (CNNs) for food quality assessment, replacing traditional invasive methods that contaminate samples.
          </p>
          <p>
            The research implements DenseNets and ResNets architectures to classify food quality into fresh, intermediate, and spoiled categories across six food types (rice, meat, soup, milk, tomato, porridge). Our models achieved exceptional performance with 97.73% precision, 97.7% recall, and 97.73% F1-score, demonstrating the potential to transform food safety monitoring in healthcare systems and reduce the $110 billion annual economic burden from food contamination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodQualityResearch;