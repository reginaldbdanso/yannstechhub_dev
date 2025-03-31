import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  '../styles/components/ShippingDetails_module.css';
import Header from './Header';
import OrderSummary from './OrderSummary';
import Footer from './Footer';

const ShippingDetails: React.FC = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/payment-mobile');
  }
  return (
    <div className="checkout-container">
      <div className="main-content">
      <Header />

        <div className="divider-top" />
        <div className="breadcrumb-sort">
          <div className="breadcrumb">
            <div className="breadcrumb-item breadcrumb-item-bold">yannstechub</div>
            <div className="breadcrumb-item">/ Daily deals</div>
          </div>
        </div>
        <div className="divider" />

        <div className="checkout-content">
          <div className="content-grid">
            <div className="shipping-column">
              <div className="shipping-details-section">
                <div className="section-title">Shipping Details</div>
                <div className="address-card">
                  <div className="address-info">
                    <div className="info-item"><strong>Name: </strong> John Doe</div>
                    <div className="info-item"><strong>Email: </strong>adusahpoku@gmail.com</div>
                    <div className="info-item"><strong>Phone: </strong>05989812365</div>
                    <div className="info-item"><strong>Ship to: </strong>GA-021-6548 Spintex Shell Signboard</div>
                    
                  </div>
                  <button className="edit-button">
                    <img className="edit-icon" src="/imgs/edit.png" alt="Edit" />
                    Edit
                  </button>
                </div>

                <div className="section-title">Shipping Method</div>
                <div className="method-card">
                  <div className="method-description-title">Standard Shipping</div>
                  <div className="method-description">(1-3 business days in Accra)</div>
                  <div className="method-description">(3-7 business days in other areas)</div>
                  <div className="method-description"><strong>$5.00</strong></div>
                </div>

                <div className="section-title">Payment Method</div>
                <div className="payment-column">
                <div className="payment-option">
                  <input className="radio-button" type="radio" name="payment" value="card" />
                  <div className="option-label">Credit/Debit Card</div>
                </div>

                <div className="mobile-money-section">Mobile Money</div>
                <div className="mobile-option">
                  <input className="radio-button" type="radio" name="payment" value="momo" />
                  <div className="option-label">Mobile Money</div>
                </div>
              </div>
              {/* <button className="checkout-button" onClick={handleCheckout}>Proceed to Payment</button> */}
              </div>
            </div>

          <div className="order-summary">
          <OrderSummary />
            <Link className="checkout-button" to="/payment-mobile">
              Proceed to checkout
            </Link>
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShippingDetails;