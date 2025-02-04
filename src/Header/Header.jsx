import React from "react";
import './header.css';
import { Link } from "react-router-dom";

function Header(){
    return (
        <>
       <header class="header-section">
        <img src="public/imgs/logo.png" alt="YannsTechHub Logo" class="logo" />
        <nav class="nav-buttons">
          <Link to="daily-deals-section.html" class="nav-link">Daily deals</Link>
          <Link to="shop-section.html" class="nav-link">Shop</Link>
          <Link to="bundle-deals.html" class="nav-link">Bundle Deals</Link>
          <Link to="#support" class="nav-link">Support</Link>
        </nav>
        <div class="user-actions">
          <img src="public/imgs/Search - 7.png" alt="Search" class="action-icon" />
          <img src="public/imgs/Profile - 3.png" alt="User Account" class="action-icon" />
          
        </div>
      </header> </>
    );
}

export default Header;