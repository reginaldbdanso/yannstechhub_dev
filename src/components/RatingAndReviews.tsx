import React from 'react';
import styled from 'styled-components';

interface RatingDistribution {
  stars: number;
  count: number;
  width: number;
}

interface RatingData {
  average: number;
  total: number;
  distribution: RatingDistribution[];
}

interface ReviewProps {
  title: string;
  rating: number;
  reviewText: string;
  author: string;
}

const ReviewsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const RatingSummary = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Open Sans, sans-serif;
  color: #000;
`;

const RatingScore = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 50px;
  font-weight: 800;

  img {
    height: 30px;
  }

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const RatingCount = styled.span`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

const RatingBars = styled.div`
  display: flex;
  margin-top: 17px;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 991px) {
    margin: 20px 0;
  }
`;

const RatingBar = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`;

const BarContainer = styled.div`
  border-radius: 10px;
  background-color: #E4E4E4;
  height: 15px;
  width: 320px;

  @media (max-width: 991px) {
    width: 200px;
  }
`;

const BarFill = styled.div<{ width: string }>`
  border-radius: 10px;
  background-color: #FFC107;
  height: 100%;
  width: ${props => props.width};
  transition: width 0.3s ease;
`;

const ReviewCard = styled.div`
  border-radius: 20px;
  background-color: #FFF;
  padding: 32px 58px;
  margin-top: 20px;
  width: 100%;
  color: #000;
  font: 500 15px Open Sans, sans-serif;
  border: 1px solid #E4E4E4;

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const ReviewTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const ReviewStars = styled.div`
  display: flex;
  gap: 5px;
  
  img {
    width: 20px;
    height: 20px;
  }
`;

const ReviewText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const ReviewAuthor = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`;

const RateProductSection = styled.div`
  margin-top: 30px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

interface RatingAndReviewsProps {
  ratingData?: RatingData;
  reviews?: ReviewProps[];
}

const RatingAndReviews: React.FC<RatingAndReviewsProps> = ({ 
  ratingData = {
    average: 5.0,
    total: 5489,
    distribution: [
      { stars: 5, count: 3321, width: 320 },
      { stars: 4, count: 3321, width: 100 },
      { stars: 3, count: 3321, width: 280 },
      { stars: 2, count: 3321, width: 250 },
      { stars: 1, count: 3321, width: 20 },
    ]
  },
  reviews = [
    {
      title: "Super impressive",
      rating: 5,
      reviewText: "The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.",
      author: "Sweetie Baiden"
    }
  ]
}) => {

  return (
    <ReviewsContainer>
      <RatingSummary>
        <RatingScore>
          <span>{ratingData.average}</span>
          <img src="/imgs/star.png" alt="Rating stars" />
        </RatingScore>
        <RatingCount>{ratingData.total} ratings</RatingCount>

        <RatingBars>
          {ratingData.distribution.map(item => (
            <RatingBar key={item.stars}>
              <span>{item.stars}</span>
              <BarContainer>
                <BarFill 
                  width={`${item.width}px`}
                />
              </BarContainer>
              <span>{item.count}</span>
            </RatingBar>
          ))}
        </RatingBars>

        <RateProductSection>
          <h2>Rate This Product</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </RateProductSection>
      </RatingSummary>

      {reviews.map((review, index) => (
        <ReviewCard key={index}>
          <ReviewRating>
            <ReviewTitle>{review.title}</ReviewTitle>
            <ReviewStars>
              {[...Array(review.rating)].map((_, i) => (
                <img
                  key={i}
                  src="/imgs/star.png"
                  alt="Rating star"
                />
              ))}
            </ReviewStars>
          </ReviewRating>
          <ReviewText>{review.reviewText}</ReviewText>
          <ReviewAuthor>Reviewed by {review.author}</ReviewAuthor>
        </ReviewCard>
      ))}
    </ReviewsContainer>
  );
};

export default RatingAndReviews;