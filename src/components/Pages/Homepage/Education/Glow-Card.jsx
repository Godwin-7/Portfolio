"use client"

import { useEffect } from 'react';
import './Glow-Card.css';

const GlowCard = ({ children, identifier }) => {
  useEffect(() => {
    const CARD = document.querySelector(`.edu-glow-card-${identifier}`);
    if (!CARD) return;

    const UPDATE = (e) => {
      const rect = CARD.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate distance from edges for rectangular effect
      const edgeDistance = Math.min(
        x, 
        rect.width - x, 
        y, 
        rect.height - y
      );
      
      // Dynamic color based on position
      const hue = (x / rect.width * 120 + y / rect.height * 180) % 360;
      const saturation = 80 + Math.sin(Date.now() / 500) * 20;
      
      CARD.style.setProperty('--mouse-x', `${x}px`);
      CARD.style.setProperty('--mouse-y', `${y}px`);
      CARD.style.setProperty('--edge-distance', `${edgeDistance}px`);
      CARD.style.setProperty('--hue', `${hue}`);
      CARD.style.setProperty('--saturation', `${saturation}%`);
      CARD.style.setProperty('--active', '1');
    };

    const handleLeave = () => {
      CARD.style.setProperty('--active', '0');
    };

    CARD.addEventListener('mousemove', UPDATE);
    CARD.addEventListener('mouseleave', handleLeave);

    return () => {
      CARD.removeEventListener('mousemove', UPDATE);
      CARD.removeEventListener('mouseleave', handleLeave);
    };
  }, [identifier]);

  return (
    <div className={`edu-glow-card edu-glow-card-${identifier}`}>
      <div className="edu-glow-rectangle"></div>
      <div className="edu-glow-border"></div>
      <div className="edu-card-content">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;