import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/AddressEdit.css';

const AddressEdit: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    isDefault: false,
    state: '',
    city: '',
    district: '',
    address1: '',
    address2: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add your API call here
      navigate('/account/address');
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };

  return (
    <main className="form-container">
      <h1 className="form-title">Shipping Address</h1>

      <form className="shipping-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-input"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-checkbox">
          <input
            type="checkbox"
            id="default"
            name="isDefault"
            className="checkbox-input"
            checked={formData.isDefault}
            onChange={handleChange}
          />
          <label htmlFor="default" className="checkbox-label">Set as default</label>
        </div>

        <div className="form-group">
          <label>State/Province</label>
          <input
            type="text"
            name="state"
            className="form-input"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              className="form-input"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>District</label>
            <input
              type="text"
              name="district"
              className="form-input"
              value={formData.district}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group address-group">
          <label>Address</label>
          <input
            type="text"
            name="address1"
            className="form-input"
            placeholder="Street, Apartment, Suite, etc."
            value={formData.address1}
            onChange={handleChange}
          />
          <p className="helper-text">
            Detailed street address can help our rider find you quickly.
          </p>
        </div>

        <div className="form-group">
          <label>Address 2</label>
          <input
            type="text"
            name="address2"
            className="form-input"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">Save Edit</button>
      </form>
    </main>
  );
};

export default AddressEdit;