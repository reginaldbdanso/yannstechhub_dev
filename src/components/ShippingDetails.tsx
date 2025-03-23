import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  '../styles/components/ShippingDetails.module.css';
import { useCart } from '../context/CartContext';


const ShippingDetails: React.FC = () => {
  const { cart, updateQuantity, subtotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/payment-mobile');
  }
  return (
    <div className="checkout-container">
      <div className="main-content">
        <div className="header-section">
          <Link to="/">
            <img className="logo" src="/imgs/Logo.png" alt="YannsTechHub Logo" />
          </Link>
          <div className="nav-buttons">
            <Link className="nav-link" to="/daily-deals">Daily deals</Link>
            <Link className="nav-link" to="/shop">Shop</Link>
            <Link className="nav-link" to="/bundle-deals">Bundle Deals</Link>
            <Link className="nav-link" to="/support">Support</Link>
          </div>
          <div className="user-actions">
            <img className="action-icon" src="/imgs/Search.png" alt="Search" />
            <Link to="/login">
              <img className="action-icon" src="/imgs/Profile.png" alt="User Account" />
            </Link>
            <Link to="/cart">
              <img className="action-icon" src="/imgs/Cart.png" alt="Shopping Cart" />
            </Link>
          </div>
        </div>

        <div className="divider-top" />
        <div className="divider" />

        <div className="checkout-content">
          <div className="content-grid">
            <div className="shipping-column">
              <div className="shipping-details-section">
                <div className="section-title">Shipping Details</div>
                <div className="address-card">
                  <div className="address-info">
                    <div className="info-item">John Doe</div>
                    <div className="info-item">123 Main Street</div>
                    <div className="info-item">Apt 4B</div>
                    <div className="info-item">New York, NY 10001</div>
                    <div className="info-item">+1 (555) 123-4567</div>
                  </div>
                  <button className="edit-button">
                    <img className="edit-icon" src="/imgs/edit.png" alt="Edit" />
                    Edit
                  </button>
                </div>
              </div>

              <div className="method-card">
                <div className="section-title">Shipping Method</div>
                <div className="method-description">Standard Shipping (5-7 business days)</div>
              </div>

              <div className="payment-column">
                <div className="section-title">Payment Method</div>
                <div className="payment-option">
                  <input className="radio-button" type="radio" name="payment" value="card" />
                  <div className="option-label">Credit/Debit Card</div>
                </div>

                <div className="mobile-money-section">Mobile Money</div>
                <div className="mobile-option">
                  <input className="radio-button" type="radio" name="payment" value="momo" />
                  <div className="option-label">Mobile Money</div>
                </div>
                
                <button className="checkout-button" onClick={handleCheckout}>Proceed to Payment</button>
              </div>
            </div>

            <div className="order-summary">
              <div className="summary-container">
                <div className="summary-header">
                  <h2>Order Summary</h2>
                  <span>{cart.length} items</span>
                </div>

                <div className="order-items">
                  {cart.map((item) => (
                    <React.Fragment key={item.id}>
                      <div className="order-item">
                        <img
                          className="remove-icon"
                          src="/imgs/close.png"
                          alt="Remove"
                          onClick={() => updateQuantity(item.id, 0)}
                        />
                        <img className="item-image" src={item.image} alt={item.title} />
                        <div className="item-details">
                          <div className="item-title">{item.title}</div>
                          <div className="item-price">${item.price.toFixed(2)}</div>
                          <div className="quantity-control">
                            <button className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                          </div>
                          <div className="item-total-price">${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      </div>
                      <div className="item-divider" />
                    </React.Fragment>
                  ))}
                </div>

                <div className="total-section">
                  <div className="total-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="total-row">
                    <span>Shipping</span>
                    <span>$5.00</span>
                  </div>
                  <div className="total-row">
                    <span>Total</span>
                    <span>${(subtotal + 5).toFixed(2)}</span>
                  </div>
                  <div className="shipping-info">
                    Shipping costs are calculated based on your location
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <div className="footer-sections">
            <div className="footer-logo-social">
              <img className="logo" src="/imgs/Logo.png" alt="YannsTechHub Footer Logo" />
              <div className="social-icons">
                <img className="social-icon" src="/imgs/facebook.png" alt="Facebook" />
                <img className="social-icon" src="/imgs/twitter.png" alt="Twitter" />
                <img className="social-icon" src="/imgs/instagram.png" alt="Instagram" />
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-heading">Quick Links</div>
              <Link className="footer-link" to="/about">About Us</Link>
              <Link className="footer-link" to="/contact">Contact</Link>
              <Link className="footer-link" to="/faq">FAQ</Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2024 YannsTechHub. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;