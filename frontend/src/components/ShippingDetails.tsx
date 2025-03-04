import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const BreadcrumbItem = styled.span<{ active?: boolean }>`
  align-self: stretch;
  border-radius: 10px;
  background-color: #fff;
  gap: 10px;
  padding: 4px 14px;
  font: ${props => props.active ? '700 15px' : '400 15px'} Open Sans, sans-serif;
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

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

const ShippingDetails: React.FC = () => {
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

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(prevItems => prevItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  return (
    <CheckoutContainer>
      <MainContent>
        <HeaderSection>
          <Logo src="/imgs/Logo.png" alt="YannsTechHub Logo" />
          <NavButtons>
            <NavLink to="/daily-deals">Daily deals</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/bundle-deals">Bundle Deals</NavLink>
            <NavLink to="/support">Support</NavLink>
          </NavButtons>
          <UserActions>
            <ActionIcon src="/imgs/Search - 7.png" alt="Search" />
            <ActionIcon src="/imgs/Profile - 3.png" alt="User Account" />
            <Link to="/cart">
              <ActionIcon src="/imgs/Buy - 6 (1).png" alt="Shopping Cart" />
            </Link>
          </UserActions>
        </HeaderSection>

        <DividerTop />
        <Divider />

        <CheckoutContent>
          <ContentGrid>
            <ShippingColumn>
              <ShippingDetailsSection>
                <SectionTitle>Shipping Address</SectionTitle>
                <AddressCard>
                  <AddressInfo>
                    <p><strong>Name:</strong> Adusah Poku Kofi Nkansah</p>
                    <InfoItem><strong>Email:</strong> adusahpoku@gmail.com</InfoItem>
                    <InfoItem><strong>Phone:</strong> 05989812365</InfoItem>
                    <InfoItem><strong>Ship to:</strong> GA-021-6548 Spintex Shell Signboard</InfoItem>
                  </AddressInfo>
                  <EditButton>
                    <EditIcon src="/imgs/edit.png" alt="Edit" />
                    Edit
                  </EditButton>
                </AddressCard>

                <SectionTitle>Shipping Method</SectionTitle>
                <MethodCard>
                  <MethodDescription>Standard Shipping (1-3 business days in Accra, 3-7 business days in other areas)</MethodDescription>
                  <p>$5.00</p>
                </MethodCard>

                <SectionTitle>Payment Method</SectionTitle>
                <PaymentColumn>
                  <PaymentOption>
                    <RadioButton type="radio" name="payment" />
                    <OptionLabel>
                      Pay on Delivery<br />
                      <span>Pay Mobile Money or in cash on Delivery/Pickup</span>
                    </OptionLabel>
                  </PaymentOption>

                  <MobileMoneySection>Mobile Money</MobileMoneySection>

                  <MobileOption>
                    <RadioButton type="radio" name="mobile" />
                    <p>MTN Mobile Money</p>
                  </MobileOption>

                  <MobileOption>
                    <RadioButton type="radio" name="mobile" />
                    <p>Telecel Mobile Money</p>
                  </MobileOption>

                  <MobileOption>
                    <RadioButton type="radio" name="mobile" />
                    <p>AirtelTigo Mobile Money</p>
                  </MobileOption>

                  <h3>Pre-pay Now</h3>

                  <PaymentOption>
                    <RadioButton type="radio" name="payment" />
                    <OptionLabel>
                      Pay with Card<br />
                      <span>Pay Now with No E-levy</span>
                    </OptionLabel>
                  </PaymentOption>
                </PaymentColumn>

                <Link to="/payment-mobile">
                  <CheckoutButton>Proceed to checkout</CheckoutButton>
                </Link>
              </ShippingDetailsSection>
            </ShippingColumn>

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
          </ContentGrid>
        </CheckoutContent>
      </MainContent>

      <Footer>
        <FooterContent>
          <FooterSections>
            <FooterLogoSocial>
              <Logo src="/imgs/Logo (1).png" alt="YannsTechHub Footer Logo" />
              <SocialIcons>
                <a href="#" aria-label="Facebook">
                  <SocialIcon src="/imgs/Facebook.png" alt="" />
                </a>
                <a href="#" aria-label="Twitter">
                  <SocialIcon src="/imgs/Twitter.png" alt="" />
                </a>
                <a href="#" aria-label="Instagram">
                  <SocialIcon src="/imgs/Instagram.png" alt="" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <SocialIcon src="/imgs/LinkedIn.png" alt="" />
                </a>
                <a href="#" aria-label="YouTube">
                  <SocialIcon src="/imgs/YouTube.png" alt="" />
                </a>
                <a href="#" aria-label="TickTok">
                  <SocialIcon src="/imgs/TikTok.png" alt="" />
                </a>
              </SocialIcons>
            </FooterLogoSocial>
            <FooterLinks>
              <FooterHeading>Company</FooterHeading>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterHeading>Help</FooterHeading>
              <FooterLink to="/legal">Legal</FooterLink>
              <FooterLink to="/faqs">FAQs</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinks>
          </FooterSections>
        </FooterContent>
        <Copyright>@yannstechhub2025</Copyright>
      </Footer>
    </CheckoutContainer>
  );
};

export default ShippingDetails;