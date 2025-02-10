import React from "react";
import "./bundleDeals.css"

function BundleDeals() {
    return (
      <body>
  <section class="bundle-deals-container">
    <div class="main-content">
      {/* <header class="header-section">
        <img src="imgs/Logo.png" alt="YannsTechHub Logo" class="logo" />
        <nav class="nav-buttons">
          <a href="daily-deals-section.html" class="nav-link">Daily deals</a>
          <a href="shop-section.html" class="nav-link">Shop</a>
          <a href="bundle-deals.html" class="nav-link">Bundle Deals</a>
          <a href="#support" class="nav-link">Support</a>
        </nav>
        <div class="user-actions">
          <img src="imgs/Search - 7.png" alt="Search" class="action-icon" />
          <img src="imgs/Profile - 3.png" alt="User Account" class="action-icon" />
          <a href="your-cart.html">
            <img src="imgs/Buy - 6 (1).png" alt="Shopping Cart" class="action-icon" />
          </a>
        </div>
      </header> */}
  
      <div class="divider-top"></div>
  
      <div class="breadcrumb-sort">
        <div class="breadcrumb">
          <span class="breadcrumb-item y">yannstechub</span>
          <span class="breadcrumb-item">/ Daily deals</span>
        </div>
        <div class="sort-container">
          <label for="sortSelect" class="sort-label">Sort by</label>
            <select class="sort-Select" id="sortSelect" aria-label="Sort products">
              <option value="">Recommended</option>
              <option value="">Best Sellers</option>
              <option value="">Low Price</option>
              <option value="">High Price</option>
              <option value="">Reviews</option>
            </select>
        </div>
      </div>
  
      <div class="divider"></div>
  
      <div class="products-grid" id="product-list">

         {/* <!-- Products will be dynamically inserted here --> */}
          
      </div>
    </div>
  
    {/* <footer class="footer">
      <div class="footer-content">
        <div class="footer-sections">
          <div class="footer-logo-social">
            <img src="imgs/Logo (1).png" alt="YannsTechHub Footer Logo" class="logo" />
            <div class="social-icons">
              <a href="#" aria-label="Facebook">
                <img src="imgs/Facebook.png" alt="" class="social-icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src="imgs/Twitter.png" alt="" class="social-icon" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="imgs/Instagram.png" alt="" class="social-icon" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src="imgs/LinkedIn.png" alt="" class="social-icon" />
              </a>
              <a href="#" aria-label="YouTube">
                <img src="imgs/YouTube.png" alt="" class="social-icon" />
              </a>
              <a href="#" aria-label="TickTok">
                <img src="imgs/TikTok.png" alt="" class="social-icon" />
              </a>
            </div>
          </div>
          <div class="footer-links">
            <h3 class="footer-heading">Company</h3>
            <a href="#about" class="footer-link">About Us</a>
            <a href="#careers" class="footer-link">Careers</a>
          </div>
          <div class="footer-links">
            <h3 class="footer-heading">Help</h3>
            <a href="#legal" class="footer-link">Legal</a>
            <a href="#faqs" class="footer-link">FAQs</a>
            <a href="#contact" class="footer-link">Contact</a>
          </div>
        </div>
      </div>
      <div class="copyright">@yannstechhub2025</div>
    </footer> */}
  </section>

  

</body>  
    );
}

export default BundleDeals;