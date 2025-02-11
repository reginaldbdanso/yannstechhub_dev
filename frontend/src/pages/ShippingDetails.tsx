import React from 'react';
import './ShippingDetails.css';

const ShippingDetails = () => {
  return (
    <div className="checkout-container">
      <div className="main-content">
        <header className="header-section">
          <a href="index.html"><img src="imgs/Logo.png" alt="YannsTechHub Logo" className="logo" /></a>
          <nav className="nav-buttons">
            <a href="daily-deals-section.html" className="nav-link">Daily deals</a>
            <a href="shop-section.html" className="nav-link">Shop</a>
            <a href="bundle-deals.html" className="nav-link">Bundle Deals</a>
            <a href="#support" className="nav-link">Support</a>
          </nav>
          <div className="user-actions">
            <img src="imgs/Search - 7.png" alt="Search" className="action-icon" />
            <img src="imgs/Profile - 3.png" alt="User Account" className="action-icon" />
            <a href="your-cart.html">
              <img src="imgs/Buy - 6 (1).png" alt="Shopping Cart" className="action-icon" />
            </a>
          </div>
        </header>

        <div className="divider-top"></div>

        <div className="breadcrumb-sort">
          <div className="breadcrumb">
            <span className="breadcrumb-item y">yannstechub</span>
            <span className="breadcrumb-item">/ Daily deals</span>
          </div>
          <div className="sort-container">
            <label htmlFor="sortSelect" className="sort-label">Sort by</label>
            <select className="sort-Select" id="sortSelect" aria-label="Sort products">
              <option value="">Recommended</option>
              <option value="">Best Sellers</option>
              <option value="">Low Price</option>
              <option value="">High Price</option>
              <option value="">Reviews</option>
            </select>
          </div>
        </div>

        <div className="divider"></div>

        <main className="checkout-content">
          <div className="content-grid">
            <div className="shipping-column">
              <section className="shipping-details">
                <h2 className="section-title">Shipping Address</h2>
                <div className="address-card">
                  <div className="address-info">
                    <p><strong>Name:</strong> Adusah Poku Kofi Nkansah</p>
                    <p className="info-item"><strong>Email:</strong> adusahpoku@gmail.com</p>
                    <p className="info-item"><strong>Phone:</strong> 05989812365</p>
                    <p className="info-item"><strong>Ship to:</strong> GA-021-6548 Spintex Shell Signboard</p>
                  </div>
                  <button className="edit-button">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aa7b523f67476462c15e215411ad35ce54c27c56b10da9c112c2649704ee83a?placeholderIfAbsent=true&apiKey=2c9d54f744c4489ca7176332d686675c" className="edit-icon" alt="Edit"/>
                    Edit
                  </button>
                </div>

                <h2 className="shipping-method">Shipping Method</h2>
                <div className="method-card">
                  <p className="method-description">Standard Shipping (1-3 business days in Accra, 3-7 business days in other areas)</p>
                  <p>$5.00</p>
                </div>

                <h2 className="payment-method">Payment Method</h2>
                <div className="payment-column">
                  <div className="payment-option">
                    <div className="radio-button" role="radio" aria-checked="false"></div>
                    <p className="option-label">Pay on Delivery<br/><span>Pay Mobile Money or in cash on Delivery/Pickup</span></p>
                  </div>

                  <h3 className="mobile-money-section">Mobile Money</h3>

                  <div className="mobile-option">
                    <div className="radio-button" role="radio" aria-checked="false"></div>
                    <p>MTN Mobile Money</p>
                  </div>

                  <div className="mobile-option">
                    <div className="radio-button" role="radio" aria-checked="false"></div>
                    <p>Telecel Mobile Money</p>
                  </div>

                  <div className="mobile-option">
                    <div className="radio-button" role="radio" aria-checked="false"></div>
                    <p>AirtelTigo Mobile Money</p>
                  </div>

                  <h3>Pre-pay Now</h3>

                  <div className="payment-option">
                    <div className="radio-button" role="radio" aria-checked="false"></div>
                    <p>Pay with Card<br/><span>Pay Now with No E-levy</span></p>
                  </div>
                </div>
                <button className="checkout-button">Proceed to checkout</button>
              </section>
            </div>
          </div>
          <aside className="order-summary">
            <div className="summary-section">
              <div className="summary-header">
                <h2 className="summary-title">My Order Summary</h2>
                <button className="edit-button">Edit</button>
              </div>

              <ul className="product-list">
                <li className="product-item">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3d2d15b23f08d6a7e4a2e6a232f16067819ffa196f0281f853b8b8b5396d9b4?placeholderIfAbsent=true&apiKey=2c9d54f744c4489ca7176332d686675c" alt="Product 1" className="product-image" />
                  <div className="product-details">
                    <h3 className="product-name">Lorem ipsum dolor</h3>
                    <p className="product-quantity">Qty: 1</p>
                    <p className="product-price">$50.00</p>
                  </div>
                </li>
                {/* ...other product items... */}
              </ul>
            </div>

            <div className="total-section">
              <div className="total-row">
                <span>Cart Summary</span>
                <span>$349.99</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="total-row total-final">
                <span>Total</span>
                <span>$354.99</span>
              </div>
            </div>
          </aside>
        </main>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-sections">
            <div className="footer-logo-social">
              <img src="imgs/Logo (1).png" alt="YannsTechHub Footer Logo" className="logo" />
              <div className="social-icons">
                <a href="#" aria-label="Facebook">
                  <img src="imgs/Facebook.png" alt="" className="social-icon" />
                </a>
                <a href="#" aria-label="Twitter">
                  <img src="imgs/Twitter.png" alt="" className="social-icon" />
                </a>
                <a href="#" aria-label="Instagram">
                  <img src="imgs/Instagram.png" alt="" className="social-icon" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <img src="imgs/LinkedIn.png" alt="" className="social-icon" />
                </a>
                <a href="#" aria-label="YouTube">
                  <img src="imgs/YouTube.png" alt="" className="social-icon" />
                </a>
                <a href="#" aria-label="TickTok">
                  <img src="imgs/TikTok.png" alt="" className="social-icon" />
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h3 className="footer-heading">Company</h3>
              <a href="#about" className="footer-link">About Us</a>
              <a href="#careers" className="footer-link">Careers</a>
            </div>
            <div className="footer-links">
              <h3 className="footer-heading">Help</h3>
              <a href="#legal" className="footer-link">Legal</a>
              <a href="#faqs" className="footer-link">FAQs</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
        </div>
        <div className="copyright">@yannstechhub2025</div>
      </footer>
    </div>
  );
};

export default ShippingDetails;
