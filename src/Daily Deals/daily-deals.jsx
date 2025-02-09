import React from "react";
import "./daily-deals.css"



function DailyDeals() {
    return (
        <section className="bundle-deals-container">
    <div className="main-content">
      {/* <header className="header-section">
        <img src="imgs/Logo.png" alt="YannsTechHub Logo" className="logo" />
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
      </header> */}
  
      <div className="divider-top"></div>
  
      <div className="breadcrumb-sort">
        <div className="breadcrumb">
          <span className="breadcrumb-item y">yannstechub</span>
          <span className="breadcrumb-item">/ Daily deals</span>
        </div>
        <div className="sort-container">
          <label for="sortSelect" className="sort-label">Sort by</label>
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
  
      <div className="products-grid" id="product-list">

          
      </div>
    </div>
  
    {/* <footer className="footer">
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
    </footer> */}
  </section>
    );
}

export default DailyDeals;