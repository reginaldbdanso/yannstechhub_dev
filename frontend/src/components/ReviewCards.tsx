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

const ReviewCards: React.FC = () => {
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
    },
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
    },
    {
      title: "Super impressive",
      rating: 4,
      reviewText: "The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.",
      author: "Sweetie Baiden"
    }
  ];

  return (
    <>
      {reviews.map((review, index) => (
        <Card key={index}>
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
        </Card>
      ))}
    </>
  );
};

export default ReviewCards;