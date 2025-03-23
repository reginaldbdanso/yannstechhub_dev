import React from 'react';
import  '../styles/components/ReviewsCard.module.css';


interface ReviewCardProps {
  title: string;
  rating: number;
  reviewText: string;
  author: string;
}


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