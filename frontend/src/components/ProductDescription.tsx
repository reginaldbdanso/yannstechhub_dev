import React from 'react';
import styled from 'styled-components';

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 70%;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 991px) {
    max-width: 95%;
  }
`;

const SectionTitle = styled.h2`
  color: #000;
  font: 700 25px Open Sans, sans-serif;
  margin-bottom: 20px;
`;

const SpecsList = styled.div`
  color: #000;
  font: 500 15px Open Sans, sans-serif;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const FeatureDescription = styled.div`
  color: #000;
  font: 500 15px Open Sans, sans-serif;
  margin-bottom: 30px;

  strong {
    display: block;
    margin-bottom: 10px;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  margin-top: 30px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const RatingSummary = styled.div`
  flex: 1;
`;

const RatingScore = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  span {
    font-size: 50px;
    font-weight: 800;
  }

  img {
    height: 30px;
  }
`;

const RatingBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RatingBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    min-width: 20px;
  }
`;

const BarContainer = styled.div`
  flex: 1;
  height: 15px;
  background-color: #E4E4E4;
  border-radius: 10px;
  overflow: hidden;
`;

const BarFill = styled.div<{ width: string }>`
  height: 100%;
  background-color: #FFC107;
  width: ${props => props.width};
  border-radius: 10px;
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #E4E4E4;
`;

const ReviewRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ProductDescription: React.FC = () => {
  return (
    <ContentSection>
      <SectionTitle>Description</SectionTitle>
      <SpecsList>
        BT Version: 5.2<br/>
        BT Range: ≥10m<br/>
        Speaker Diameter: 40mm<br/>
        Playtime: Up to 60 hours<br/>
        Charging Time: 1.5 hours<br/>
        Supported Format: Mic support / Aux in Mode / Type-C<br/>
        Model: OHP-610
      </SpecsList>

      <FeatureDescription>
        <strong>
          Powerful Deep Bass<br/>
          Hits You in Waves
        </strong>
        Powered by advanced 40mm drivers and exclusive HavyBassTM technology, BoomPop2 is meticulously designed to offer music enthusiasts an unparalleled sound experience, characterized by incredibly deep and dynamic bass.
      </FeatureDescription>

      <SectionTitle>Ratings and Reviews</SectionTitle>
      <ReviewsContainer>
        <RatingSummary>
          <RatingScore>
            <span>5.0</span>
            <img src="/imgs/star.png" alt="Rating stars" />
          </RatingScore>
          <div>5489 ratings</div>

          <RatingBars>
            {[5, 4, 3, 2, 1].map(rating => (
              <RatingBar key={rating}>
                <span>{rating}</span>
                <BarContainer>
                  <BarFill width={rating === 5 ? '100%' : rating === 4 ? '80%' : rating === 3 ? '60%' : rating === 2 ? '40%' : '20%'} />
                </BarContainer>
                <span>3321</span>
              </RatingBar>
            ))}
          </RatingBars>
        </RatingSummary>

        {[1, 2, 3].map(index => (
          <ReviewCard key={index}>
            <ReviewRating>
              <ReviewTitle>Super impressive</ReviewTitle>
              <ReviewStars>
                {[1, 2, 3, 4].map(star => (
                  <img
                    key={star}
                    src="/imgs/star.png"
                    alt="Rating star"
                  />
                ))}
              </ReviewStars>
            </ReviewRating>
            <ReviewText>
              The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.
            </ReviewText>
            <ReviewAuthor>Reviewed by Sweetie Baiden</ReviewAuthor>
          </ReviewCard>
        ))}
      </ReviewsContainer>
    </ContentSection>
  );
};

export default ProductDescription;