import React from "react";
import './header.css';
import { Link } from "react-router-dom";

function Header(){
    return (
        <>
       <header className="header-section">
        <img src="/public/imgs/logo.png" alt="YannsTechHub Logo" className="logo" />
        <nav className="nav-buttons">
          <Link to="/daily-deals" className="nav-link">Daily deals</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/bundle_deals" className="nav-link">Bundle Deals</Link>
          <Link to="#support" className="nav-link">Support</Link>
        </nav>
        <div className="user-actions">
          <img src="/imgs/Search - 7.png" alt="Search" className="action-icon" />
            <img src="/imgs/Profile - 3.png" alt="User Account" className="action-icon" />
          <Link to="/cart">
              <img src="/imgs/Buy - 6 (1).png" alt="Shopping Cart" class="action-icon" />
            </Link>
          
        </div>
      </header> </>
    );
}

export default Header;