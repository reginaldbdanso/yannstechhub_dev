import React, { useEffect, useState } from 'react';

export const ProductDetails = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('productName');
    const price = localStorage.getItem('productPrice');
    const image = localStorage.getItem('productImage');

    if (name && price && image) {
      setProductName(name);
      setProductPrice(price);
      setProductImage(image);
    }
  }, []);

  const handleThumbnailClick = (src: string) => {
    setProductImage(src);
  };

  return (
    <section className="daily-deals-container">
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
            <img src="imgs/Buy - 6 (1).png" alt="Shopping Cart" className="action-icon" />
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

        <div className="product-container">
          <div className="product-wrapper">
            <div className="product-content">
              <div className="product-gallery">
                <div className="main-image-wrapper">
                  <img id="product-image" src={productImage} alt="Main Product" className="main-product-image" />
                  <div className="thumbnail-gallery">
                    <img src="imgs/Rectangle 11.png" alt="Thumbnail 1" className="thumbnail" onClick={() => handleThumbnailClick('imgs/Rectangle 11.png')} />
                    <img src="imgs/Rectangle 17.png" alt="Thumbnail 2" className="thumbnail" onClick={() => handleThumbnailClick('imgs/Rectangle 17.png')} />
                    <img src="imgs/Rectangle 15.png" alt="Thumbnail 3" className="thumbnail" onClick={() => handleThumbnailClick('imgs/Rectangle 15.png')} />
                    <img src="imgs/Rectangle 10.png" alt="Thumbnail 4" className="thumbnail" onClick={() => handleThumbnailClick('imgs/Rectangle 10.png')} />
                  </div>
                </div>
              </div>
              <div className="product-info">
                <div className="info-container">
                  <div className="product-detail">
                    <h1 className="product-title" id="product-name">{productName}</h1>
                    <div className="rating-wrapper">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d05389f4cec6dd226fa4948dd7647b8772ce41b4391b6dd9579b8d8c1bc0c2c?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" className="rating-icon" loading="lazy"/>
                      <span>5.0 (58 reviews)</span>
                    </div>
                    <div className="price" id="product-price">${productPrice}</div>
                    <div className="quantity-label">Quantity</div>
                    <div className="feature-list">
                      <div className="feature-item">Powerful Bass</div>
                      <div className="feature-item">60-hr-Playtime</div>
                      <div className="feature-item">AniFast™ Fast Charging</div>
                      <div className="feature-item">ENC HD Voice in Calls</div>
                    </div>
                  </div>
                  <div className="action-buttons">
                    <button className="btn btn-primary"><a href="bundle-deals.html">Continue Shopping</a></button>
                    <button className="btn btn-secondary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2 className="section-title">Description</h2>
            <div className="specs-list">
              BT Version: 5.2<br/>
              BT Range: ≥10m<br/>
              Speaker Diameter: 40mm<br/>
              Playtime: Up to 60 hours<br/>
              Charging Time: 1.5 hours<br/>
              Supported Format: Mic support / Aux in Mode / Type-C<br/>
              Model:OHP-610
            </div>

            <div className="feature-description">
              <strong>Powerful Deep Bass <br/>
                Hits You in Waves
              </strong><br/>
              Powered by advanced 40mm drivers and exclusive HavyBassTM technology, BoomPop2 is meticulously designed to offer music enthusiasts an unparalleled sound experience, characterized by incredibly deep and dynamic bass.
            </div>

            <div className="feature-description">
              <strong>Powerful Deep Bass <br/>
                Hits You in Waves
              </strong><br/>
              Powered by advanced 40mm drivers and exclusive HavyBassTM technology, BoomPop2 is meticulously designed to offer music enthusiasts an unparalleled sound experience, characterized by incredibly deep and dynamic bass.
            </div>

            <h2 className="section-title">Ratings and Reviews</h2>
            <div className="reviews-container">
              <div className="rating-summary">
                <div className="rating-score">
                  <span>5.0</span>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy"/>
                </div>
                <span>5489 ratings</span>
              </div>

              <div className="rating-bars">
                <div className="rating-bar">
                  <span>5</span>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '320px' }}></div>
                  </div>
                  <span>3321</span>
                </div>
                <div className="rating-bar">
                  <span>4</span>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '100px' }}></div>
                  </div>
                  <span>3321</span>
                </div>
                <div className="rating-bar">
                  <span>3</span>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '280px' }}></div>
                  </div>
                  <span>3321</span>
                </div>
                <div className="rating-bar">
                  <span>2</span>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '250px' }}></div>
                  </div>
                  <span>3321</span>
                </div>
                <div className="rating-bar">
                  <span>1</span>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '20px' }}></div>
                  </div>
                  <span>3321</span>
                </div>
              </div>
              <div>
                <h2>Rating This Product</h2>
                <p>Lorem ipsum dolor sit amet </p>
              </div>
            </div>

            <div className="review-card">
              <div className="review-rating">
                <h3 className="review-title">Super impressive</h3>
                <div className="review-stars">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy"/>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy"/>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy"/>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy"/>
                </div>
              </div>
              <p>The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.</p>
              <p>Reviewed by Sweetie Baiden</p>
            </div>
            {/* Additional review cards follow same structure */}
            <h2 className="section-title">You May Also Like</h2>
            <div className="products-grid">
              <article className="product-card">
                <div className="product-image-container">
                  <img src="imgs/Rectangle 62.png" alt="Product 1" className="product-image" />
                  <img src="imgs/favorie 1.png" alt="Add to wishlist" className="wishlist-icon" />
                </div>
                <h2 className="product-title">Lorem ipsum dolor</h2>
                <div className="product-details">
                  <div className="rating-price">
                    <div className="rating">
                      <img src="imgs/star 1.png" className="rating-icon" />
                      <span>5.0 (58 reviews)</span>
                    </div>
                    <span className="price">$ 50.00</span>
                  </div>
                  <button className="cart-button" aria-label="Add to cart">
                    <img src="imgs/Buy - 6.png" alt="" className="cart-icon" />
                  </button>
                </div>
              </article>
              {/* Additional product cards follow same structure */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

