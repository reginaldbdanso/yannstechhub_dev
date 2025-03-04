import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const PaymentMobileContainer = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  background-color: #eef2f4;
  display: flex;
  align-self: center;
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

const BreadcrumbItem = styled(Link)`
  align-self: stretch;
  border-radius: 10px;
  background-color: #fff;
  gap: 10px;
  padding: 4px 14px;
  font: ${props => props.className?.includes('active') ? '700 15px' : '400 15px'} Open Sans, sans-serif;
  color: #000;
  text-decoration: none;
`;

const MainContent = styled.main`
  display: flex;
  gap: 20px;
  margin: 38px auto;
  width: 100%;
  max-width: 70%;
  align-self: start;
  padding: 0 22px;

  @media (max-width: 991px) {
    flex-direction: column;
    max-width: 80%;
    padding-bottom: 40px;
  }
`;

const PaymentSection = styled.section`
  width: 64%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const PaymentTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  color: #000;
  font-weight: 700;
  margin: 0 0 18px;
`;

const PaymentForm = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 20px;
  padding: 45px 42px 113px;

  @media (max-width: 991px) {
    padding: 45px 20px 100px;
  }
`;

const PaymentTabs = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 12px;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  color: #010000;
  font-weight: 500;
`;

const TabGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const TabButton = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  font-weight: 700;
`;

const TabIndicator = styled.div<{ active?: boolean }>`
  height: 2px;
  width: 23px;
  background-color: ${props => props.active ? '#000' : 'transparent'};
  margin-top: 2px;
`;

const PaymentDetails = styled.div<{ active?: boolean }>`
  margin-top: 64px;
  display: ${props => props.active ? 'block' : 'none'};
`;

const PaymentProvider = styled.div`
  background-color: #f0f3f5;
  border-radius: 20px;
  padding: 9px 28px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 26px;

  @media (max-width: 991px) {
    padding: 9px 20px;
  }
`;

const CustomSelect = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
`;

const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

const OptionsList = styled.ul<{ show: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: ${props => props.show ? 'block' : 'none'};
  list-style: none;
  padding: 0;
  margin: 5px 0;
`;

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f0f3f5;
  }
`;

const ProviderIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const ChangeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 9px;
  background: none;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
  color: #919191;
  cursor: pointer;
`;

const ChangeIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const PaymentPhone = styled.div`
  background-color: #f0f3f5;
  border-radius: 20px;
  padding: 9px 28px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 26px;

  @media (max-width: 991px) {
    padding: 9px 20px;
  }
`;

const PhoneInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 23px;
  width: 100%;
  flex: 1;
`;

const PhoneIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const PhoneNumber = styled.input`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  color: #000;
  font-weight: 500;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

const PaymentAmount = styled.div`
  background-color: #f0f3f5;
  border-radius: 20px;
  padding: 9px 28px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 26px;

  @media (max-width: 991px) {
    padding: 9px 20px;
  }
`;

const AmountInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 23px;
  width: 100%;
  flex: 1;
`;

const AmountIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const AmountValue = styled.input`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  color: #000;
  font-weight: 500;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

const PaymentSecurity = styled.div`
  display: flex;
  gap: 16px;
  margin: 75px 0 0 21px;

  @media (max-width: 991px) {
    margin: 40px 0 10px 10px;
  }
`;

const SecurityIcon = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

const SecurityBadges = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const Badge = styled.img`
  height: 40px;
  object-fit: contain;
`;

const PaymentButton = styled.button`
  background-color: #0055b6;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: 19px;
  width: 469px;
  max-width: 100%;
  margin: 34px auto 0;
  display: block;
  cursor: pointer;
`;

const OrderSection = styled.section`
  width: 36%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const OrderSummary = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 9px 28px;
  margin-bottom: 26px;

  @media (max-width: 991px) {
    padding: 9px 20px;
  }
`;

const SummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

const SummaryTitle = styled.h2`
  font-weight: 700;
  margin: 0;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  font-size: 10px;
  color: #919191;
`;

const OrderItems = styled.div`
  margin-top: 30px;
`;

const OrderItem = styled.article`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
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
  gap: 8px;
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  color: #000;
  font-weight: 700;
  margin: 0;
`;

const ItemQuantity = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  color: #919191;
  font-weight: 500;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  color: #000;
  font-weight: 700;
  margin: 0;
`;

const ItemDivider = styled.hr`
  border: 0;
  border-top: 1px solid #e4e4e4;
  margin: 17px 0;
`;

const CartSummary = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 20px;
  padding: 9px 28px;
  margin-top: 28px;

  @media (max-width: 991px) {
    padding: 9px 20px;
  }
`;

const SummaryGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SummaryLabels = styled.div`
  display: flex;
  flex-direction: column;
`;

const SummaryValues = styled.div`
  display: flex;
  flex-direction: column;
`;

const SummaryLabel = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  color: #000;
  margin: 0 0 23px;

  &.total {
    font-size: 25px;
    font-weight: 700;
    margin-top: 12px;
  }
`;

const SummaryValue = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  color: #000;
  margin: 0 0 23px;

  &.total {
    font-size: 25px;
    font-weight: 700;
    margin-top: 12px;
  }
`;

const Footer = styled.footer`
  background-color: #000;
  padding-top: 10px;
  width: 100%;
  margin-top: auto;
`;

const FooterContent = styled.div`
  padding: 73px 70px 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 991px) {
    padding: 40px 20px;
  }
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

