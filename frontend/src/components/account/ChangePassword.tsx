import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ChangePassword.css';

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Add your API call here
      navigate('/account');
    } catch (error) {
      console.error('Error changing password:', error);
      setError('Failed to change password. Please try again.');
    }
  };

  return (
    <main className="form-container">
      <div className="form-group">
        <label className="form-label">Email</label>
        <div className="input-wrapper">
          <p className="email-display">Clopy01@gmail.com</p>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label className="form-label">Current password</label>
        <input
          type="password"
          name="currentPassword"
          className="form-input"
          value={formData.currentPassword}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">New password</label>
        <input
          type="password"
          name="newPassword"
          className="form-input"
          value={formData.newPassword}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          className="form-input"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <button className="save-button" onClick={handleSubmit}>Save</button>
    </main>
  );
};

export default ChangePassword;