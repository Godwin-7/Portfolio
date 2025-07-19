import React, { useEffect, useRef } from 'react';
import '../ProjectDetails.css';
import expenseImg from './img/expense.jpg';

const ExpenseTracker = () => {
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
          <img src={expenseImg} alt="Expense Tracker with Calculator" className="project-thumbnail" />
        </div>
        
        <div className="project-top-right">
          <div className="project-title-section">
            <h2 className="project-title">Expense Tracker with Calculator</h2>
          </div>
          
          <div className="project-tech-section">
            <ul className="project-meta" ref={metaRef}>
              <li><strong>Tech Stack:</strong> React.js, CSS3, JavaScript ES6, Local Storage API</li>
              <li>
                <strong>Live Site:</strong>{' '}
                <a href="https://expense-tracker-calc.netlify.app/" target="_blank" rel="noopener noreferrer">
                  expense-tracker-calc.netlify.app
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{' '}
                <a href="https://github.com/Godwin-7/Expense-Tracker-Calculator" target="_blank" rel="noopener noreferrer">
                  github.com/Godwin-7/Expense-Tracker-Calculator
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-description-section">
        <div className="project-description" ref={descriptionRef}>
          <p>
            A comprehensive financial management tool that combines expense tracking with a built-in calculator for seamless budget calculations. Users can log daily expenses, categorize spending, and monitor their financial habits with detailed analytics and visual charts.
          </p>
          <p>
            Features include income/expense management, category-wise filtering, monthly/yearly reports, and an integrated calculator for quick computations. The app uses local storage to persist data across sessions, ensuring users never lose their financial records while maintaining complete privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;