const FormField = styled.label`
  background-color: #f0f3f5;
  border-radius: 20px;
  padding: 11px 30px;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  gap: 27px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  color: #919191;
  font-weight: 500;
`;

const FieldIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const FieldInput = styled.input`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  color: #000;
  font-weight: 500;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  gap: 5px;
`;

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

const PaymentMobile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('momo');
  const [showOptions, setShowOptions] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState({
    name: 'MTN Mobile Money',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/37ad312c54ce04ce416e50c9a8a861c7826ea9e033bf4fb177e779b433ed1964'
  });

  const providers = [
    { name: 'MTN Mobile Money', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/37ad312c54ce04ce416e50c9a8a861c7826ea9e033bf4fb177e779b433ed1964' },
    { name: 'Telecel Cash', icon: '/imgs/T-Cash Red.png' },
    { name: 'AirtelTigo Money', icon: '/imgs/airtel-tigo.png' }
  ];

  const [cartItems] = useState<CartItem[]>([
    {
      id: 1,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a3d2d15b23f08d6a7e4a2e6a232f16067819ffa196f0281f853b8b8b5396d9b4',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      quantity: 1
    },
    {
      id: 2,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a9d8eab4fe28a73835d78dacacb812768449843e65448f1aa79482ad7a0d5e41',
      title: 'Lorem ipsum dolor',
      price: 99.99,
      quantity: 1
    },
    {
      id: 3,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4dec0a85ae305f77f0be2bbd7994f06e59650e4d5ff4602c193c0386f8e57c48',
      title: 'Lorem ipsum dolor',
      price: 99.99,
      quantity: 1
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.custom-select')) {
        setShowOptions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <PaymentMobileContainer>
      <MainContainer>
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
            <ActionIcon src="/imgs/Search - 7.png" alt="Search" />
            <Link to="/login">
              <ActionIcon src="/imgs/Profile - 3.png" alt="User Account" />
            </Link>
            <Link to="/cart">
              <ActionIcon src="/imgs/Buy - 6 (1).png" alt="Shopping Cart" />
            </Link>
          </UserActions>
        </HeaderSection>

        <DividerTop />
        <Divider />

        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem to="/">yannstechub</BreadcrumbItem>
            <BreadcrumbItem to="/daily-deals">/ Daily deals</BreadcrumbItem>
            <BreadcrumbItem to="/cart">/ Cart</BreadcrumbItem>
            <BreadcrumbItem to="/payment" className="active">/ Secure Checkout</BreadcrumbItem>
          </Breadcrumb>
        </BreadcrumbSort>

        <MainContent>
          <PaymentSection>
            <PaymentTitle>Payment Method</PaymentTitle>
            <PaymentForm>
              <PaymentTabs>
                <TabGroup>
                  <TabButton
                    active={activeTab === 'momo'}
                    onClick={() => setActiveTab('momo')}
                  >
                    Mobile Money
                  </TabButton>
                  <TabIndicator active={activeTab === 'momo'} />
                </TabGroup>
                <TabGroup>
                  <TabButton
                    active={activeTab === 'card'}
                    onClick={() => setActiveTab('card')}
                  >
                    Card
                  </TabButton>
                  <TabIndicator active={activeTab === 'card'} />
                </TabGroup>
              </PaymentTabs>

              <PaymentDetails active={activeTab === 'momo'}>
                <PaymentProvider>
                  <CustomSelect className="custom-select">
                    <SelectedOption onClick={() => setShowOptions(!showOptions)}>
                      <ProviderIcon src={selectedProvider.icon} alt={selectedProvider.name} />
                      <span>{selectedProvider.name}</span>
                    </SelectedOption>
                    <OptionsList show={showOptions}>
                      {providers.map((provider) => (
                        <OptionItem
                          key={provider.name}
                          onClick={() => {
                            setSelectedProvider(provider);
                            setShowOptions(false);
                          }}
                        >
                          <ProviderIcon src={provider.icon} alt={provider.name} />
                          <span>{provider.name}</span>
                        </OptionItem>
                      ))}
                    </OptionsList>
                  </CustomSelect>
                  <ChangeButton onClick={() => setShowOptions(!showOptions)}>
                    <span>Change</span>
                    <ChangeIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d416a212f7eda943315abbc16f9eb418e0c44b37aef97f5f6f38538b2d414b1" alt="Change icon" />
                  </ChangeButton>
                </PaymentProvider>

                <PaymentPhone>
                  <PhoneInfo>
                    <PhoneIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/afeaea94ec4bf72161507bc26b978113574005a314df0f8df4da204bb977c662" alt="Phone icon" />
                    <PhoneNumber type="tel" placeholder="+233 54*******42" />
                  </PhoneInfo>
                </PaymentPhone>

                <PaymentAmount>
                  <AmountInfo>
                    <AmountIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea28c42ad763c50754410221e02154f79df70f07903bbfecf526f46e807a0a89" alt="Amount icon" />
                    <AmountValue type="number" placeholder="Enter Amount (GHS)" min="0" />
                  </AmountInfo>
                </PaymentAmount>

                <PaymentSecurity>
                  <SecurityIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/019049c0e90a7169b8dcb06d9ac93eed81b07dadad55bf7a87f9f7e36e71f98c" alt="Security icon" />
                  <SecurityBadges>
                    <Badge src="https://cdn.builder.io/api/v1/image/assets/TEMP/21100b53cb7d691fdf947ded4d15b8bd99f12be24160215a2ff8d814aec85822" alt="Security badge 1" />
                    <Badge src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3f218578efe236f050f49e2d1766b7b00d0cd1d999bd715eb493a4f590e1ce1" alt="Security badge 2" />
                    <Badge src="https://cdn.builder.io/api/v1/image/assets/TEMP/352fbdd8cd8d9c091ede6fcca7cdf422c41250a54cab4d3bc1a61fd84010929c" alt="Security badge 3" />
                  </SecurityBadges>
                </PaymentSecurity>
              </PaymentDetails>

              <PaymentDetails active={activeTab === 'card'}>
                <FormField>
                  <FieldIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce69dcc2453cb67f5a44979cb2576d08d6bad7912bcb64980c7929c66595eee0" alt="Card icon" />
                  <FieldInput type="text" placeholder="Card Number" maxLength={19} />
                </FormField>

                <FormRow>
                  <FormField>
                    <FieldInput type="date" />
                  </FormField>

                  <FormField>
                    <FieldIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/812e4b7a0e48a79b9e457eca400e3eb6db0de475fa28c76b687cba9e33326401" alt="CVV icon" />
                    <FieldInput type="password" maxLength={4} placeholder="CVV" />
                  </FormField>
                </FormRow>

                <PaymentAmount>
                  <AmountInfo>
                    <AmountIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea28c42ad763c50754410221e02154f79df70f07903bbfecf526f46e807a0a89" alt="Amount icon" />
                    <AmountValue type="number" placeholder="Enter Amount (GHS)" min="0" />
                  </AmountInfo>
                </PaymentAmount>

                <PaymentSecurity>
                  <SecurityIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/019049c0e90a7169b8dcb06d9ac93eed81b07dadad55bf7a87f9f7e36e71f98c" alt="Security icon" />
                  <SecurityBadges>
                    <Badge src="https://cdn.builder.io/api/v1/image/assets/TEMP/21100b53cb7d691fdf947ded4d15b8bd99f12be24160215a2ff8d814aec85822" alt="Security badge 1" />
                    <Badge src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3f218578efe236f050f49e2d1766b7b00d0cd1d999bd715eb493a4f590e1ce1" alt="Security badge 2" />
                    <Badge src="https://cdn.builder.io/api/v1/image/assets/TEMP/352fbdd8cd8d9c091ede6fcca7cdf422c41250a54cab4d3bc1a61fd84010929c" alt="Security badge 3" />
                  </SecurityBadges>
                </PaymentSecurity>
              </PaymentDetails>

              <Link to="/shipping-address">
                <PaymentButton>Make Payment</PaymentButton>
              </Link>
            </PaymentForm>
          </PaymentSection>

          <OrderSection>
            <OrderSummary>
              <SummaryHeader>
                <SummaryTitle>My Order Summary</SummaryTitle>
                <EditButton>Edit</EditButton>
              </SummaryHeader>

              <OrderItems>
                {cartItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <OrderItem>
                      <ItemImage src={item.image} alt={item.title} />
                      <ItemDetails>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemQuantity>Qty: {item.quantity}</ItemQuantity>
                        <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                      </ItemDetails>
                    </OrderItem>
                    <ItemDivider />
                  </React.Fragment>
                ))}
              </OrderItems>
            </OrderSummary>

            <CartSummary>
              <SummaryGrid>
                <SummaryLabels>
                  <SummaryLabel>Cart Summary</SummaryLabel>
                  <SummaryLabel>Shipping</SummaryLabel>
                  <SummaryLabel className="total">Total</SummaryLabel>
                </SummaryLabels>
                <SummaryValues>
                  <SummaryValue>${totals.subtotal.toFixed(2)}</SummaryValue>
                  <SummaryValue>${totals.shipping.toFixed(2)}</SummaryValue>
                  <SummaryValue className="total">${totals.total.toFixed(2)}</SummaryValue>
                </SummaryValues>
              </SummaryGrid>
            </CartSummary>
          </OrderSection>
        </MainContent>
      </MainContainer>

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
    </PaymentMobileContainer>
  );
};

export default PaymentMobile; 