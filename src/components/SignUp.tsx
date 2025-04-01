import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/SignUp_module.css';
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
    <div className="loginContainer">
      <div className="loginWrapper">
        <Header />
        <main className="mainContent">
          <div className="contentGrid">
            <section className="imageSection">
              <img src="/imgs/sign-up.png" alt="Login hero image" className="heroImage" loading="lazy" />
            </section>

            <section className="formSection">
              <h1 className="formTitle">Create a new Account</h1>
              
              <form className="signupForm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="formInput"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="formInput"
                />
                
                <div className="inputGroup">
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="formInput"
                  />
                  <img src="/imgs/User.png" alt="Username icon" className="inputIcon" loading="lazy" />
                </div>
                <p className="usernameNote">*Can&apos;t change username</p>
                
                <div className="inputGroup">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="formInput"
                  />
                  <img src="/imgs/Gmail.png" alt="Email icon" className="inputIcon" loading="lazy" />
                </div>
                
                <div className="inputGroup">
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="formInput"
                  />
                  <img src="/imgs/Lock.png" alt="Password icon" className="inputIcon" loading="lazy" />
                </div>
                
                <div className="inputGroup">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="formInput"
                  />
                  <img src="/imgs/Lock.png" alt="Password icon" className="inputIcon" loading="lazy" />
                </div>
                
                <Link to="/login" className="submitButton">Get Started</Link>
              </form>

              <div className="divider">
                <span className="dividerLine" />
                <span className="dividerText">Or</span>
                <span className="dividerLine" />
              </div>

              <div className="socialLogin">
                <p className="socialText">Create account with</p>
                <div className="socialLoginIcons">
                  <img src="/imgs/Google.png" alt="Google login" className="socialIcon" loading="lazy" />
                  <img src="/imgs/Apple.png" alt="Apple login" className="socialIcon" loading="lazy" />
                </div>
              </div>

              <p className="loginLink">
                Already have an account? <Link to="/login" className="linkBlue">Log in</Link>
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