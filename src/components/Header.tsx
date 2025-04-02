import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/components/Header_module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="header">
      <Link to="/">
        <img src="/imgs/Logo.png" alt="YannsTechHub Logo" className="logo" />
      </Link>

      <nav className={`nav ${isMenuOpen ? "navOpen" : ''}`}>
        <Link to="/daily-deals" className="navLink" onClick={() => setIsMenuOpen(false)}>
          Daily deals
        </Link>
        <Link to="/shop" className="navLink" onClick={() => setIsMenuOpen(false)}>
          Shop
        </Link>
        <Link to="/bundle-deals" className="navLink" onClick={() => setIsMenuOpen(false)}>
          Bundle Deals
        </Link>
        <Link to="/support" className="navLink" onClick={() => setIsMenuOpen(false)}>
          Support
        </Link>
      </nav>

      <div className="userActions">
        <img src="/imgs/Search - 7.png" alt="Search" className="actionIcon" />
        <Link to="/login">
          <img src="/imgs/Profile - 3.png" alt="User Account" className="actionIcon" />
        </Link>
        <Link to="/cart" className="cartWrapper">
          <img src="/imgs/cart.png" alt="Shopping Cart" className="actionIcon" />
          {cartCount > 0 && (
            <span className="cartNotification">{cartCount}</span>
          )}
        </Link>
        <button 
          className={`hamburger ${isMenuOpen ? "hamburgerOpen" : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="hamburgerLine" />
          <div className="hamburgerLine" />
          <div className="hamburgerLine" />
        </button>
      </div>
    </header>
  );
};

export default Header;