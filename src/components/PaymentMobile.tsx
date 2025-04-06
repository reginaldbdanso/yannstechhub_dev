import React, { useState, useEffect } from 'react';
import styles from '../styles/components/PaymentMobile.module.css';
import { usePayment, PaymentMethod } from '@/hooks/usePayment';
import { useCheckout } from '@/hooks/useCheckout';

interface PaymentMobileProps {
  onContinue?: () => void;
}

const PaymentMobile: React.FC<PaymentMobileProps> = ({ onContinue }) => {
  const { paymentMethods, loading, error, fetchPaymentMethods } = usePayment();
  const { checkoutData, updateCheckoutData } = useCheckout();
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(null);

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  useEffect(() => {
    // Set default payment method if available
    if (paymentMethods.length > 0) {
      const defaultMethod = paymentMethods.find(method => method.isDefault);
      if (defaultMethod) {
        setSelectedPaymentId(defaultMethod.id);
        updateCheckoutData({ paymentMethod: defaultMethod });
      } else {
        setSelectedPaymentId(paymentMethods[0].id);
        updateCheckoutData({ paymentMethod: paymentMethods[0] });
      }
    }
  }, [paymentMethods]);

  const handlePaymentSelect = (method: PaymentMethod) => {
    setSelectedPaymentId(method.id);
    updateCheckoutData({ paymentMethod: method });
  };

  const handleContinue = () => {
    if (!selectedPaymentId) {
      alert('Please select a payment method');
      return;
    }

    if (onContinue) {
      onContinue();
    }
  };

  if (loading && paymentMethods.length === 0) {
    return <div className={styles.loading}>Loading payment methods...</div>;
  }

  if (error && paymentMethods.length === 0) {
    return <div className={styles.error}>Error loading payment methods: {error}</div>;
  }

  return (
    <div className={styles.paymentContainer}>
      <h2 className={styles.title}>Payment Method</h2>
      
      <div className={styles.paymentSelection}>
        {paymentMethods.length > 0 ? (
          <div className={styles.paymentMethods}>
            {paymentMethods.map(method => (
              <div 
                key={method.id}
                className={`${styles.paymentCard} ${selectedPaymentId === method.id ? styles.selected : ''}`}
                onClick={() => handlePaymentSelect(method)}
              >
                {method.isDefault && <span className={styles.defaultBadge}>Default</span>}
                
                {method.type === 'credit_card' && (
                  <div className={styles.creditCardMethod}>
                    <div className={styles.cardIcon}>
                      {/* Card icon based on card number */}
                      {method.details.cardNumber?.startsWith('4') && <span>Visa</span>}
                      {method.details.cardNumber?.startsWith('5') && <span>MasterCard</span>}
                      {method.details.cardNumber?.startsWith('3') && <span>Amex</span>}
                      {method.details.cardNumber?.startsWith('6') && <span>Discover</span>}
                    </div>
                    <div className={styles.cardDetails}>
                      <div className={styles.cardNumber}>
                        **** **** **** {method.details.cardNumber?.slice(-4)}
                      </div>
                      <div className={styles.cardHolder}>{method.details.cardHolder}</div>
                      <div className={styles.expiryDate}>Expires: {method.details.expiryDate}</div>
                    </div>
                  {/* </div> */}
                  <div className={styles.cardDetails}>
                    <div className={styles.cardNumber}>
                      **** **** **** {method.details.cardNumber?.slice(-4)}
                    </div>
                    <div className={styles.cardHolder}>{method.details.cardHolder}</div>
                    <div className={styles.expiryDate}>Expires: {method.details.expiryDate}</div>
                  </div>
                </div>
              )}
              
              {method.type === 'paypal' && (
                <div className={styles.paypalMethod}>
                  <div className={styles.paypalIcon}>PayPal</div>
                  <div className={styles.paypalEmail}>{method.details.email}</div>
                </div>
              )}
              
              {method.type === 'apple_pay' && (
                <div className={styles.applePayMethod}>
                  <div className={styles.applePayIcon}>Apple Pay</div>
                </div>
              )}
              
              {method.type === 'google_pay' && (
                <div className={styles.googlePayMethod}>
                  <div className={styles.googlePayIcon}>Google Pay</div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noPaymentMethods}>
          <p>No payment methods found. Please add a new payment method.</p>
          <button className={styles.addPaymentButton}>Add Payment Method</button>
        </div>
      )}
      
      <div className={styles.actionButtons}>
        <button 
          className={styles.continueButton}
          onClick={handleContinue}
          disabled={!selectedPaymentId}
        >
          Continue to Review
        </button>
      </div>
    </div>
    </div>
  );
};

export default PaymentMobile;