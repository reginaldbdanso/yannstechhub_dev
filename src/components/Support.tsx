import React from 'react';
import '../styles/components/Support_module.css';
import Header from './Header';
import Footer from './Footer';

const Support: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add tracking functionality here
  };

  return (
    <div className="container">
      <div className="mainContent">
        <Header />
        <div className="dividerTop" />
        <div className="breadcrumbSort">
          <div className="breadcrumb">
            <span className="breadcrumbItemBold">yannstechub</span>
            <span className="breadcrumbItem">/ Track Order</span>
          </div>
        </div>
        <div className="dividerNormal" />
        <div className="orderSection">
          <h1 className="sectionTitle">Your Order</h1>
          <img
            loading="lazy"
            src="/imgs/order-track.png"
            alt="Order tracking information"
            className="orderImage"
          />
          <form className="orderForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="order-number"
              name="order-number"
              placeholder="Enter your number"
              required
              className="orderInput"
            />
            <button type="submit" className="orderButton">Track</button>
          </form>
          <p className="orderInfo">
            Normally your package will arrive within 2-5 working days after placing
            your order. In case of weather disasters, and holidays there may be
            delays. For any questions please contact Care.gh@oraimo.com. Thank you
            for your support and patience.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;