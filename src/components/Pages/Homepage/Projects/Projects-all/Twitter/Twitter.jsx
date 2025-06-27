import React from 'react';
import '../ProjectDetails.css';
import twitterImg from './img/twitteranalysis.jpg';

const Twitter = () => {
  return (
    <div className="project-detail">
      <div className="project-top">
        <img src={twitterImg} alt="Twitter Analysis" className="project-thumbnail" />
        <h2 className="project-title">Twitter Analysis</h2>
      </div>

      <div className="project-description-section">
        <ul className="project-meta">
          <li>
            <strong>Tech Stack:</strong> Python, HTML, CSS, Bootstrap, GCP (Pub/Sub, Dataflow, Data Studio, GAE, BigQuery)
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/rajaprerak/TwitterAnalysis" target="_blank" rel="noopener noreferrer">
              github.com/rajaprerak/TwitterAnalysis
            </a>
          </li>
        </ul>

        <div className="project-description">
          <p>
            A web-based elastic application that analyzes the sentiment of users on top 10 trending movies and songs using Google Cloud Platform services.
          </p>
          <p>
            Designed a Pub/Sub routine to fetch 1000 tweets at a time. Dataflow enabled autoscaling and dynamic work rebalancing, improving response time by 50%. Data was stored in BigQuery for visualization in Google Data Studio.
          </p>
          <p>
            Scalability was validated with Apache Beam by simulating 10,000 concurrent user requests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
