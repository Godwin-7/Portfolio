import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import './FloatingLogos.css';

// Import your SVG files from the svg folder
import htmlIcon from './svg/html-icon.svg';
import cssIcon from './svg/css-icon.svg';
import jsIcon from './svg/js-icon.svg';
import reactIcon from './svg/react-icon.svg';
import nodeIcon from './svg/node-icon.svg';
import typescriptIcon from './svg/typescript-icon.svg';
import vueIcon from './svg/vue-icon.svg';
import boostrapIcon from './svg/bootstrap-icon.svg';
import wordpress from './svg/wordpress.svg';
import shopify from './svg/shopify.svg';
import sassIcon from './svg/sass-icon.svg';

const FloatingLogos = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load the slim version to avoid compatibility issues
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log('Particles loaded', container);
  }, []);

  return (
    <div className="floating-logos-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 100 // Set ABOVE all content (make sections z-index: 0 or default)
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10
                }
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2
              },
              push: {
                quantity: 2
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1
            },
            move: {
              attract: {
                enable: true,
                rotate: {
                  x: 600,
                  y: 1200
                }
              },
              bounce: true,
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: {
                min: 0.5,
                max: 2
              },
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              limit: 20,
              value: 15
            },
            opacity: {
              value: { min: 0.2, max: 0.6 },   // darken slightly
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 0.3
              },
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false
              },
              direction: "random",
              random: {
                enable: true,
                minimumValue: 0
              },
              value: {
                min: 0,
                max: 360
              }
            },
            shape: {
              type: "image",
              image: [
                {
                  src: htmlIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: cssIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: jsIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: reactIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: nodeIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: typescriptIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: vueIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: boostrapIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: wordpress,
                  width: 20,
                  height: 20
                },
                {
                  src: shopify,
                  width: 20,
                  height: 20
                },
                {
                  src: sassIcon,
                  width: 20,
                  height: 20
                }
              ]
            },
            size: {
              value: {
                min: 10,
                max: 15
              },
              animation: {
                enable: true,
                speed: 4,
                minimumValue: 10,
                sync: false
              }
            }
          },
          background: {
            color: "transparent"
          }
        }}
      />
    </div>
  );
};

export default FloatingLogos;