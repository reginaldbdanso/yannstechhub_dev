import React from "react";
import './Index.css'
import { Link } from "react-router-dom";
import ProductList from "../../assets/scripts/daily-deals-section";



function Index() {
  function viewProduct(name, price, image) {
          // Save product details to localStorage
          localStorage.setItem('productName', name);
          localStorage.setItem('productPrice', price);
          localStorage.setItem('productImage', image);
  
          // Redirect to product details page
          window.location.href = 'product-details.html';
      }
  return (
    <>
      <div className="landing-container">
      <div className="main-content">
        {/* <header className="header-section">
        <a href=""><img src="imgs/Logo.png" alt="YannsTechHub Logo" className="logo" /></a>
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
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-image-wrapper">
              <img loading="lazy" src="/imgs/Airpods 1.png" className="hero-image" alt="Hero background image" />
              
              <div className="thumbnail-container">
                <img loading="lazy" src="public/imgs/Rectangle 15.png" className="thumbnail" alt="Product thumbnail 1" />
                <img loading="lazy" src="public/imgs/Rectangle 16.png" className="thumbnail-small" alt="Product thumbnail 2" />
                <img loading="lazy" src="public/imgs/Rectangle 17.png" className="thumbnail-small" alt="Product thumbnail 3" />
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-content-right">
              <div className="hero-title-container">
                <div className="hero-title-wrapper">
                  <div className="hero-title-left">
                    <h1 className="hero-title">Apple <br/> Airpods Pro</h1>
                  </div>
                  <div className="hero-title-right">
                    <img loading="lazy" src="public/imgs/b8fe31b5f460d63a4fa2222d46967b54 1.png" className="hero-image-right" alt="Airpods Pro" />
                  </div>
                </div>
              </div>
              <p className="hero-description">
                Lorem ipsum dolor sit amet consectetur. Quam accumsan ornare diam
                et quis aliquam. Diam tincidunt accumsan enim tristique velit
                proin luctus massa auctor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="categories-section">
        <div className="categories-grid">
          <div className="category-item">
                <h3 className="category-title">Browse by Category <br />Shop.<span style={{ color: '#bbbbbb' }}>the best way to buy the products you love.</span></h3>
            {/* <!-- <p className="hero-text">Shop. <span className="gray-text">the best way to buy the products you love.</span></p> --> */}
            <div className="hero-controls">
                <img loading="lazy" src="public/imgs/Vector (1).png" className="control-icon" alt="Previous" />
              <img loading="lazy" src="public/imgs/Vector (2).png" className="control-icon" alt="Next" />
            </div>
            <div className="categories-products">
              <div className="categories-products-icon">
                <div className="category-icon-wrapper">
                  <img loading="lazy" src="public/imgs/Rectangle 9.png" className="category-icon" alt="Phones category" />
                </div>
                <h2 className="category-label">Phones</h2>
              </div>
              <div className="categories-products-icon">
                <div className="category-icon-wrapper">
                  <img loading="lazy" src="public/imgs/Rectangle 9.png" className="category-icon" alt="Phones category" />
                </div>
                <h2 className="category-label">Phones</h2>
              </div>
              <div className="categories-products-icon">
                <div className="category-icon-wrapper">
                  <img loading="lazy" src="public/imgs/Rectangle 9.png" className="category-icon" alt="Phones category" />
                </div>
                <h2 className="category-label">Phones</h2>
              </div>
              <div className="categories-products-icon">
                <div className="category-icon-wrapper">
                  <img loading="lazy" src="public/imgs/Rectangle 9.png" className="category-icon" alt="Phones category" />
                </div>
                <h2 className="category-label">Phones</h2>
              </div>
              <div className="categories-products-icon">
                <div className="category-icon-wrapper">
                  <img loading="lazy" src="public/imgs/Rectangle 9.png" className="category-icon" alt="Phones category" />
                </div>
                <h2 className="category-label">Phones</h2>
              </div>
              <div className="categories-products-icon">
                <div className="category-icon-wrapper">
                  <img loading="lazy" src="public/imgs/Rectangle 9.png" className="category-icon" alt="Phones category" />
                </div>
                <h2 className="category-label">Phones</h2>
              </div>
              <div className="categories-products-icon">
                <div className="category-icon-wrapper">
                  <img loading="lazy" src="public/imgs/Rectangle 9.png" className="category-icon" alt="Phones category" />
                </div>
                <h2 className="category-label">Phones</h2>
              </div>
            </div>
          </div>
          {/* <!-- Repeat similar structure for other categories --> */}
        </div>
        
        <section className="items-section">
              <h3>Our Latest Items. <span style={{ color: "#bbbbbb" }}>Have A Look At What's New, Now.</span></h3>
          <nav className="items-nav"> </nav>
          <div className="items-grid">
            <div className="items-row">
              <div className="items-column">
                <Link to ="#top-rated">Top Rated</Link>
                <img loading="lazy" src="/imgs/Rectangle 17.png" className="items-image" alt="Featured Item" />
              </div>
              <div className="items-grid-column">
                <Link to="#latest-arrivals">Latest Arrivals</Link>
                <div className="items-grid-container">
                  <div className="items-grid-row">
                    <img loading="lazy" src="public/imgs/Rectangle 51.png" className="items-grid-item" alt="Item 1" />
                    <img loading="lazy" src="public/imgs/Rectangle 52.png" className="items-grid-item" alt="Item 2" />
                  </div>
                  <div className="items-grid-row">
                    <img loading="lazy" src="public/imgs/Rectangle 53.png" className="items-grid-item" alt="Item 3" />
                    <img loading="lazy" src="public/imgs/Rectangle 54.png" className="items-grid-item" alt="Item 4" />
                  </div>
                </div>
              </div>
              <div className="items-column-small">
                <Link to="#best-deals">Best Deals</Link>
                <div className="items-images-small">
                  <img loading="lazy" src="public/imgs/Rectangle 49.png" className="items-image-small" alt="Item 5" />
                  <img loading="lazy" src="public/imgs/Rectangle 50.png" className="items-image-small-2" alt="Item 6" />
                </div>
              </div>
            </div>
          </div>
      </section>
          
            
        <section>        
          <h2 className="product-txt">On Sale. <span style={{ color: "#bbbbbb" }}>Your favorite gadgets, delivered right to your doorstep in no time.</span></h2>
        <div className="products-grid" id="product-list">
          
          <div className="product-card-1">
            <div className="sales-banner">
              <p>Trend<br />Products</p>
              <div className="highlight-circle">
                <img src="/imgs/Vector.png" className="arrow-vector" alt="" />
              </div>
            </div>
          </div>

                {/* <!-- Products will be dynamically inserted here --> */}
                 
         </div>
              {/* <!-- Repeat for other products --> */}
        </section>
  
        <section className="promo-banner">
          <div className="promo-content">
            <div className="promo-row">
              <div className="promo-col">
                <img loading="lazy" src="public/imgs/Watch.png" className="promo-image" alt="Fast Sales promotion" />
              </div>
              <div className="promo-text-col">
                <h2 className="promo-title">Fast Sales</h2>
                <h3 className="promo-description">Yanns tech Hub Sales. </h3>
              </div>
            </div>
          </div>
        </section>
  
        <section className="features-section">
          <div className="features-grid">
            <div className="feature-col">
              <div className="feature-card">
                <div className="feature-content">
                  <img loading="lazy" src="public/imgs/delivery.png" className="feature-icon" alt="" />
                  <h3 className="feature-title">Free Delivery</h3>
                  <p className="feature-description">And free returns. See checkout for delivery dates.</p>
                </div>
              </div>
            </div>
            <div className="feature-col">
              <div className="feature-card">
                <div className="feature-content">
                  <img loading="lazy" src="public/imgs/0-percent.png" className="feature-icon" alt="" />
                  <h3 className="feature-title">Pay 0% interest for up to 24months</h3>
                  <p className="feature-description">Choose any items of your choice without paying any interest.</p>
                </div>
              </div>
            </div>
            <div className="feature-col">
              <div className="feature-card">
                <div className="feature-content">
                  <img loading="lazy" src="public/imgs/support.png" className="feature-icon" alt="" />
                  <h3 className="feature-title">Customer Support</h3>
                  <p className="feature-description">Helping customers resolve issues with products or services.</p>
                </div>
              </div>
            </div>
            {/* <!-- Repeat for other features --> */}
          </div>
        </section>
      </section>
  
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Subscribe for Newsletter</h2>
          <p className="newsletter-description">Subscribe to get latest updates and information.</p>
          <form className="newsletter-form">
            <input type="email" id="email" name="email" className="email" placeholder="Enter your email" required />
            <button type="submit" className="newsletter-button">Send</button>
          </form>
        </div>
      </section>
  
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
      </div>
      </div>

    {/* <script src="daily-deals-section.js"></script>
  //   <script>
  //     function viewProduct(name, price, image) {
  //         // Save product details to localStorage
  //         localStorage.setItem('productName', name);
  //         localStorage.setItem('productPrice', price);
  //         localStorage.setItem('productImage', image);
  
  //         // Redirect to product details page
  //         window.location.href = 'product-details.html';
  //     }
  // </script> */}</>
  );
}

export default Index;