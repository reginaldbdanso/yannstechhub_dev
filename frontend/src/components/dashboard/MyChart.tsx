import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart, CartItem } from '../../context/CartContext';

const CartSummary = styled.div`
  display: flex;
  width: 100%;
  max-width: 75%;
  gap: 25px;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px 0 0 50px;

  @media (max-width: 991px) {
    display: none;
  }
`;

const CartSummaryColumn = styled.div`
  display: flex;
  gap: 40px 120px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const CartItemWrapper = styled.div`
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  margin-top: 18px;
  width: 100%;
  align-items: center;
  gap: 20px;
  font-size: 15px;
  justify-content: space-between;
  padding: 15px 0px;

  @media (max-width: 991px) {
    align-self: center;
  }
`;

const CartItemContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding-left: 30px;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding-left: 10px;
  }
`;

const ProductImage = styled.img`
  aspect-ratio: 1.06;
  object-fit: contain;
  object-position: center;
  width: 89px;
  border-radius: 10px;
`;

const ProductDescription = styled.div`
  flex-basis: auto;
  margin: auto 0;
`;

const ProductDetails = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 40px 74px;
  white-space: nowrap;
  margin: auto 0;

  @media (max-width: 991px) {
    flex-direction: column;
    white-space: initial;
    gap: 20px 5px;
  }
`;

const ProductPrice = styled.div`
  align-self: stretch;
  margin: auto 0;

  @media (max-width: 991px) {
    text-align: center;
  }
`;

const QuantitySelector = styled.div`
  border-radius: 10px;
  align-self: stretch;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid rgba(228, 228, 228, 1);
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  color: #000;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: black;
    color: #fff;
  }
`;

const RemoveIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 19px;
  align-self: stretch;
  margin-right: 5%;
  cursor: pointer;
`;

const SubTotal = styled.div`
  align-self: end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  max-width: 551px;

  @media (max-width: 991px) {
    align-items: center;
    padding: 0 20px;
  }
`;

const SubtotalSection = styled.div`
  width: 100%;
  max-width: 551px;
  height: 1px;
  border: 1px solid #d5d5d5;
  margin-top: 36px;
`;

const SubtotalContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 324px;
  gap: 20px;
  justify-content: space-between;
  margin: 23px 0;
  padding-right: 20px;

  @media (max-width: 991px) {
    padding-right: 0;
  }
`;

const SubtotalLabel = styled.div`
  font-size: 15px;
`;

const SubtotalAmount = styled.div`
  font-size: 25px;
`;

const CheckoutDivider = styled.div`
  width: 100%;
  max-width: 551px;
  height: 1px;
  border: 1px solid #d5d5d5;
`;

const TaxShippingInfo = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0;
  text-align: right;
  width: 100%;
  max-width: 424px;

  @media (max-width: 991px) {
    text-align: center;
  }
`;

const CheckoutButton = styled(Link)`
  border-radius: 30px;
  background-color: rgba(0, 85, 182, 1);
  margin-top: 32px;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  color: #fff;
  padding: 19px 150px;
  cursor: pointer;
  width: fit-content;

  @media (max-width: 991px) {
    padding: 15px 50px;
    align-self: center;
  }
`;

const MyChart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 20px',
        textAlign: 'center'
      }}>
        <img 
          src="/imgs/empty-cart.png" 
          alt="Empty cart" 
          style={{ 
            width: '200px', 
            marginBottom: '20px' 
          }} 
        />
        <h2 style={{ 
          fontSize: '24px', 
          marginBottom: '10px' 
        }}>
          Your cart is empty
        </h2>
        <p style={{ 
          color: '#666', 
          marginBottom: '20px' 
        }}>
          Looks like you haven&apos;t added anything to your cart yet
        </p>
        <Link 
          to="/" 
          style={{ 
            backgroundColor: '#0055B6',
            color: '#fff',
            padding: '15px 30px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <CartSummary>
        <div>Product</div>
        <CartSummaryColumn>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </CartSummaryColumn>
      </CartSummary>

      {cart.map((item: CartItem) => (
        <CartItemWrapper key={item.id}>
          <CartItemContent>
            <ProductImage src={item.image} alt={item.title} loading="lazy" />
            <ProductDescription>{item.title}</ProductDescription>
          </CartItemContent>
          <ProductDetails>
            <ProductPrice>${item.price.toFixed(2)}</ProductPrice>
            <QuantitySelector>
              <QuantityButton onClick={() => updateQuantity(item.id, -1)}>-</QuantityButton>
              <span>{item.quantity}</span>
              <QuantityButton onClick={() => updateQuantity(item.id, 1)}>+</QuantityButton>
            </QuantitySelector>
            <ProductPrice>${(item.price * item.quantity).toFixed(2)}</ProductPrice>
          </ProductDetails>
          <RemoveIcon
            src="/imgs/close.png"
            alt="Remove item"
            onClick={() => removeFromCart(item.id)}
            loading="lazy"
          />
        </CartItemWrapper>
      ))}

      <SubTotal>
        <SubtotalSection />
        <SubtotalContainer>
          <SubtotalLabel>Subtotal</SubtotalLabel>
          <SubtotalAmount>${subtotal.toFixed(2)}</SubtotalAmount>
        </SubtotalContainer>
        <CheckoutDivider />
        <TaxShippingInfo>
          Tax included and shipping calculated at checkout
        </TaxShippingInfo>
        <CheckoutButton to="/payment">
          Proceed to checkout
        </CheckoutButton>
      </SubTotal>
    </>
  );
};

export default MyChart;