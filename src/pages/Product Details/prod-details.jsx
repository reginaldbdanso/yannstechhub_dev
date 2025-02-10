import React from "react";
import { useLocation } from "react-router-dom";

function Product_details() {
    
    return (
        <section class="daily-deals-container">
            <div class="main-content">
                <header class="header-section">
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
                        <img src="imgs/Buy - 6 (1).png" alt="Shopping Cart" class="action-icon" />
                    </div>
                </header>

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

                <div class="product-container">
                    <div class="product-wrapper">
                        <div class="product-content">
                            <div class="product-gallery">
                                <div class="main-image-wrapper">
                                    <img id="product-image" src="" alt="Main Product" class="main-product-image" />
                                    <div class="thumbnail-gallery">
                                        <img src="imgs/Rectangle 11.png" alt="Thumbnail 1" class="thumbnail" />
                                        <img src="imgs/Rectangle 17.png" alt="Thumbnail 2" class="thumbnail" />
                                        <img src="imgs/Rectangle 15.png" alt="Thumbnail 3" class="thumbnail" />
                                        <img src="imgs/Rectangle 10.png" alt="Thumbnail 4" class="thumbnail" />
                                    </div>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="info-container">
                                    <div class="product-detail">
                                        <h1 class="product-title" id="product-name"></h1>
                                        <div class="rating-wrapper">
                                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d05389f4cec6dd226fa4948dd7647b8772ce41b4391b6dd9579b8d8c1bc0c2c?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" class="rating-icon" loading="lazy" />
                                            <span>5.0 (58 reviews)</span>
                                        </div>
                                        <div class="price" id="product-price"></div>
                                        <div class="quantity-label">Quantity</div>
                                        <div class="feature-list">
                                            <div class="feature-item">Powerful Bass</div>
                                            <div class="feature-item">60-hr-Playtime</div>
                                            <div class="feature-item">AniFast™ Fast Charging</div>
                                            <div class="feature-item">ENC HD Voice in Calls</div>
                                        </div>
                                    </div>
                                    <div class="action-buttons">
               
                                        <button class="btn btn-primary"> <a href="bundle-deals.html">Continue Shopping</a></button>
                
                                        <button class="btn btn-secondary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="content-section">
                        <h2 class="section-title">Description</h2>
                        <div class="specs-list">
                            BT Version: 5.2<br />
                            BT Range: ≥10m<br />
                            Speaker Diameter: 40mm<br />
                            Playtime: Up to 60 hours<br />
                            Charging Time: 1.5 hours<br />
                            Supported Format: Mic support / Aux in Mode / Type-C<br />
                            Model:OHP-610
                        </div>
      
                        <div class="feature-description">
                            <strong>Powerful Deep Bass <br/>
                                Hits You in Waves
                            </strong><br />
                            Powered by advanced 40mm drivers and exclusive HavyBassTM technology, BoomPop2 is meticulously designed to offer music enthusiasts an unparalleled sound experience, characterized by incredibly deep and dynamic bass.
                        </div>

                        <div class="feature-description">
                            <strong>Powerful Deep Bass <br/>
                                Hits You in Waves
                            </strong><br />
                            Powered by advanced 40mm drivers and exclusive HavyBassTM technology, BoomPop2 is meticulously designed to offer music enthusiasts an unparalleled sound experience, characterized by incredibly deep and dynamic bass.
                        </div>
      
                        <h2 class="section-title">Ratings and Reviews</h2>
                        <div class="reviews-container">
                            <div class="rating-summary">
                                <div class="rating-score">
                                    <span>5.0</span>
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                </div>
                                <span>5489 ratings</span>
                            </div>
      
                            <div class="rating-bars">
                                <div class="rating-bar">
                                    <span>5</span>
                                    <div class="bar-container">
                                        <div class="bar-fill" style="width: 320px"></div>
                                    </div>
                                    <span>3321</span>
                                </div>
                                <div class="rating-bar">
                                    <span>4</span>
                                    <div class="bar-container">
                                        <div class="bar-fill" style="width: 100px"></div>
                                    </div>
                                    <span>3321</span>
                                </div>
                                <div class="rating-bar">
                                    <span>3</span>
                                    <div class="bar-container">
                                        <div class="bar-fill" style="width: 280px"></div>
                                    </div>
                                    <span>3321</span>
                                </div>
                                <div class="rating-bar">
                                    <span>2</span>
                                    <div class="bar-container">
                                        <div class="bar-fill" style="width: 250px"></div>
                                    </div>
                                    <span>3321</span>
                                </div>
                                <div class="rating-bar">
                                    <span>1</span>
                                    <div class="bar-container">
                                        <div class="bar-fill" style="width: 20px"></div>
                                    </div>
                                    <span>3321</span>
                                </div>
                                {/* <!-- Rating bars 4-1 follow same structure --> */}
                            </div>
                            <div>
                                <h2>Rating This Product</h2>
                                <p>Lorem ipsum dolor sit amet </p>
                            </div>
                        </div>
    
                        <div class="review-card">
                            <div class="review-rating">
                                <h3 class="review-title">Super impressive</h3>
                                <div class="review-stars">
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                </div>
                            </div>
                            <p>The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.</p>
                            <p>Reviewed by Sweetie Baiden</p>
                        </div>
                        <div class="review-card">
                            <div class="review-rating">
                                <h3 class="review-title">Super impressive</h3>
                                <div class="review-stars">
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                </div>
                            </div>
                            <p>The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.</p>
                            <p>Reviewed by Sweetie Baiden</p>
                        </div>
                        <div class="review-card">
                            <div class="review-rating">
                                <h3 class="review-title">Super impressive</h3>
                                <div class="review-stars">
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                </div>
                            </div>
                            <p>The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.</p>
                            <p>Reviewed by Sweetie Baiden</p>
                        </div>
                        <div class="review-card">
                            <div class="review-rating">
                                <h3 class="review-title">Super impressive</h3>
                                <div class="review-stars">
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" />
                                </div>
                            </div>
                            <p>The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.</p>
                            <p>Reviewed by Sweetie Baiden</p>
                        </div>
                        <div class="review-card">
                            <div class="review-rating">
                                <h3 class="review-title">Super impressive</h3>
                                <div class="review-stars">
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" class="thumbnail" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" class="thumbnail" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" class="thumbnail" />
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2acca7b2873113969da49e35288df2e45a46f330b7c030c51f068b05a5b8a557?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Rating stars" loading="lazy" class="thumbnail" />
                                </div>
                            </div>
                            <p>The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.</p>
                            <p>Reviewed by Sweetie Baiden</p>
                        </div>
    
                        {/* <!-- Additional review cards follow same structure --> */}
    
                        <h2 class="section-title">You May Also Like</h2>
                        <div class="products-grid">
                            <article class="product-card">
                                <div class="product-image-container">
                                    <img src="imgs/Rectangle 62.png" alt="Product 1" class="product-image" />
                                    <img src="imgs/favorie 1.png" alt="Add to wishlist" class="wishlist-icon" />
                                </div>
                                <h2 class="product-title">Lorem ipsum dolor</h2>
                                <div class="product-details">
                                    <div class="rating-price">
                                        <div class="rating">
                                            <img src="imgs/star 1.png" class="rating-icon" />
                                            <span>5.0 (58 reviews)</span>
                                        </div>
                                        <span class="price">$ 50.00</span>
                                    </div>
                                    <button class="cart-button" aria-label="Add to cart">
                                        <img src="imgs/Buy - 6.png" alt="" class="cart-icon"/>
                                    </button>
                                </div>
                            </article>
                            <article class="product-card">
                                <div class="product-image-container">
                                    <img src="imgs/Rectangle 62.png" alt="Product 1" class="product-image" />
                                    <img src="imgs/favorie 1.png" alt="Add to wishlist" class="wishlist-icon" />
                                </div>
                                <h2 class="product-title">Lorem ipsum dolor</h2>
                                <div class="product-details">
                                    <div class="rating-price">
                                        <div class="rating">
                                            <img src="imgs/star 1.png" class="rating-icon" />
                                            <span>5.0 (58 reviews)</span>
                                        </div>
                                        <span class="price">$ 50.00</span>
                                    </div>
                                    <button class="cart-button" aria-label="Add to cart">
                                        <img src="imgs/Buy - 6.png" alt="" class="cart-icon"/>
                                    </button>
                                </div>
                            </article>
                            <article class="product-card">
                                <div class="product-image-container">
                                    <img src="imgs/Rectangle 62.png" alt="Product 1" class="product-image" />
                                    <img src="imgs/favorie 1.png" alt="Add to wishlist" class="wishlist-icon" />
                                </div>
                                <h2 class="product-title">Lorem ipsum dolor</h2>
                                <div class="product-details">
                                    <div class="rating-price">
                                        <div class="rating">
                                            <img src="imgs/star 1.png" class="rating-icon" />
                                            <span>5.0 (58 reviews)</span>
                                        </div>
                                        <span class="price">$ 50.00</span>
                                    </div>
                                    <button class="cart-button" aria-label="Add to cart">
                                        <img src="imgs/Buy - 6.png" alt="" class="cart-icon"/>
                                    </button>
                                </div>
                            </article>
                            <article class="product-card">
                                <div class="product-image-container">
                                    <img src="imgs/Rectangle 62.png" alt="Product 1" class="product-image" />
                                    <img src="imgs/favorie 1.png" alt="Add to wishlist" class="wishlist-icon" />
                                </div>
                                <h2 class="product-title">Lorem ipsum dolor</h2>
                                <div class="product-details">
                                    <div class="rating-price">
                                        <div class="rating">
                                            <img src="imgs/star 1.png" class="rating-icon" />
                                            <span>5.0 (58 reviews)</span>
                                        </div>
                                        <span class="price">$ 50.00</span>
                                    </div>
                                    <button class="cart-button" aria-label="Add to cart">
                                        <img src="imgs/Buy - 6.png" alt="" class="cart-icon"/>
                                    </button>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
  
            <footer class="footer">
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
            </footer>

        </section>
    );
}

export default Product_details;