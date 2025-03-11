import React from 'react';
import styled from 'styled-components';

interface ReviewCardProps {
  title: string;
  rating: number;
  reviewText: string;
  author: string;
}

const Card = styled.div`
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

const ReviewCard: React.FC<ReviewCardProps> = ({ title, rating, reviewText, author }) => {
  return (
    <Card>
      <Rating>
        <Title>{title}</Title>
        <Stars>
          {[...Array(rating)].map((_, index) => (
            <img
              key={index}
              src="/imgs/star.png"
              alt="Rating star"
            />
          ))}
        </Stars>
      </Rating>
      <ReviewText>{reviewText}</ReviewText>
      <Author>Reviewed by {author}</Author>
    </Card>
  );
};

export default ReviewCard;