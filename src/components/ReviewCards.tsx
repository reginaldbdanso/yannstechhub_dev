import React from 'react';
import  '../styles/components/ReviewsCard_module.css';
import { useReviews } from "@/context/ReviewContext"

/**
 * ReviewCards Component
 * 
 * Displays a list of product reviews with ratings and author information.
 * Uses the useReviews hook to fetch review data.
 */
const ReviewCards: React.FC = () => {
  const { reviews } = useReviews();

  return (
    <>
      {reviews.map((review, index) => (
        // Individual review card with rating stars, title, and content
        <div className="card" key={index}>
          <div className="rating">
            <h3 className="title">{review.title}</h3>
            <div className="stars">
              {[...Array(review.rating)].map((_, i) => (
                <img
                  key={i}
                  src="/imgs/star.png"
                  alt="Rating star"
                />
              ))}
            </div>
          </div>
          <p className="reviewText">{review.reviewText}</p>
          <p className="author">Reviewed by {review.author}</p>
        </div>
      ))}
    </>
  );
};

export default ReviewCards;