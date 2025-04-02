import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/SignUp.module.css';
import Header from './Header';
import Footer from './Footer';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <Header />
        <main className={styles.mainContent}>
          <div className={styles.contentGrid}>
            <section className={styles.imageSection}>
              <img src="/imgs/sign-up.png" alt="Login hero image" className={styles.heroImage} loading="lazy" />
            </section>

            <section className={styles.formSection}>
              <h1 className={styles.formTitle}>Create a new Account</h1>
              
              <form className={styles.signupForm} onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={styles.formInput}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={styles.formInput}
                />
                
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                  <img src="/imgs/User.png" alt="Username icon" className={styles.inputIcon} loading="lazy" />
                </div>
                <p className={styles.usernameNote}>*Can&apos;t change username</p>
                
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                  <img src="/imgs/Gmail.png" alt="Email icon" className={styles.inputIcon} loading="lazy" />
                </div>
                
                <div className={styles.inputGroup}>
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                  <img src="/imgs/Lock.png" alt="Password icon" className={styles.inputIcon} loading="lazy" />
                </div>
                
                <div className={styles.inputGroup}>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                  <img src="/imgs/Lock.png" alt="Password icon" className={styles.inputIcon} loading="lazy" />
                </div>
                
                <Link to="/login" className={styles.submitButton}>Get Started</Link>
              </form>

              <div className={styles.divider}>
                <span className={styles.dividerLine} />
                <span className={styles.dividerText}>Or</span>
                <span className={styles.dividerLine} />
              </div>

              <div className={styles.socialLogin}>
                <p className={styles.socialText}>Create account with</p>
                <div className={styles.socialLoginIcons}>
                  <img src="/imgs/Google.png" alt="Google login" className={styles.socialIcon} loading="lazy" />
                  <img src="/imgs/Apple.png" alt="Apple login" className={styles.socialIcon} loading="lazy" />
                </div>
              </div>

              <p className={styles.loginLink}>
                Already have an account? <Link to="/login" className={styles.linkBlue}>Log in</Link>
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;