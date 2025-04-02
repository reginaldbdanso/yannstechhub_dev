import React, { useState } from 'react';
import  '../styles/components/SecureCheckout_module.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '../context/CartContext';



// interface CartItem {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
//   quantity: number;
// } removeFromCart not used

const SecureCheckout: React.FC = () => {
  const { cart, updateQuantity, subtotal } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    state: '',
    city: '',
    district: '',
    address1: '',
    address2: '',
    phone: '',
    isDefaultAddress: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add form validation here
    navigate('/shipping-details'); // Navigate to shipping details page
  };

  return (
    <div className="secure-checkout-page">
      <div className="main-contents">
        <Header />
        <div className="divider-top" />

        <div className="breadcrumb-sort">
          <div className="breadcrumb">
            <div className="breadcrumb-item y">yannstechub</div>
            <div className="breadcrumb-item">/ Daily deals</div>
          </div>
        </div>

        <div className="divider" />

        <div className="checkout-content">
          <div className="shipping-section">
            <div className="section-title">Shipping Address</div>
            <form className="shipping-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="default-address"
                  name="isDefaultAddress"
                  checked={formData.isDefaultAddress}
                  onChange={handleInputChange}
                />
                <label htmlFor="default-address">Set as default</label>
              </div>

              <div className="form-group">
                <label>State/Province</label>
                <input
                  className="form-input"
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input
                    className="form-input"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>District</label>
                  <input
                    className="form-input"
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  className="form-input"
                  type="text"
                  name="address1"
                  value={formData.address1}
                  onChange={handleInputChange}
                  placeholder="Street, Apartment, Suite, etc."
                />
                <div className="helper-text">
                  Detailed street address can help our rider find you quickly.
                </div>
              </div>

              <div className="form-group">
                <label>Address 2</label>
                <input
                  className="form-input"
                  type="text"
                  name="address2"
                  value={formData.address2}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Phone number</label>
                <input
                  className="form-input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <button className="checkout-button" type="submit">
                Proceed to checkout
              </button>
            </form>
          </div>
          <div className="order-summary">
            <div className="summary-container">
              <div className="summary-header">
                <h2>My Order Summary</h2>
                <button onClick={() => navigate('/cart')}>Edit</button>
              </div>
              <div className="order-items">
                {cart.map((item) => (
                  <div className="order-item" key={item.id}>
                    <img className="item-image" src={item.image} alt={item.title} />
                    <div className="item-details">
                      <div className="item-title">{item.title}</div>
                      <div className="item-price">${item.price.toFixed(2)}</div>
                      <div className="quantity-control">
                        <button className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total-section">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="total-row">
                  <span>Total</span>
                  <span>${(subtotal + 5).toFixed(2)}</span>
                </div>
                <div className="shipping-info">
                  Shipping costs are calculated based on your location
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default SecureCheckout;