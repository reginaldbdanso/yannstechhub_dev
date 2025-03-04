import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const SecureCheckout = styled.div`
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

const DividerTop = styled.div`
  align-self: stretch;
  min-height: 0px;
  margin-top: 100px;
  width: 99.9%;
  border: 1px solid #d5d5d5;
`;

const Divider = styled.div`
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

const BreadcrumbItem = styled.span<{ bold?: boolean }>`
  align-self: stretch;
  border-radius: 10px;
  background-color: #fff;
  padding: 4px 14px;
  font: ${props => props.bold ? '700' : '400'} 15px Open Sans, sans-serif;
`;

const CheckoutContent = styled.main`
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

  @media (max-width: 991px) {
    margin-left: 10px;
  }
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
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;

  &::placeholder {
    color: #999;
  }
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

const CheckoutButton = styled(Link)`
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
  display: block;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;

  @media (max-width: 991px) {
    padding: 19px 20px;
  }
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

const EditButton = styled.button`
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
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

const RemoveIcon = styled.img`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    opacity: 0.8;
  }
`;

const ItemImage = styled.img`
  width: 89px;
  height: 84px;
  border-radius: 10px;
  object-fit: contain;
`;

const ItemTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0 0 0;
  width: 89px;
  text-align: center;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const ItemPrice = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  order: 1;
`;

const QuantityControl = styled.div`
  border-radius: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid rgba(228, 228, 228, 1);
  width: 120px;
  order: 2;
`;

const ItemTotalPrice = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  order: 4;
`;

const ItemQuantity = styled.p`
  margin: 8px 0;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
`;

const ItemDivider = styled.hr`
  border: 0;
  border-top: 1px solid #d5d5d5;
  margin: 17px 0;
`;

const TotalSummary = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  margin-top: 28px;
  padding: 28px 41px 49px;

  @media (max-width: 991px) {
    padding: 28px 20px 49px;
  }
`;

const SummaryGrid = styled.div`
  display: flex;
  gap: 20px;
`;

const SummaryLabels = styled.div`
  width: 68%;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
`;

const SummaryValues = styled.div`
  width: 32%;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-align: right;
`;

const TotalLabel = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-top: 35px;
`;

const TotalValue = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-top: 35px;
`;

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

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

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

const ShippingAddress: React.FC = () => {
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

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      quantity: 1
    },
    {
      id: 2,
      image: '/imgs/Rectangle 62 (4).png',
      title: 'Lorem ipsum dolor',
      price: 99.99,
      quantity: 1
    },
    {
      id: 3,
      image: '/imgs/asi.png',
      title: 'Lorem ipsum dolor',
      price: 100.00,
      quantity: 2
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleQuantityChange = (itemId: number, change: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  const handleRemoveItem = (itemId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 5.00;
    return {
      subtotal,
      shipping,
      total: subtotal + shipping
    };
  };

  const totals = calculateTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/shipping-details');
  };

  return (
    <SecureCheckout>
      <MainContents>
        <Header />
        <DividerTop />
        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem bold>yannstechub</BreadcrumbItem>
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
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label>Last Name</label>
                  <FormInput 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
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
                  required
                />
              </FormGroup>

              <FormCheckbox>
                <input 
                  type="checkbox" 
                  id="default-address"
                  name="setAsDefault"
                  checked={formData.setAsDefault}
                  onChange={handleInputChange}
                />
                <label htmlFor="default-address">Set as default</label>
              </FormCheckbox>

              <FormGroup>
                <label>State/Province</label>
                <FormInput 
                  type="text" 
                  name="stateProvince"
                  value={formData.stateProvince}
                  onChange={handleInputChange}
                  required
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
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label>District</label>
                  <FormInput 
                    type="text" 
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <label>Address</label>
                <FormInput 
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street, Apartment, Suite, etc."
                  required
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
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <CheckoutButton to="/shipping-details">
                Proceed to checkout
              </CheckoutButton>
            </ShippingForm>
          </ShippingSection>

          <OrderSummary>
            <SummaryContainer>
              <SummaryHeader>
                <h2>My Order Summary</h2>
                <EditButton>Edit</EditButton>
              </SummaryHeader>

              <OrderItems>
                {cartItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <OrderItem>
                      <RemoveIcon
                        src="/imgs/close.png"
                        alt="Remove item icon"
                        onClick={() => handleRemoveItem(item.id)}
                      />
                      <ItemImage
                        src={item.image}
                        alt={item.title}
                      />
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemDetails>
                        <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                        <QuantityControl>
                          <QuantityButton onClick={() => handleQuantityChange(item.id, -1)}>-</QuantityButton>
                          <span>{item.quantity}</span>
                          <QuantityButton onClick={() => handleQuantityChange(item.id, 1)}>+</QuantityButton>
                        </QuantityControl>
                        <ItemTotalPrice>${(item.price * item.quantity).toFixed(2)}</ItemTotalPrice>
                      </ItemDetails>
                    </OrderItem>
                    <ItemDivider />
                  </React.Fragment>
                ))}
              </OrderItems>
            </SummaryContainer>

            <TotalSummary>
              <SummaryGrid>
                <SummaryLabels>
                  <p>Cart Summary</p>
                  <p>Shipping</p>
                  <TotalLabel>Total</TotalLabel>
                </SummaryLabels>
                <SummaryValues>
                  <p>${totals.subtotal.toFixed(2)}</p>
                  <p>${totals.shipping.toFixed(2)}</p>
                  <TotalValue>${totals.total.toFixed(2)}</TotalValue>
                </SummaryValues>
              </SummaryGrid>
            </TotalSummary>
          </OrderSummary>
        </CheckoutContent>
      </MainContents>
      <Footer />
    </SecureCheckout>
  );
};

export default ShippingAddress; 