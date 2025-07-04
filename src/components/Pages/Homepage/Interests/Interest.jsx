import React from 'react';
import './Interest.css';

const Interest = () => {
  return (
    <section className="interests-section">
      <div className="interests-container container">
        <div className="interests-section-title">
          <h2>Interests</h2>
        </div>
        <div className="interests-row">
          {/* Row 1 */}
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-global-line" style={{ color: '#ffbb2c' }}></i>
              <h3>Software Development</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-database-2-line" style={{ color: '#5578ff' }}></i>
              <h3>Machine Learning</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-camera-3-line" style={{ color: '#e80368' }}></i>
              <h3>Computer Vision</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-english-input" style={{ color: '#1c7d32' }}></i>
              <h3>Natural Language Processing</h3>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-code-s-slash-fill" style={{ color: '#28a745' }}></i>
              <h3>Software Engineering</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-bar-chart-box-line" style={{ color: '#f1081f' }}></i>
              <h3>Visualization</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-file-list-3-line" style={{ color: '#47aeff' }}></i>
              <h3>Algorithms</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-image-line" style={{ color: '#ffc107' }}></i>
              <h3>Image Processing</h3>
            </div>
          </div>

          {/* Row 3 */}
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-pie-chart-line" style={{ color: '#17a2b8' }}></i>
              <h3>Data Science</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-cloud-line" style={{ color: '#6f42c1' }}></i>
              <h3>Cloud Computing</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-code-line" style={{ color: '#fd7e14' }}></i>
              <h3>Web Development</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-palette-line" style={{ color: '#e83e8c' }}></i>
              <h3>UI/UX</h3>
            </div>
          </div>

          {/* Row 4 */}
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-stack-line" style={{ color: '#20c997' }}></i>
              <h3>Full Stack Development</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-lightbulb-line" style={{ color: '#6610f2' }}></i>
              <h3>Artificial Intelligence</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-database-line" style={{ color: '#dc3545' }}></i>
              <h3>Database</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-router-line" style={{ color: '#198754' }}></i>
              <h3>Networking</h3>
            </div>
          </div>

          {/* Row 5 */}
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-server-line" style={{ color: '#0d6efd' }}></i>
              <h3>DBMS</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-gamepad-line" style={{ color: '#ff6b6b' }}></i>
              <h3>Game Development</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-robot-line" style={{ color: '#4ecdc4' }}></i>
              <h3>Robotics</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-mind-map" style={{ color: '#45b7d1' }}></i>
              <h3>Deep Learning</h3>
            </div>
          </div>

          {/* Row 6 */}
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-share-line" style={{ color: '#96ceb4' }}></i>
              <h3>Computer Networks</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-cpu-line" style={{ color: '#feca57' }}></i>
              <h3>Computer Architecture</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-wireless-charging-line" style={{ color: '#ff9ff3' }}></i>
              <h3>Internet of Things (IoT)</h3>
            </div>
          </div>
          <div className="interests-col-3">
            <div className="interests-icon-box">
              <i className="ri-flashlight-line" style={{ color: '#54a0ff' }}></i>
              <h3>Quantum Computing</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;