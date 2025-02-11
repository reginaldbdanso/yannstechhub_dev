import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : [];
    setCart(storedCart);
    updateSubtotal();
  }, []);

  const updateSubtotal = () => {
    let totalElements = document.querySelectorAll("[id^='total-price-']");
    let subtotal = 0;
    
    totalElements.forEach(el => {
      let price = parseFloat((el as HTMLElement).innerText.replace('$', '').trim());
      subtotal += price;
    });

    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  };

  const increaseQuantity = (index, price) => {
    let quantitySpan = document.getElementById(`quantity-${index}`);
    let totalPriceElement = document.getElementById(`total-price-${index}`);
    
    let quantity = parseInt(quantitySpan.innerText);
    quantity += 1;
    
    quantitySpan.innerText = quantity;
    totalPriceElement.innerText = `$${(quantity * price).toFixed(2)}`;

    updateSubtotal();
  };

  const decreaseQuantity = (index, price) => {
    let quantitySpan = document.getElementById(`quantity-${index}`);
    let totalPriceElement = document.getElementById(`total-price-${index}`);
    
    let quantity = parseInt(quantitySpan.innerText);
    if (quantity > 1) {
      quantity -= 1;
    }

    quantitySpan.innerText = quantity;
    totalPriceElement.innerText = `$${(quantity * price).toFixed(2)}`;

    updateSubtotal();
  };

  const removeFromCart = (index) => {
    let updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateSubtotal();
  };

  return (
    <div className="charts">
      <div className="main-content">
        <header className="header-section">
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

        <div className="cart-container">
          <div className="cart-header">Your Cart</div>
          <div className="continue-shopping">Continue Shopping</div>
          <div className="cart-summary">
            <div>Product</div>
            <div className="cart-summary-column">
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
          </div>
          
          <div id="cart-items">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div className="cart-item-content">
                    <img loading="lazy" src={item.imageUrl} alt={item.name} className="product-image" />
                    <div className="product-description">{item.name}</div>
                  </div>
                  <div className="product-details">
                    <div className="product-price">${item.price}</div>
                    <div className="quantity-selector">
                      <button className="quantity-btn" onClick={() => decreaseQuantity(index, item.price)}>-</button>
                      <span id={`quantity-${index}`}>1</span>
                      <button className="quantity-btn" onClick={() => increaseQuantity(index, item.price)}>+</button>
                    </div>
                    <div className="product-total-price">$<span id={`total-price-${index}`}>{item.price}</span></div>
                  </div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c3be999d09cf21075541454471ef4c10a595c4192cb055c995ccc9c2ffe1092?placeholderIfAbsent=true&apiKey=2c9d54f744c4489ca7176332d686675c" className="remove-icon" onClick={() => removeFromCart(index)} alt="Remove item icon" />
                </div>
              ))
            )}
          </div>
          
          <div className="subtotal-section"></div>
          <div className="subtotal-container" id="subtotal-container">
            <div className="subtotal-label">Subtotal</div>
            <div className="subtotal-amount">$<span id="subtotal">0.00</span></div>
          </div>
          <div className="checkout-divider"></div>
          <div className="tax-shipping-info">Tax included and shipping calculated at checkout</div>
          <div className="checkout-button" tabIndex="0" role="button"><a href="secure-checkout.html">Proceed to checkout</a></div>
        </div>
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

export default Cart;
