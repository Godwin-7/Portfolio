import React, { useState } from 'react';
import './Contact.css';
import reactIcon from './svg/react-icon.svg'
import linkedin from './svg/linkedin.svg'
import githubIcon from './svg/github.svg'
import whatsapp from './svg/whatsapp.svg'
import telegram from './svg/telegram.svg'
import instagramIcon from './svg/instagram.svg'

// Email validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Contact data
const contactsData = {
  email: 'godwinbecse@gmail.com',
  phone: '+91 8925764010',
  address: 'Vinayagapuram, Chennai-600099',
  github: 'https://github.com/Godwin-7',
  facebook: 'https://www.facebook.com/abusaid.riyaz/',
  linkedIn: 'https://www.linkedin.com/in/abu-said-bd/',
  twitter: 'https://twitter.com/said7388',
  stackOverflow: 'https://stackoverflow.com/users/16840768/abu-said',
  devUsername: "said7388"
};

// Improved SVG Icon Components with smaller SVGs and larger circles
const TbMailForward = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
);

const MdAlternateEmail = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
  </svg>
);

const IoMdCall = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
  </svg>
);

const CiLocationOn = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ContactForm = () => {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <p className="contact-form-title">Contact with me</p>
      <div className="contact-form-container">
        <p className="contact-form-description">
          If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
        </p>
        <div className="contact-form-fields">
          <div className="contact-form-field">
            <label className="contact-form-label">Your Name: </label>
            <input
              className="contact-form-input"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="contact-form-field">
            <label className="contact-form-label">Your Email: </label>
            <input
              className="contact-form-input"
              type="email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="contact-form-error">Please provide a valid email!</p>}
          </div>

          <div className="contact-form-field">
            <label className="contact-form-label">Your Message: </label>
            <textarea
              className="contact-form-textarea"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="6"
              value={userInput.message}
            />
          </div>
          
          <div className="contact-form-submit">
            {error.required && (
              <p className="contact-form-error">All fields are required!</p>
            )}
            <button
              className="contact-form-button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="contact-form-button-content">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-section-label">
        <span className="contact-section-label-text">CONTACT</span>
        <span className="contact-section-label-line"></span>
      </div>
      
      <div className="contact-section-grid">
        <ContactForm />
        
        <div className="contact-section-info">
          <div className="contact-section-details">
            <p className="contact-section-item">
              <MdAlternateEmail size={38} className="contact-section-icon" />
              <span>{contactsData.email}</span>
            </p>
            <p className="contact-section-item">
              <IoMdCall size={38} className="contact-section-icon" />
              <span>{contactsData.phone}</span>
            </p>
            <p className="contact-section-item">
              <CiLocationOn size={38} className="contact-section-icon" />
              <span>{contactsData.address}</span>
            </p>
          </div>
          
          <div className="contact-section-social">
            <a href="https://www.linkedin.com/in/codevinayak" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" className="contact-section-social-icon" />
            </a>
            <a href="https://github.com/Godwin-7/" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" className="contact-section-social-icon" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" className="contact-section-social-icon" />
            </a>
            <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" className="contact-section-social-icon" />
            </a>
            <a href="https://www.instagram.com/vinayaksingh.in" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" className="contact-section-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;