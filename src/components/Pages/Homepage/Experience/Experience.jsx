import React, { useEffect, useState } from 'react';
import { BsPersonWorkspace } from 'react-icons/bs';
import Lottie from "lottie-react";
import './Experience.css';

// Animation Lottie Component (integrated)
const AnimationLottie = ({ animationPath, width }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Try to import the animation data
    import('./lottie/code.json')
      .then(data => setAnimationData(data.default || data))
      .catch(err => {
        console.error('Failed to load animation:', err);
        setAnimationData(null);
      });
  }, []);

  if (!animationData) {
    return (
      <div className="lottie-container">
        <div className="lottie-placeholder">
          <BsPersonWorkspace size={200} />
        </div>
      </div>
    );
  }

  return (
    <div className="lottie-container">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: width || '95%' }}
      />
    </div>
  );
};

// Glow Card Component (exact match to copy website)
const GlowCard = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    if (!CONTAINER || !CARDS.length) return;

    const CONFIG = {
      proximity: 40,
      spread: 80, // Changed to 80 to match copy website
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', 1);
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty('--start', ANGLE + 90);
      }
    };

    document.body.addEventListener('pointermove', UPDATE);

    const RESTYLE = () => {
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };

    RESTYLE();
    UPDATE();

    // Cleanup event listener
    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

// Experience data
const experiences = [
  {
    id: 1,
    title: 'Software Engineer I',
    company: "Teton Private Ltd.",
    duration: "(Jan 2022 - Present)"
  },
  {
    id: 2,
    title: "FullStack Developer",
    company: "Fiverr (freelance)",
    duration: "(Jun 2021 - Jan 2022)"
  },
  {
    id: 3,
    title: "Self Employed",
    company: "Code and build something in everyday.",
    duration: "(Jan 2018 - Present)"
  }
];

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={null} width="95%" />
            </div>
          </div>

          <div className="experience-cards-container">
            <div className="flex flex-col gap-6">
              {experiences.map((experience) => (
                <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                  <div className="experience-card-inner">
                    <div className="blur-overlay"></div>
                    <div className="experience-duration">
                      <p>{experience.duration}</p>
                    </div>
                    <div className="experience-info">
                      <div className="experience-icon-container">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div className="experience-details">
                        <h3 className="experience-title-item">{experience.title}</h3>
                        <p className="experience-institution">{experience.company}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;