import React from "react";
import './shop.css';


function Shop(){
    return (
    
        <section className="daily-deals-container">
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
                </div>
    
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
    
            
            <main class="main-grid">
            <div class="grid-container">
                <aside class="sidebar">
                <div class="sidebar-content">
                    <div class="categories-section">
                    <h2 class="categories-title">Categories</h2>
                    <div class="category-divider"></div>
                    <nav>
                        <ul>
                        <li><a href="#" class="category-item">Phones</a></li>
                        <li><a href="#" class="category-item">Computer</a></li>
                        <li><a href="#" class="category-item">Accessories</a></li>
                        <li><a href="#" class="category-item">Laptops</a></li>
                        <li><a href="#" class="category-item">Monitors</a></li>
                        <li><a href="#" class="category-item">Network</a></li>
                        <li><a href="#" class="category-item">PC Games</a></li>
                        <li><a href="#" class="category-item">Fashion</a></li>
                        </ul>
                    </nav>
                    </div>
                    <div class="price-section">
                    <h3 class="filter-title">Price Range</h3>
                    <div class="price-range-container">
                        <span class="price-range">100</span>
                        <span class="price-range-high">900</span>
                    </div>
                    <h3 class="brand-name">Brand Name</h3>
                    <select class="brand-select" aria-label="Select brand">
                        <option value="">All Brands</option>
                    </select>
                    <h3 class="sort-title">Sort by</h3>
                    <select class="sort-options">
                        <option value="">Reviews</option>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c32063b439701393fcb25a2af8d4d780164c8a6fe69ce2cc22ccea1ba33d95a1?placeholderIfAbsent=true&apiKey=2c9d54f744c4489ca7176332d686675c" class="select-icon" alt="" />
                    </select>
                    <h3 class="conditions-title">Conditions</h3>
                    <div class="condition-option">
                        <input type="checkbox" id="new" class="checkbox" />
                        <label for="new" class="condition-label">New</label>
                    </div>
                    <div class="condition-option">
                        <input type="checkbox" id="second" class="checkbox" />
                        <label for="second" class="condition-label">Second</label>
                    </div>
                    <div class="condition-option">
                        <input type="checkbox" id="refurbish" class="checkbox" />
                        <label for="refurbish" class="condition-label">Refurbish</label>
                    </div>
                    </div>
                </div>
                </aside>
                </div>
                </main>
            <section class="products-grid" id="product-list" aria-label="Product grid">

                  {/* Products will be dynamically inserted here  */}
                 
            </section>
        </section>
                    
    );
}

export default Shop;