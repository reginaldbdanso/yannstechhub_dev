import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Support.css';

const Support: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add tracking logic here
  };

  return (
    <div className="track-order">
      <div className="main-content">
        <div className="divider-top"></div>

        <div className="breadcrumb-sort">
          <div className="breadcrumb">
            <span className="breadcrumb-item y">yannstechub</span>
            <span className="breadcrumb-item">/ Track Order</span>
          </div>
        </div>

        <div className="divider"></div>
    
        <section className="order-section">
          <h1 className="section-title">Your Order</h1>
          <img
            loading="lazy"
            src="/src/assets/order-track.png"
            className="order-image"
            alt="Order tracking information"
          />
          <form className="order-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="order-number" 
              name="order-number" 
              className="order-number" 
              placeholder="Enter your number" 
              required 
            />
            <button type="submit" className="order-button">Track</button>
          </form>
          <p className="order-info">
            Normally your package will arrive within 2-5 working days after placing
            your order. In case of weather disasters, and holidays there may be
            delays. For any questions please contact Care.gh@oraimo.com. Thank you
            for your support and patience.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Support;