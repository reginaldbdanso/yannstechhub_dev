import React from 'react';
import  '../styles/components/RatingAndReviews.module.css';

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
    <div className="reviews-container">
      <div className="rating-summary">
        <div className="rating-score">
          <span>{ratingData.average}</span>
          <img src="/imgs/star.png" alt="Rating stars" />
        </div>
        <div className="rating-count">{ratingData.total} ratings</div>

        <div className="rating-bars">
          {ratingData.distribution.map(item => (
            <div className="rating-bar" key={item.stars}>
              <span>{item.stars}</span>
              <div className="bar-container">
                <div 
                  className="bar-fill"
                  style={{ width: `${item.width}px` }}
                />
              </div>
              <span>{item.count}</span>
            </div>
          ))}
        </div>

        <div className="rate-product-section">
          <h2>Rate This Product</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          <div className="review-rating">
            <h3 className="review-title">{review.title}</h3>
            <div className="review-stars">
              {[...Array(review.rating)].map((_, i) => (
                <img
                  key={i}
                  src="/imgs/star.png"
                  alt="Rating star"
                />
              ))}
            </div>
          </div>
          <div className="review-text">{review.reviewText}</div>
          <p className="review-author">Reviewed by {review.author}</p>
        </div>
      ))}
    </div>
  );
};

export default RatingAndReviews;