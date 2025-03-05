import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const BodyContainer = styled.div`
  background-color: #eef2f4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.div`
  display: flex;
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

const BreadcrumbItem = styled.div<{ active?: boolean }>`
  align-self: stretch;
  border-radius: 10px;
  background-color: #fff;
  gap: 10px;
  padding: 4px 14px;
  font-weight: ${props => props.active ? '700' : 'normal'};
`;

const PaymentSection = styled.section`
  width: 100%;
  max-width: 60%;
  padding: 40px 80px;
  background-color: #eef2f4;

  @media (max-width: 991px) {
    max-width: 95%;
  }
`;

const PaymentTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
`;

const PaymentCard = styled.div`
  background: white;
  border-radius: 20px;
  border: 1px solid #e4e4e4;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const PaymentText = styled.p`
  font-size: 14px;
  text-align: center;
`;

const PaymentMessage = styled.p`
  font-size: 12px;
  color: #919191;
  text-align: center;
  max-width: 526px;
  margin-top: 20px;
`;

const ContinueButton = styled.button`
  color: white;
  font-weight: 700;
  font-size: 15px;
  padding: 18px 150px;
  border-radius: 30px;
  border: none;
  background-color: #0055b6;
  margin: 20px auto;
  display: block;
  cursor: pointer;
`;

const ReviewsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 32px 58px;
  margin-top: 20px;
  width: 100%;
  border: 1px solid #E4E4E4;

  @media (max-width: 991px) {
    max-width: 95%;
    padding: 20px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const Stars = styled.div`
  display: flex;
  gap: 5px;

  img {
    height: 20px;
  }
`;

const ReviewText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 10px;
  color: #000;
`;

const Author = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`;

interface ReviewCardProps {
  title: string;
  rating: number;
  reviewText: string;
  author: string;
}

const PaymentApproval: React.FC = () => {
  const reviews: ReviewCardProps[] = [
    {
      title: "Super impressive",
      rating: 4,
      reviewText: "The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.",
      author: "Sweetie Baiden"
    },
    {
      title: "Super impressive",
      rating: 4,
      reviewText: "The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.",
      author: "Sweetie Baiden"
    }
  ];

  return (
    <BodyContainer>
      <MainContent>
        <Header />
        <DividerTop />
        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem>Cart</BreadcrumbItem>
            <BreadcrumbItem>Shipping</BreadcrumbItem>
            <BreadcrumbItem>Payment</BreadcrumbItem>
            <BreadcrumbItem active>Approval</BreadcrumbItem>
          </Breadcrumb>
        </BreadcrumbSort>

        <Divider />

        <PaymentSection>
          <PaymentTitle>Payment Approval</PaymentTitle>
          <PaymentCard>
            <PaymentContent>
              <PaymentText>
                Your payment is being processed. Please do not close this window.
              </PaymentText>
              <PaymentMessage>
                Note: This process may take a few minutes. Once completed, you will receive
                a confirmation email with your order details.
              </PaymentMessage>
              <Link to="/shop">
                <ContinueButton>Continue Shopping</ContinueButton>
              </Link>
            </PaymentContent>
          </PaymentCard>

          <ReviewsContainer>
            {reviews.map((review, index) => (
              <ReviewCard key={index}>
                <Rating>
                  <Title>{review.title}</Title>
                  <Stars>
                    {[...Array(review.rating)].map((_, i) => (
                      <img
                        key={i}
                        src="/imgs/star.png"
                        alt="Rating star"
                      />
                    ))}
                  </Stars>
                </Rating>
                <ReviewText>{review.reviewText}</ReviewText>
                <Author>Reviewed by {review.author}</Author>
              </ReviewCard>
            ))}
          </ReviewsContainer>
        </PaymentSection>
      </MainContent>
      <Footer />
    </BodyContainer>
  );
};

export default PaymentApproval;