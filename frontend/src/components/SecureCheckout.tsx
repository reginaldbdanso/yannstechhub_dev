import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '../context/CartContext';

const SecureCheckoutPage = styled.div`
  background-color: #eef2f4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContents = styled.div`
  background-color: #eef2f4;
  display: flex;
  align-self: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 21px 0 179px;
`;

const DividerTop = styled.hr`
  align-self: stretch;
  min-height: 0px;
  margin-top: 100px;
  width: 99.9%;
  border: 1px solid #d5d5d5;
`;

const Divider = styled.hr`
  align-self: stretch;
  min-height: 0px;
  margin-top: 10px;
  width: 99.9%;
  border: 1px solid #d5d5d5;
`;

const BreadcrumbSort = styled.div`
  display: flex;
  width: 100%;
  max-width: 70%;
  gap: 2px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 9px 0 0 0px;

  @media (max-width: 991px) {
    width: 70%;
    justify-content: center;
    gap: 2rem;
  }
`;

const Breadcrumb = styled.div`
  align-self: start;
  display: flex;
  gap: 12px;
  color: #000;
  font: 15px Open Sans, sans-serif;
`;

const BreadcrumbItem = styled.span`
  align-self: stretch;
  border-radius: 10px;
  background-color: #fff;
  padding: 4px 14px;
  &.y {
    font: 700 15px Open Sans, sans-serif;
  }
`;

const CheckoutContent = styled.div`
  display: flex;
  margin: 38px 39px;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    margin: 40px 10px;
  }
`;

const ShippingSection = styled.section`
  width: 62%;
  padding: 15px 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 23px 25px;
`;

const ShippingForm = styled.form`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
`;

const FormRow = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 18px;
`;

const FormGroup = styled.div`
  flex: 1;
  margin-bottom: 18px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 49px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 10px;
  padding: 0 15px;
`;

const FormCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 11px 0;
  font-weight: 400;
`;

const HelperText = styled.p`
  color: #010101;
  margin: 11px 0 0;
  font-size: 14px;
`;

const OrderSummary = styled.section`
  width: 38%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SummaryContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 30px 22px 57px;
`;

const SummaryHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 336px;
  max-width: 100%;
  margin: 0 auto;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;
`;

const OrderItems = styled.div`
  margin-top: 30px;
`;

const OrderItem = styled.article`
  display: flex;
  gap: 20px;
  margin: 20px 11px;
  position: relative;
  align-items: flex-start;
`;

const ItemImage = styled.img`
  width: 89px;
  height: 84px;
  border-radius: 10px;
  object-fit: contain;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
`;

const QuantityControl = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  border: 1px solid #e4e4e4;
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0 5px;

  &:hover {
    color: #0055b6;
  }
`;
const TotalSection = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e4e4e4;
`;
const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;
`;
const ShippingInfo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  color: #666;
  margin: 10px 0;
  text-align: center;
`;
const CheckoutButton = styled.button`
  background-color: #0055b6;
  color: #fff9f9;
  font-weight: 700;
  border: none;
  text-align: center;
  justify-content: center;
  padding: 20px 0;
  align-items: center;
  border-radius: 30px;
  width: 469px;
  max-width: 100%;
  margin-top: 38px;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 19px 20px;
  }
`;
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
    <SecureCheckoutPage>
      <MainContents>
        <Header />
        <DividerTop />

        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem className="y">yannstechub</BreadcrumbItem>
            <BreadcrumbItem>/ Daily deals</BreadcrumbItem>
          </Breadcrumb>
        </BreadcrumbSort>

        <Divider />

        <CheckoutContent>
          <ShippingSection>
            <SectionTitle>Shipping Address</SectionTitle>
            <ShippingForm onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <label>First Name</label>
                  <FormInput
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Last Name</label>
                  <FormInput
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <label>Email</label>
                <FormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormCheckbox>
                <input
                  type="checkbox"
                  id="default-address"
                  name="isDefaultAddress"
                  checked={formData.isDefaultAddress}
                  onChange={handleInputChange}
                />
                <label htmlFor="default-address">Set as default</label>
              </FormCheckbox>

              <FormGroup>
                <label>State/Province</label>
                <FormInput
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <label>City</label>
                  <FormInput
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>District</label>
                  <FormInput
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <label>Address</label>
                <FormInput
                  type="text"
                  name="address1"
                  value={formData.address1}
                  onChange={handleInputChange}
                  placeholder="Street, Apartment, Suite, etc."
                />
                <HelperText>
                  Detailed street address can help our rider find you quickly.
                </HelperText>
              </FormGroup>

              <FormGroup>
                <label>Address 2</label>
                <FormInput
                  type="text"
                  name="address2"
                  value={formData.address2}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Phone number</label>
                <FormInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <CheckoutButton type="submit">
                Proceed to checkout
              </CheckoutButton>
            </ShippingForm>
          </ShippingSection>
          <OrderSummary>
            <SummaryContainer>
              <SummaryHeader>
                <h2>My Order Summary</h2>
                <button onClick={() => navigate('/cart')}>Edit</button>
              </SummaryHeader>
              <OrderItems>
                {cart.map((item) => (
                  <OrderItem key={item.id}>
                    <ItemImage src={item.image} alt={item.title} />
                    <ItemDetails>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                      <QuantityControl>
                        <QuantityButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</QuantityButton>
                        <span>{item.quantity}</span>
                        <QuantityButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</QuantityButton>
                      </QuantityControl>
                    </ItemDetails>
                  </OrderItem>
                ))}
              </OrderItems>
              <TotalSection>
                <TotalRow>
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </TotalRow>
                <TotalRow>
                  <span>Shipping</span>
                  <span>$5.00</span>
                </TotalRow>
                <TotalRow>
                  <span>Total</span>
                  <span>${(subtotal + 5).toFixed(2)}</span>
                </TotalRow>
                <ShippingInfo>
                  Shipping costs are calculated based on your location
                </ShippingInfo>
              </TotalSection>
            </SummaryContainer>
          </OrderSummary>
        </CheckoutContent>
      </MainContents>
      <Footer />
    </SecureCheckoutPage>
  );
};

export default SecureCheckout;