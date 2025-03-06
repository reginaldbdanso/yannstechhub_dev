import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

// Styled Components
const CheckoutContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  background-color: #eef2f4;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 21px 0 179px;
`;

const HeaderSection = styled.header`
  position: fixed;
  border-radius: 20px;
  background-color: #f2f2f2;
  display: flex;
  width: 70%;
  overflow: hidden;
  gap: 20px;
  justify-content: space-between;
  padding: 21px 68px;
  box-shadow: 1px 5px 9px 3px rgba(0, 0, 0, 0.147);
  z-index: 1000;
`;

const Logo = styled.img`
  aspect-ratio: 4.13;
  object-fit: contain;
  object-position: center;
  width: 132px;
  max-width: 100%;
`;

const NavButtons = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #000;
  justify-content: start;
  margin: auto 0;
  font: 500 14px Open Sans, sans-serif;
`;

const NavLink = styled(Link)`
  align-self: stretch;
  margin: auto 0;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const UserActions = styled.div`
  align-self: start;
  display: flex;
  margin-top: 4px;
  align-items: start;
  gap: 30px;
`;

const ActionIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
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

const CheckoutContent = styled.main`
  display: flex;
  gap: 20px;
  align-items: start;
  max-width: 70%;
  margin: 38px auto;
  padding: 0 39px;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const ContentGrid = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const ShippingColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 80%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ShippingDetailsSection = styled.section<{ children: React.ReactNode }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  color: #000;
  font: 20px Open Sans, sans-serif;
`;

const SectionTitle = styled.h2`
  font-weight: 700;
`;

const AddressCard = styled.div`
  border-radius: 20px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 18px;
  width: 100%;
  align-items: start;
  gap: 20px;
  font-size: 15px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 49px 80px 77px 22px;
  border: 1px solid #e4e4e4;
`;

const AddressInfo = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  align-items: start;
  font-weight: 500;
`;

const InfoItem = styled.p`
  margin-top: 9px;
`;

const EditButton = styled.button`
  display: flex;
  gap: 5px;
  font-weight: 700;
  background: none;
  border: none;
  cursor: pointer;
`;

const EditIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 19px;
  align-self: start;
`;

const MethodCard = styled.div`
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  color: #000;
  margin: 0 auto;
  padding: 49px 80px 77px 22px;
  font: 700 15px Open Sans, sans-serif;
  border: 1px solid #e4e4e4;
`;

const MethodDescription = styled.p`
  flex-grow: 1;
  flex-basis: auto;
`;

const PaymentColumn = styled.div`
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  color: #000;
  margin: 0 auto;
  padding: 49px 80px 77px 22px;
  font: 700 15px Open Sans, sans-serif;
  border: 1px solid #e4e4e4;
`;

const PaymentOption = styled.div`
  display: flex;
  gap: 6px;
`;

const RadioButton = styled.input`
  border-radius: 50%;
  align-self: start;
  display: flex;
  width: 24px;
  height: 24px;
  border: 1px solid #d9d9d9;
`;

const OptionLabel = styled.p`
  flex-basis: auto;
  flex-grow: 1;
`;

const MobileMoneySection = styled.h3`
  margin-top: 45px;
`;

const MobileOption = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 6px;
`;

const CheckoutButton = styled.button`
  align-self: start;
  border-radius: 30px;
  background-color: #0055b6;
  min-height: 57px;
  gap: 10px;
  color: #fff;
  margin: 36px 0 0 0px;
  padding: 19px 150px;
  font: 700 15px Open Sans, sans-serif;
  border: none;
  cursor: pointer;
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

const ItemTotalPrice = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  order: 4;
`;

const ItemDivider = styled.hr`
  border: 0;
  border-top: 1px solid #d5d5d5;
  margin: 17px 0;
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

const Footer = styled.footer`
  background-color: #000;
  padding-top: 10px;
  width: 100%;
  margin-bottom: 0%;
`;

const FooterContent = styled.div`
  padding: 73px 70px 40px;
  display: flex;
  justify-content: center;
`;

const FooterSections = styled.div`
  display: flex;
  flex-direction: row;
  width: 655px;
  max-width: 100%;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    align-items: start;
    text-align: start;
    gap: 5rem;
    justify-content: center;
  }
`;

const FooterLogoSocial = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 19px;
  gap: 33px;

  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.img`
  width: 18px;
  aspect-ratio: 1;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FooterHeading = styled.h3`
  color: #dedede;
  font-size: 17px;
  font-weight: 700;
  font-family: Inter, sans-serif;
`;

