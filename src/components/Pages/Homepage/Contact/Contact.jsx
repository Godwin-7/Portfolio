import React, { useState } from 'react';
import './Contact.css';

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
  github: 'https://github.com/said7388',
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

const IoLogoGithub = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const BiLogoLinkedin = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FaXTwitter = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const FaStackOverflow = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/>
  </svg>
);

const FaFacebook = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
            <a href={contactsData.github} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub size={40} className="contact-section-social-icon" />
            </a>
            <a href={contactsData.linkedIn} target="_blank" rel="noopener noreferrer">
              <BiLogoLinkedin size={40} className="contact-section-social-icon" />
            </a>
            <a href={contactsData.twitter} target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={40} className="contact-section-social-icon" />
            </a>
            <a href={contactsData.stackOverflow} target="_blank" rel="noopener noreferrer">
              <FaStackOverflow size={40} className="contact-section-social-icon" />
            </a>
            <a href={contactsData.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook size={40} className="contact-section-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;