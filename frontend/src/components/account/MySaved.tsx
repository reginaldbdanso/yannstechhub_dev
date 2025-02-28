import React from 'react';

const MySaved: React.FC = () => {
  return (
    <section className="product-grid">
      {/* Example saved product card */}
      <article className="product-card">
        <div className="product-image-container">
          <img
            src="/src/assets/product1.png"
            className="product-image"
            alt="Product"
          />
          <img
            src="/src/assets/favorite.png"
            className="favorite-icon"
            alt="Favorite"
          />
        </div>
        <h3 className="product-title">Lorem ipsum dolor</h3>
        <div className="product-details">
          <div className="product-info">
            <div className="rating">
              <img
                src="/src/assets/star.png"
                className="star-icon"
                alt="Rating"
              />
              <span className="review-count">5.0 (10 reviews)</span>
            </div>
            <span className="price">$ 15.00</span>
          </div>
          <button className="cart-button">
            <img
              src="/src/assets/add-to-cart.png"
              alt="Add to cart"
            />
          </button>
        </div>
      </article>
    </section>
  );
};

export default MySaved;