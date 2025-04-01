import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Login_module.css';
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
    <div className="loginContainer">
      <div className="loginWrapper">
        <Header />
        <main className="mainContent">
          <div className="contentGrid">
            <section className="imageSection">
              <img src="/imgs/sign-up.png" alt="Login hero" className="heroImage" loading="lazy" />
            </section>

            <section className="formSection">
              <h1 className="formTitle">Log In</h1>
              
              <form className="loginForm" onSubmit={handleSubmit}>
                <div className="inputGroup">
                  <input
                    type="text"
                    placeholder="Username or Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="formInput"
                  />
                  <img src="/imgs/User.png" alt="" className="inputIcon" />
                </div>

                <div className="inputGroup">
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="formInput"
                  />
                  <img src="/imgs/Lock.png" alt="" className="inputIcon" />
                </div>

                <Link to="/user-account" className="submitButton">
                  Submit
                </Link>
              </form>

              <div className="divider">
                <span className="dividerLine" />
                <span className="dividerText">Or</span>
                <span className="dividerLine" />
              </div>

              <div className="socialLogin">
                <p className="socialText">Log in with</p>
                <div className="socialLoginIcons">
                  <img src="/imgs/Google.png" alt="Google login" className="socialIcon" loading="lazy" />
                  <img src="/imgs/Apple.png" alt="Apple login" className="socialIcon" loading="lazy" />
                </div>
              </div>

              <p className="loginLink">
                Don&apos;t have an account? <Link to="/signup" className="linkBlue">Sign up</Link>
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