const FooterLink = styled(Link)`
  color: #fff;
  font: 300 12px Inter, sans-serif;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  background-color: #191919;
  color: #fff;
  text-align: center;
  padding: 7px 70px 13px;
  font: 400 10px Inter, sans-serif;

  @media (max-width: 991px) {
    padding: 7px 20px;
  }
`;

const ShippingDetails: React.FC = () => {
  const { cart, updateQuantity, subtotal } = useCart();
  return (
    <CheckoutContainer>
      <MainContent>
        <HeaderSection>
          <Link to="/">
            <Logo src="/imgs/Logo.png" alt="YannsTechHub Logo" />
          </Link>
          <NavButtons>
            <NavLink to="/daily-deals">Daily deals</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/bundle-deals">Bundle Deals</NavLink>
            <NavLink to="/support">Support</NavLink>
          </NavButtons>
          <UserActions>
            <ActionIcon src="/imgs/Search.png" alt="Search" />
            <Link to="/login">
              <ActionIcon src="/imgs/Profile.png" alt="User Account" />
            </Link>
            <Link to="/cart">
              <ActionIcon src="/imgs/Cart.png" alt="Shopping Cart" />
            </Link>
          </UserActions>
        </HeaderSection>

        <DividerTop />
        <Divider />

        <CheckoutContent>
          <ContentGrid>
            <ShippingColumn>
              <ShippingDetailsSection>
                <SectionTitle>Shipping Details</SectionTitle>
                <AddressCard>
                  <AddressInfo>
                    <InfoItem>John Doe</InfoItem>
                    <InfoItem>123 Main Street</InfoItem>
                    <InfoItem>Apt 4B</InfoItem>
                    <InfoItem>New York, NY 10001</InfoItem>
                    <InfoItem>+1 (555) 123-4567</InfoItem>
                  </AddressInfo>
                  <EditButton>
                    <EditIcon src="/imgs/edit.png" alt="Edit" />
                    Edit
                  </EditButton>
                </AddressCard>
              </ShippingDetailsSection>

              <MethodCard>
                <SectionTitle>Shipping Method</SectionTitle>
                <MethodDescription>Standard Shipping (5-7 business days)</MethodDescription>
              </MethodCard>

              <PaymentColumn>
                <SectionTitle>Payment Method</SectionTitle>
                <PaymentOption>
                  <RadioButton type="radio" name="payment" value="card" />
                  <OptionLabel>Credit/Debit Card</OptionLabel>
                </PaymentOption>

                <MobileMoneySection>Mobile Money</MobileMoneySection>
                <MobileOption>
                  <RadioButton type="radio" name="payment" value="momo" />
                  <OptionLabel>Mobile Money</OptionLabel>
                </MobileOption>
                
                <CheckoutButton>Proceed to Payment</CheckoutButton>
              </PaymentColumn>
            </ShippingColumn>

            <OrderSummary>
              <SummaryContainer>
                <SummaryHeader>
                  <h2>Order Summary</h2>
                  <span>{cart.length} items</span>
                </SummaryHeader>

                <OrderItems>
                  {cart.map((item) => (
                    <React.Fragment key={item.id}>
                      <OrderItem>
                        <RemoveIcon
                          src="/imgs/close.png"
                          alt="Remove"
                          onClick={() => updateQuantity(item.id, 0)}
                        />
                        <ItemImage src={item.image} alt={item.title} />
                        <ItemDetails>
                          <ItemTitle>{item.title}</ItemTitle>
                          <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                          <QuantityControl>
                            <QuantityButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</QuantityButton>
                            <span>{item.quantity}</span>
                            <QuantityButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</QuantityButton>
                          </QuantityControl>
                          <ItemTotalPrice>${(item.price * item.quantity).toFixed(2)}</ItemTotalPrice>
                        </ItemDetails>
                      </OrderItem>
                      <ItemDivider />
                    </React.Fragment>
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
          </ContentGrid>
        </CheckoutContent>
      </MainContent>

      <Footer>
        <FooterContent>
          <FooterSections>
            <FooterLogoSocial>
              <Logo src="/imgs/Logo.png" alt="YannsTechHub Footer Logo" />
              <SocialIcons>
                <SocialIcon src="/imgs/facebook.png" alt="Facebook" />
                <SocialIcon src="/imgs/twitter.png" alt="Twitter" />
                <SocialIcon src="/imgs/instagram.png" alt="Instagram" />
              </SocialIcons>
            </FooterLogoSocial>

            <FooterLinks>
              <FooterHeading>Quick Links</FooterHeading>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
            </FooterLinks>
          </FooterSections>
        </FooterContent>
        <Copyright>
          © 2024 YannsTechHub. All rights reserved.
        </Copyright>
      </Footer>
    </CheckoutContainer>
  );
};

export default ShippingDetails;