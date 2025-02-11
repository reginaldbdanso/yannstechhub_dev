import React from 'react';
import '../styles/Legal.css';

const Legal: React.FC = () => {
  return (
    <div className="legal-container">
      <div className="main-content">
        <div className="divider-top"></div>
        <div className="legal-header">Legal Information</div>
        <div className="legal-content">
          <section className="terms-of-service">
            <h2>Terms of Service</h2>
            <p>Welcome to YannsTechHub. By accessing our website and services, you agree to these terms and conditions.</p>
            
            <h3>1. Use of Service</h3>
            <p>Our services are provided "as is" and are intended for personal and commercial use in accordance with our policies.</p>
            
            <h3>2. Privacy Policy</h3>
            <p>We are committed to protecting your privacy. Our privacy policy details how we collect, use, and protect your information.</p>
            
            <h3>3. Product Information</h3>
            <p>We strive to provide accurate product information but cannot guarantee complete accuracy of all content.</p>
          </section>
          
          <section className="shipping-policy">
            <h2>Shipping Policy</h2>
            <p>We offer various shipping options and aim to deliver products within the specified timeframe. Shipping costs and delivery times may vary by location.</p>
          </section>
          
          <section className="return-policy">
            <h2>Return Policy</h2>
            <p>Products can be returned within 30 days of purchase. Items must be unused and in original packaging with proof of purchase.</p>
          </section>
          
          <section className="warranty">
            <h2>Warranty Information</h2>
            <p>Product warranties vary by manufacturer. Please refer to the product documentation for specific warranty terms.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;