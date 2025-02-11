import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="main-content">
        <div className="divider-top"></div>
        <div className="about-header">About Us</div>
        <div className="about-content">
          <h1>Welcome to YannsTechHub</h1>
          <p>We are your premier destination for cutting-edge technology and electronics. Founded with a passion for innovation and customer satisfaction, YannsTechHub has grown to become a trusted name in the tech retail industry.</p>
          
          <h2>Our Mission</h2>
          <p>To provide our customers with the latest and most reliable technology products while delivering exceptional service and expert guidance.</p>
          
          <h2>Our Vision</h2>
          <p>To be the leading technology retailer, known for our extensive product selection, competitive prices, and outstanding customer experience.</p>
          
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Wide selection of premium tech products</li>
            <li>Expert customer service</li>
            <li>Competitive pricing</li>
            <li>Secure shopping experience</li>
            <li>Fast and reliable shipping</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;