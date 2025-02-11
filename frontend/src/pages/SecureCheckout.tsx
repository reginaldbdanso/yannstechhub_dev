import '../styles/SecureCheckout.css';

const SecureCheckout = () => {
  return (
    <form className="checkout-container" aria-labelledby="checkout-title">
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
          <div className="checkout-form">
            <h1 id="checkout-title" className="form-title">Shipping Address</h1>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" className="form-input" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />
                Set as default
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="state">State/Province</label>
              <input type="text" id="state" className="form-input" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="district">District</label>
                <input type="text" id="district" className="form-input" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address1">Address</label>
              <input type="text" id="address1" className="form-input" placeholder="Street, Apartment, Suite, etc." required />
              <span className="helper-text">Detailed street address can help our rider find you quickly.</span>
            </div>

            <div className="form-group">
              <label htmlFor="address2">Address 2</label>
              <input type="text" id="address2" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" className="form-input" required />
            </div>

            <a href="shipping-details.html">
              <button type="submit" className="submit-button">Proceed to checkout</button>
            </a>
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
                <li className="product-item">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9d8eab4fe28a73835d78dacacb812768449843e65448f1aa79482ad7a0d5e41?placeholderIfAbsent=true&apiKey=2c9d54f744c4489ca7176332d686675c" alt="Product 2" className="product-image" />
                  <div className="product-details">
                    <h3 className="product-name">Lorem ipsum dolor</h3>
                    <p className="product-quantity">Qty: 1</p>
                    <p className="product-price">$99.99</p>
                  </div>
                </li>
                <li className="product-item">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dec0a85ae305f77f0be2bbd7994f06e59650e4d5ff4602c193c0386f8e57c48?placeholderIfAbsent=true&apiKey=2c9d54f744c4489ca7176332d686675c" alt="Product 3" className="product-image" />
                  <div className="product-details">
                    <h3 className="product-name">Lorem ipsum dolor</h3>
                    <p className="product-quantity">Qty: 1</p>
                    <p className="product-price">$99.99</p>
                  </div>
                </li>
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

    </form>
  );
};

export default SecureCheckout;
