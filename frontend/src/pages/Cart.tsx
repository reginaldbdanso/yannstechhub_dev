import { useEffect, useState } from 'react';
import '../styles/Cart.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : [];
    setCart(storedCart);
    updateSubtotal();
  }, []);

  const updateSubtotal = () => {
    const totalElements = document.querySelectorAll("[id^='total-price-']")
    let subtotal = 0;
    
    totalElements.forEach(el => {
      let price = parseFloat((el as HTMLElement).innerText.replace('$', '').trim());
      subtotal += price;
    });

    const subtotalElement = document.getElementById("subtotal");
    if (subtotalElement) {
      subtotalElement.innerText = subtotal.toFixed(2);
    }
  };

  const increaseQuantity = (index: number, price: number) => {
    const quantitySpan = document.getElementById(`quantity-${index}`);
    const totalPriceElement = document.getElementById(`total-price-${index}`);
    
    if (!quantitySpan || !totalPriceElement) return;
    
    let quantity = parseInt(quantitySpan.innerText);
    quantity += 1;
    
    quantitySpan.innerText = quantity.toString();
    totalPriceElement.innerText = `$${(quantity * price).toFixed(2)}`;

    updateSubtotal();
  };

  const decreaseQuantity = (index: number, price: number) => {
    const quantitySpan = document.getElementById(`quantity-${index}`);
    const totalPriceElement = document.getElementById(`total-price-${index}`);
    
    if (!quantitySpan || !totalPriceElement) return;
    
    let quantity = parseInt(quantitySpan.innerText);
    if (quantity > 1) {
      quantity -= 1;
    }

    quantitySpan.innerText = quantity.toString();
    totalPriceElement.innerText = `$${(quantity * price).toFixed(2)}`;

    updateSubtotal();
  };

  const removeFromCart = (index: number) => {
    let updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateSubtotal();
  };

  return (
    <div className="charts">
      <div className="main-content">

        <div className="divider-top"></div>

        <div className="breadcrumb-sort">
          <div className="breadcrumb">
            <span className="breadcrumb-item y">yannstechub</span>
            <span className="breadcrumb-item">/ Daily deals</span>
          </div>
          <div className="sort-container">
            <label htmlFor="sortSelect" className="sort-label">Sort by</label>
            <select className="sort-Select" id="sortSelect" aria-label="Sort products">
              <option value="">Recommended</option>
              <option value="">Best Sellers</option>
              <option value="">Low Price</option>
              <option value="">High Price</option>
              <option value="">Reviews</option>
            </select>
          </div>
        </div>

        <div className="divider"></div>

        <div className="cart-container">
          <div className="cart-header">Your Cart</div>
          <div className="continue-shopping">Continue Shopping</div>
          <div className="cart-summary">
            <div>Product</div>
            <div className="cart-summary-column">
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
          </div>
          
          <div id="cart-items">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div className="cart-item-content">
                    <img loading="lazy" src={item.imageUrl} alt={item.name} className="product-image" />
                    <div className="product-description">{item.name}</div>
                  </div>
                  <div className="product-details">
                    <div className="product-price">${item.price}</div>
                    <div className="quantity-selector">
                      <button className="quantity-btn" onClick={() => decreaseQuantity(index, item.price)}>-</button>
                      <span id={`quantity-${index}`}>1</span>
                      <button className="quantity-btn" onClick={() => increaseQuantity(index, item.price)}>+</button>
                    </div>
                    <div className="product-total-price">$<span id={`total-price-${index}`}>{item.price}</span></div>
                  </div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c3be999d09cf21075541454471ef4c10a595c4192cb055c995ccc9c2ffe1092?placeholderIfAbsent=true&apiKey=2c9d54f744c4489ca7176332d686675c" className="remove-icon" onClick={() => removeFromCart(index)} alt="Remove item icon" />
                </div>
              ))
            )}
          </div>
          
          <div className="subtotal-section"></div>
          <div className="subtotal-container" id="subtotal-container">
            <div className="subtotal-label">Subtotal</div>
            <div className="subtotal-amount">$<span id="subtotal">0.00</span></div>
          </div>
          <div className="checkout-divider"></div>
          <div className="tax-shipping-info">Tax included and shipping calculated at checkout</div>
          <div className="checkout-button" tabIndex={0} role="button"><a href="secure-checkout.html">Proceed to checkout</a></div>
        </div>
      </div>

      
    </div>
  );
};

export default Cart;
