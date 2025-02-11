import React from 'react';
import '../styles/Careers.css';

const Careers: React.FC = () => {
  return (
    <div className="careers-container">
      <div className="main-content">
        <div className="divider-top"></div>
        <div className="careers-header">Careers</div>
        <div className="careers-content">
          <h1>Join Our Team</h1>
          <p>At YannsTechHub, we're always looking for talented individuals who are passionate about technology and customer service. Join us in our mission to provide the best tech shopping experience.</p>
          
          <h2>Why Work With Us?</h2>
          <ul>
            <li>Competitive compensation and benefits</li>
            <li>Professional growth opportunities</li>
            <li>Dynamic and innovative work environment</li>
            <li>Work with cutting-edge technology</li>
            <li>Collaborative team culture</li>
          </ul>
          
          <h2>Current Openings</h2>
          <div className="job-listings">
            <div className="job-card">
              <h3>Sales Representative</h3>
              <p>Help customers find the perfect tech solutions while meeting sales targets.</p>
              <button className="apply-button">Apply Now</button>
            </div>
            
            <div className="job-card">
              <h3>Technical Support Specialist</h3>
              <p>Provide expert technical assistance to our valued customers.</p>
              <button className="apply-button">Apply Now</button>
            </div>
            
            <div className="job-card">
              <h3>Inventory Manager</h3>
              <p>Oversee product inventory and maintain optimal stock levels.</p>
              <button className="apply-button">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;