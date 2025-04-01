import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/PaymentApproval_module.css';
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
    <div className="container">
      <div className="mainContent">
        <Header />
        <div className="dividerTop" />
        <div className="breadcrumbSort">
          <div className="breadcrumb">
            <div className="breadcrumbItem">Cart</div>
            <div className="breadcrumbItem">Shipping</div>
            <div className="breadcrumbItem">Payment</div>
            <div className="breadcrumbItemActive">Approval</div>
          </div>
        </div>

        <div className="dividerNormal" />

        <div className="paymentSection">
          <h2 className="paymentTitle">Payment Approval</h2>
          <div className="paymentCard">
            <div className="paymentContent">
            <img
                src="/imgs/payment 1.png"
                alt="Payment Success"
                className="payment-icon"
                width={159}
                height={159}
              />
              <div className="paymentText">
                <p>Approve payment on</p>
                <p>+233 54******42</p>
              </div>
              <p className="paymentMessage">
                Thank you for using yannstechub. We are truly grateful for your support and the opportunity to serve
                you. Your satisfaction is our top priority, and we are committed to ensuring you have an exceptional
                experience every time.
              </p>
              <Link to="/shop" className="continueButton">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentApproval;