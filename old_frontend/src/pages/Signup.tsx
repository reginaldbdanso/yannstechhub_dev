import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';

const Signup: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <header className="header-section">
          <Link to="/">
            <img src="/src/assets/Logo.png" alt="YannsTechHub Logo" className="logo" />
          </Link>
          <nav className="nav-buttons">
            <Link to="/daily-deals" className="nav-link">Daily deals</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/bundle-deals" className="nav-link">Bundle Deals</Link>
            <Link to="/support" className="nav-link">Support</Link>
          </nav>
          <div className="user-actions">
            <img src="/src/assets/Search - 7.png" alt="Search" className="action-icon" />
            <Link to="/login">
              <img src="/src/assets/Profile - 3.png" alt="User Account" className="action-icon" />
            </Link>
            <Link to="/cart">
              <img src="/src/assets/Buy - 6 (1).png" alt="Shopping Cart" className="action-icon" />
            </Link>
          </div>
        </header>

        <main className="main-content">
          <div className="content-grid">
            <section className="image-section">
              <div className="image-container">
                <img
                  loading="lazy"
                  src="/src/assets/sign-up.png"
                  alt="Login illustration"
                  className="login-image"
                />
              </div>
            </section>

            <section className="form-section">
              <form className="signup-form" onSubmit={handleSubmit}>
                <h1 className="form-title">Create a new Account</h1>

                <input type="text" placeholder="Full name" className="form-input" />
                <input type="tel" placeholder="Phone Number" className="form-input" />

                <div className="username-field">
                  <input type="text" placeholder="Username" className="form-input" />
                  <img
                    loading="lazy"
                    src="/src/assets/User.png"
                    alt="Username icon"
                    className="field-icon"
                  />
                </div>
                <p className="field-note">*Can't change username</p>

                <div className="email-field">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                  />
                  <img
                    loading="lazy"
                    src="/src/assets/Gmail.png"
                    alt="Email icon"
                    className="field-icon"
                  />
                </div>

                <div className="password-field">
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="form-input"
                  />
                  <img
                    loading="lazy"
                    src="/src/assets/Lock.png"
                    alt="Password icon"
                    className="field-icon"
                  />
                </div>

                <div className="password-field">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="form-input"
                  />
                  <img
                    loading="lazy"
                    src="/src/assets/Lock.png"
                    alt="Password icon"
                    className="field-icon"
                  />
                </div>

                <button type="submit" className="submit-btn">Get Started</button>

                <div className="divider">
                  <span className="divider-line"></span>
                  <span className="divider-text">Or</span>
                  <span className="divider-line"></span>
                </div>

                <div className="social-login">
                  <p className="social-text">Create account with</p>
                  <div className="social-login-icons">
                    <img
                      loading="lazy"
                      src="/src/assets/Google.png"
                      alt="Google login"
                      className="social-icon"
                    />
                    <img
                      loading="lazy"
                      src="/src/assets/Apple.png"
                      alt="Apple login"
                      className="social-icon"
                    />
                  </div>
                </div>

                <p className="login-link">
                  Already have an account? <Link to="/login" className="link-text">Log in</Link>
                </p>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Signup;