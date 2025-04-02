import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Cart_module.css';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '../context/CartContext';
import Toast from './Toast';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, showToast, toastMessage, setShowToast } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="mainContent">
          <Header />
          <div className="dividerTop" />
          <div className="breadcrumbSort">
            <div className="breadcrumb">
              <span className="breadcrumbItemBold">yannstechub</span>
              <span className="breadcrumbItem">/ Cart</span>
            </div>
          </div>
          <div className="dividerNormal" />
          <div className="emptyCartContainer">
            <img 
              src="/imgs/cart.png" 
              alt="Empty cart" 
              className="emptyCartImage"
            />
            <h2 className="emptyCartTitle">
              Your cart is empty
            </h2>
            <p className="emptyCartMessage">
              Looks like you haven&apos;t added anything to your cart yet
            </p>
            <Link to="/" className="continueShoppingButton">
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleCheckout = () => {
    navigate('/shipping-address');
  };

  return (
    <div className="container">
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <div className="mainContent">
        <Header />
        <div className="dividerTop" />
        <div className="breadcrumbSort">
          <div className="breadcrumb">
            <span className="breadcrumbItemBold">yannstechub</span>
            <span className="breadcrumbItem">/ Cart</span>
          </div>
        </div>
        <div className="dividerNormal" />
        <div className="cartContainer">
          <h1 className="cartHeader">Your Cart</h1>
          <Link to="/" className="continueShopping">Continue Shopping</Link>
          <div className="cartSummary">
            <div>Product</div>
            <div className="cartSummaryColumn">
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="cartItemWrapper">
              <div className="cartItemContent">
                <img src={item.image} alt={item.title} className="productImage" />
                <div className="productDescription">{item.title}</div>
              </div>
              <div className="productDetails">
                <div className="productPrice">${item.price.toFixed(2)}</div>
                <div className="quantitySelector">
                  <button className="quantityButton" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="quantityButton" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <div className="productPrice">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
              <img
                src="/imgs/close.png"
                alt="Remove item"
                onClick={() => removeFromCart(item.id)}
                className="removeIcon"
                loading="lazy"
              />
            </div>
          ))}
          <div className="subTotal">
            <div className="subtotalSection" />
            <div className="subtotalContainer">
              <div className="subtotalLabel">Subtotal</div>
              <div className="subtotalAmount">${subtotal.toFixed(2)}</div>
            </div>
            <div className="checkoutDivider" />
            <div className="taxShippingInfo">
              Tax included and shipping calculated at checkout
            </div>
            <button onClick={handleCheckout} className="checkoutButton">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;