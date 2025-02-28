import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(import.meta.env.VITE_LOGIN_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token or user data in localStorage/state management
        localStorage.setItem('token', data.token);
        navigate('/dashboard'); // Redirect to dashboard or home page
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="form">
        <main className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-title">Log In</h1>
            

            <div className="input-group">
              <input
                type="text"
                placeholder="Username or Email"
                className="login-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <img
                loading="lazy"
                src="/src/assets/User.png"
                alt=""
                className="input-icon"
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Enter password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img
                loading="lazy"
                src="/src/assets/Lock.png"
                alt=""
                className="input-icon"
              />
            </div>

            <button type="submit" className="submit-button">Submit</button>
            {error && <div className="error-message">{error}</div>}

            <div className="form-footer">
              <p className="signup-text">
                Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
              </p>
              <Link to="/forgot-password" className="forgot-password">Forget password Reset</Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;