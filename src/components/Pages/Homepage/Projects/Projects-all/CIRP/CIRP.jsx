import React, { useEffect, useRef } from 'react';
import '../ProjectDetails.css';
import cirpImg from './img/cirp.jpg';

const CIRP = () => {
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
         <img src={cirpImg} alt="CIRP" className="project-thumbnail" />
       </div>
       
       <div className="project-top-right">
         <div className="project-title-section">
           <h2 className="project-title">Collaborative Idea Research Platform</h2>
         </div>
         
         <div className="project-tech-section">
           <ul className="project-meta" ref={metaRef}>
             <li><strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, OpenAI GPT-4o API</li>
             <li>
               <strong>Live Site:</strong>{' '}
               <a href="https://cirp-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">
                 cirp-frontend.onrender.com
               </a>
             </li>
             <li>
               <strong>GitHub:</strong>{' '}
               <a href="https://github.com/Sathish2909/C_I_R_P" target="_blank" rel="noopener noreferrer">
                 github.com/Sathish2909/C_I_R_P
               </a>
             </li>
           </ul>
         </div>
       </div>
     </div>

     <div className="project-description-section">
       <div className="project-description" ref={descriptionRef}>
         <p>
           This website is a collaborative platform where individuals from diverse backgrounds can share, explore, and develop scientific research ideas and project topics. Users can post ideas, join discussions, comment freely, and collaborate with like-minded people based on project complexity—Easy, Medium, or Hard.
         </p>
         <p>
           It promotes innovation by connecting users through domains, global chats, and an AI-powered chatbot for guidance. With features like author contributions, idea submissions, and open feedback, the platform creates a vibrant, knowledge-sharing community that supports both beginners and experts in transforming ideas into impactful research.
         </p>
       </div>
     </div>
   </div>
 );
};

export default CIRP;