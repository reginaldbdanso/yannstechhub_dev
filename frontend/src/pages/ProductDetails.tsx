import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductDetails.css';

interface Review {
  title: string;
  rating: number;
  content: string;
  author: string;
}

interface SimilarProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  imageUrl: string;
}

export const ProductDetails = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('productName');
    const price = localStorage.getItem('productPrice');
    const image = localStorage.getItem('productImage');

    if (name && price && image) {
      setProductName(name);
      setProductPrice(price);
      setProductImage(image);
      setSelectedImage(image);
    }
  }, []);

  const handleThumbnailClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleAddToCart = () => {
    // Add cart logic here
  };

  const handleBuyNow = () => {
    // Add buy now logic here
  };

  const ratingData = {
    average: 5.0,
    total: 5489,
    distribution: [
      { stars: 5, count: 3321, width: 320 },
      { stars: 4, count: 3321, width: 100 },
      { stars: 3, count: 3321, width: 280 },
      { stars: 2, count: 3321, width: 250 },
      { stars: 1, count: 3321, width: 20 },
    ]
  };

  const reviews: Review[] = [
    {
      title: "Super impressive",
      rating: 5,
      content: "The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.",
      author: "Sweetie Baiden"
    }
  ];

  const similarProducts: SimilarProduct[] = [
    {
      id: 1,
      name: "Lorem ipsum dolor",
      price: 50.00,
      rating: 5.0,
      reviews: 58,
      imageUrl: "/imgs/Rectangle 62.png"
    }
    // Add more similar products as needed
  ];

  return (
    <section className="daily-deals-container">
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

        <div className="product-container">
          <div className="product-wrapper">
            <div className="product-content">
              <div className="product-gallery">
                <div className="main-image-wrapper">
                  <img 
                    src={selectedImage || productImage} 
                    alt={productName} 
                    className="main-product-image" 
                  />
                  <div className="thumbnail-gallery">
                    {[1, 2, 3, 4].map((num) => (
                      <img
                        key={num}
                        src={`/imgs/product-thumb-${num}.jpg`}
                        alt={`${productName} view ${num}`}
                        className="thumbnail"
                        onClick={() => handleThumbnailClick(`/imgs/product-thumb-${num}.jpg`)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="product-info">
                <div className="info-container">
                  <div className="product-detail">
                    <h1 className="product-title">{productName}</h1>
                    <div className="rating-wrapper">
                      <img src="/imgs/star.png" alt="Rating" className="rating-icon" />
                      <span>5.0 (58 reviews)</span>
                    </div>
                    <div className="price">${productPrice}</div>
                    <div className="quantity-label">Quantity</div>
                    <div className="feature-list">
                      <div className="feature-item">Powerful Bass</div>
                      <div className="feature-item">60-hr-Playtime</div>
                      <div className="feature-item">AniFast™ Fast Charging</div>
                      <div className="feature-item">ENC HD Voice in Calls</div>
                    </div>
                  </div>
                  <div className="action-buttons">
                    <button className="btn btn-primary" onClick={handleAddToCart}>
                      Add to Cart
                    </button>
                    <button className="btn btn-secondary" onClick={handleBuyNow}>
                      Buy Now
                    </button>
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
              Model: OHP-610
            </div>

            <div className="feature-description">
              <strong>
                Powerful Deep Bass<br/>
                Hits You in Waves
              </strong>
              <p>
                Powered by advanced 40mm drivers and exclusive HavyBassTM technology, 
                BoomPop2 is meticulously designed to offer music enthusiasts an 
                unparalleled sound experience, characterized by incredibly deep and 
                dynamic bass.
              </p>
            </div>

            <h2 className="section-title">Ratings and Reviews</h2>
            <div className="reviews-container">
              <div className="rating-summary">
                <div className="rating-score">
                  <span>{ratingData.average}</span>
                  <img src="/imgs/star.png" alt="Rating" />
                </div>
                <span>{ratingData.total} ratings</span>
              </div>

              <div className="rating-bars">
                {ratingData.distribution.map((item) => (
                  <div key={item.stars} className="rating-bar">
                    <span>{item.stars}</span>
                    <div className="bar-container">
                      <div 
                        className="bar-fill" 
                        style={{ width: `${item.width}px` }}
                      ></div>
                    </div>
                    <span>{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-rating">
                  <h3 className="review-title">{review.title}</h3>
                  <div className="review-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <img key={i} src="/imgs/star.png" alt="star" />
                    ))}
                  </div>
                </div>
                <p>{review.content}</p>
                <p>Reviewed by {review.author}</p>
              </div>
            ))}

            <h2 className="section-title">You May Also Like</h2>
            <div className="products-grid">
              {similarProducts.map((product) => (
                <article key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <img src="/imgs/heart.png" alt="Add to wishlist" className="wishlist-icon" />
                  </div>
                  <h2 className="product-title">{product.name}</h2>
                  <div className="product-details">
                    <div className="rating-price">
                      <div className="rating">
                        <img src="/imgs/star.png" className="rating-icon" alt="" />
                        <span>{product.rating} ({product.reviews} reviews)</span>
                      </div>
                      <span className="price">$ {product.price.toFixed(2)}</span>
                    </div>
                    <button className="cart-button" aria-label="Add to cart">
                      <img src="/imgs/cart.png" alt="" className="cart-icon" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

