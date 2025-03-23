import React, { useState } from 'react';
import  '../styles/components/ShippingAddress.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Header from './Header';
import Footer from './Footer';


const ShippingAddress: React.FC = () => {
  
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  stateProvince: string;
  city: string;
  district: string;
  address: string;
  address2: string;
  phoneNumber: string;
  setAsDefault: boolean;
}

const navigate = useNavigate();
const [formData, setFormData] = useState<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  stateProvince: '',
  city: '',
  district: '',
  address: '',
  address2: '',
  phoneNumber: '',
  setAsDefault: false,
});

  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const shipping = 5.00;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/shipping-details');
  };

  return (
    <div className="secure-checkout">
      <div className="main-contents">
        <Header />
        <div className="divider-top" />
        <div className="breadcrumb-sort">
          <div className="breadcrumb">
            <div className="breadcrumb-item breadcrumb-item-bold">yannstechub</div>
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
                    required
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
                    required
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
                  required
                />
              </div>

              <div className="form-checkbox">
                <input 
                  type="checkbox" 
                  id="default-address"
                  name="setAsDefault"
                  checked={formData.setAsDefault}
                  onChange={handleInputChange}
                />
                <label htmlFor="default-address">Set as default</label>
              </div>

              <div className="form-group">
                <label>State/Province</label>
                <input 
                  className="form-input"
                  type="text" 
                  name="stateProvince"
                  value={formData.stateProvince}
                  onChange={handleInputChange}
                  required
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
                    required
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
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Address</label>
                <input 
                  className="form-input"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street, Apartment, Suite, etc."
                  required
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
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </form>
          </div>

          <div className="order-summary">
            <div className="summary-container">
              <div className="summary-header">
                <span>Order Summary</span>
                <span>{cart.length} items</span>
              </div>

              <div className="order-items">
                {cart.map((item) => (
                  <React.Fragment key={item.id}>
                    <div className="order-item">
                      <img
                        className="remove-icon"
                        src="/imgs/close.png"
                        alt="Remove"
                        onClick={() => removeFromCart(item.id)}
                      />
                      <div className="first-item">
                        <img
                          className="item-image"
                          src={item.image}
                          alt={item.title}
                        />
                        <div className="item-title">{item.title}</div>
                      </div>
                      <div className="item-details">
                        <div className="item-price">${item.price.toFixed(2)}</div>
                        <div className="quantity-control">
                          <button className="quantity-button" onClick={() => updateQuantity(item.id, -1)}>-</button>
                          <span>{item.quantity}</span>
                          <button className="quantity-button" onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                        <div className="item-total-price">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="item-divider" />
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="total-summary">
              <div className="summary-grid">
                <div className="summary-labels">
                  <p>Cart Summary</p>
                  <p>Shipping</p>
                  <p className="total-label">Total</p>
                </div>
                <div className="summary-values">
                  <p>${subtotal.toFixed(2)}</p>
                  <p>${shipping.toFixed(2)}</p>
                  <p className="total-value">${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <Link className="checkout-button" to="/shipping-details">
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingAddress;