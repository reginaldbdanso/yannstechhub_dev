import React from 'react';
import '../styles/BundleDeals.css';

const BundleDeals: React.FC = () => {
  const viewProduct = (name: string, price: string, image: string) => {
    localStorage.setItem('productName', name);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productImage', image);
    window.location.href = 'product-details.html';
  };

  return (
    <section className="bundle-deals-container">
      <div className="main-content">

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

        <div className="products-grid" id="product-list">
          {/* Products will be dynamically inserted here */}
        </div>
      </div>

    </section>
  );
};

export default BundleDeals;
