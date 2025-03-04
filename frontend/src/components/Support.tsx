import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  background-color: #eef2f4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  background-color: #eef2f4;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  padding: 21px 0 179px;
`;

const Divider = styled.div<{ top?: boolean }>`
  align-self: stretch;
  min-height: 0px;
  margin-top: ${props => props.top ? '100px' : '10px'};
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

const OrderSection = styled.section`
  text-align: center;
  margin-top: 50px;
  display: flex;
  width: 100%;
  max-width: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 991px) {
    margin-top: 80px;
    max-width: 100%;
  }
`;

const SectionTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
  width: 50%;
  margin-bottom: 13px;
`;

const OrderImage = styled.img`
  aspect-ratio: 3.13;
  width: 100%;
  max-width: 90%;
  margin-bottom: 26px;

  @media (max-width: 991px) {
    aspect-ratio: 2.5;
  }
`;

const OrderForm = styled.form`
  align-self: center;
  background-color: #fff;
  display: flex;
  flex: 1;
  width: 50%;
  margin-top: -60px;
  font-size: 15px;
  color: #000;
  white-space: nowrap;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-left: 20px;
    white-space: initial;
  }
`;

const OrderInput = styled.input`
  align-self: stretch;
  padding: 0 10px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  color: #000;
  white-space: nowrap;
`;

const OrderButton = styled.button`
  align-self: end;
  background-color: #c0ddff;
  padding: 11px 39px;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const OrderInfo = styled.p`
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 991px) {
    margin-bottom: 30%;
  }
`;

const Support: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add tracking functionality here
  };

  return (
    <Container>
      <MainContent>
        <Header />
        <Divider top />
        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem bold>yannstechub</BreadcrumbItem>
            <BreadcrumbItem>/ Track Order</BreadcrumbItem>
          </Breadcrumb>
        </BreadcrumbSort>
        <Divider />
        <OrderSection>
          <SectionTitle>Your Order</SectionTitle>
          <OrderImage
            loading="lazy"
            src="/imgs/order-track.png"
            alt="Order tracking information"
          />
          <OrderForm onSubmit={handleSubmit}>
            <OrderInput
              type="text"
              id="order-number"
              name="order-number"
              placeholder="Enter your number"
              required
            />
            <OrderButton type="submit">Track</OrderButton>
          </OrderForm>
          <OrderInfo>
            Normally your package will arrive within 2-5 working days after placing
            your order. In case of weather disasters, and holidays there may be
            delays. For any questions please contact Care.gh@oraimo.com. Thank you
            for your support and patience.
          </OrderInfo>
        </OrderSection>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default Support; 