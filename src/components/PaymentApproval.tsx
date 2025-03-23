import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/PaymentApproval.module.css';
import Header from './Header';
import Footer from './Footer';

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
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.dividerTop} />
        <div className={styles.breadcrumbSort}>
          <div className={styles.breadcrumb}>
            <div className={styles.breadcrumbItem}>Cart</div>
            <div className={styles.breadcrumbItem}>Shipping</div>
            <div className={styles.breadcrumbItem}>Payment</div>
            <div className={styles.breadcrumbItemActive}>Approval</div>
          </div>
        </div>

        <div className={styles.dividerNormal} />

        <div className={styles.paymentSection}>
          <h2 className={styles.paymentTitle}>Payment Approval</h2>
          <div className={styles.paymentCard}>
            <div className={styles.paymentContent}>
              <p className={styles.paymentText}>
                Your payment is being processed. Please do not close this window.
              </p>
              <p className={styles.paymentMessage}>
                Note: This process may take a few minutes. Once completed, you will receive
                a confirmation email with your order details.
              </p>
              <Link to="/shop" className={styles.continueButton}>
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className={styles.reviewsContainer}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.rating}>
                  <h3 className={styles.title}>{review.title}</h3>
                  <div className={styles.stars}>
                    {[...Array(review.rating)].map((_, i) => (
                      <img
                        key={i}
                        src="/imgs/star.png"
                        alt="Rating star"
                      />
                    ))}
                  </div>
                </div>
                <p className={styles.reviewText}>{review.reviewText}</p>
                <p className={styles.author}>Reviewed by {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentApproval;