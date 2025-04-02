import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/components/Login.module.css';
import Header from './Header';
import Footer from './Footer';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { username });
    navigate('/dashboard');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <Header />
        <main className={styles.mainContent}>
          <div className={styles.contentGrid}>
            <section className={styles.imageSection}>
              <img src="/imgs/sign-up.png" alt="Login hero" className={styles.heroImage} loading="lazy" />
            </section>

            <section className={styles.formSection}>
              <h1 className={styles.formTitle}>Log In</h1>
              
              <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Username or Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.formInput}
                  />
                  <img src="/imgs/User.png" alt="" className={styles.inputIcon} />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.formInput}
                  />
                  <img src="/imgs/Lock.png" alt="" className={styles.inputIcon} />
                </div>

                <Link to="/user-account" className={styles.submitButton}>
                  Submit
                </Link>
              </form>

              <div className={styles.divider}>
                <span className={styles.dividerLine} />
                <span className={styles.dividerText}>Or</span>
                <span className={styles.dividerLine} />
              </div>

              <div className={styles.socialLogin}>
                <p className={styles.socialText}>Log in with</p>
                <div className={styles.socialLoginIcons}>
                  <img src="/imgs/Google.png" alt="Google login" className={styles.socialIcon} loading="lazy" />
                  <img src="/imgs/Apple.png" alt="Apple login" className={styles.socialIcon} loading="lazy" />
                </div>
              </div>

              <p className={styles.loginLink}>
                Don&apos;t have an account? <Link to="/signup" className={styles.linkBlue}>Sign up</Link>
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Login;