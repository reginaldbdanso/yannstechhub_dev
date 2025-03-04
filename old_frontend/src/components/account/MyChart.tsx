import React from 'react';

const MyChart: React.FC = () => {
  return (
    <section className="products-section">
      <header className="products-header">
        <span className="header-item">Product</span>
        <div className="header-items">
          <span className="header-item">Price</span>
          <span className="header-item">Quantity</span>
          <span className="header-item">Total</span>
        </div>
      </header>

      {/* Example product card */}
      <article className="product-card">
        <img
          src="/src/assets/product1.png"
          className="product-image"
          alt="Product 1"
        />
        <h3 className="product-title">Lorem ipsum dolor</h3>
        <span className="product-price">$50.00</span>
        <div className="quantity-control">
          <input type="number" className="quantity-input" defaultValue={1} min={1} />
        </div>
        <span className="product-total">$50.00</span>
        <button className="delete-btn">
          <img
            src="/src/assets/delete.png"
            className="delete-icon"
            alt="Delete"
          />
        </button>
      </article>
    </section>
  );
};

export default MyChart;