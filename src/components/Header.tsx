import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/components/Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/imgs/Logo.png" alt="YannsTechHub Logo" className={styles.logo} />
      </Link>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <Link to="/daily-deals" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          Daily deals
        </Link>
        <Link to="/shop" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          Shop
        </Link>
        <Link to="/bundle-deals" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          Bundle Deals
        </Link>
        <Link to="/support" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          Support
        </Link>
      </nav>

      <div className={styles.userActions}>
        <img src="/imgs/Search - 7.png" alt="Search" className={styles.actionIcon} />
        <Link to="/login">
          <img src="/imgs/Profile - 3.png" alt="User Account" className={styles.actionIcon} />
        </Link>
        <Link to="/cart" className={styles.cartWrapper}>
          <img src="/imgs/Buy - 6 (1).png" alt="Shopping Cart" className={styles.actionIcon} />
          {cartCount > 0 && (
            <span className={styles.cartNotification}>{cartCount}</span>
          )}
        </Link>
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
        </button>
      </div>
    </header>
  );
};

export default Header;