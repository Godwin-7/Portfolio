import React from 'react';
import '../ProjectDetails.css';
import musicImg from './img/musicplayer.jpg';

const Music = () => {
  return (
    <div className="project-detail">
      {/* Top section: Image and Title side by side */}
      <div className="project-top">
        <img src={musicImg} alt="Music Streaming Website" className="project-thumbnail" />
        <h2 className="project-title">Music Streaming Website</h2>
      </div>

      {/* Bottom section: Meta + Description */}
      <div className="project-description-section">
        <ul className="project-meta">
          <li><strong>Tech Stack:</strong> Django, HTML, CSS, Bootstrap, AWS S3, Heroku</li>
          <li>
            <strong>Live Site:</strong>{' '}
            <a href="https://galvanic-music.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              galvanic-music.herokuapp.com
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/rajaprerak/MusicPlayer" target="_blank" rel="noopener noreferrer">
              github.com/rajaprerak/MusicPlayer
            </a>
          </li>
        </ul>

        <div className="project-description">
          <p>
            This is a Django-based music streaming web application that allows users to explore and enjoy songs online. The interface is clean, user-friendly, and functional.
          </p>
          <p>
            Users can register or log in, stream music, search songs using filters like language or artist, view song details, create playlists, and manage their favorites.
          </p>
          <p>
            The project integrates AWS S3 for media storage and is hosted on Heroku, ensuring scalability and performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Music;
