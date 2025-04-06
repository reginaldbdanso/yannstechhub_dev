import React, { useState, useEffect } from 'react';
import styles from '../styles/components/ShippingDetails.module.css';
import { useShipping, ShippingAddress } from '@/hooks/useShipping';
import { useCheckout } from '@/hooks/useCheckout';

interface ShippingDetailsProps {
  onContinue?: () => void;
}

const ShippingDetails: React.FC<ShippingDetailsProps> = ({ onContinue }) => {
  const { addresses, loading, error, fetchAddresses } = useShipping();
  const { checkoutData, updateCheckoutData } = useCheckout();
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);
  const [sameBillingAddress, setSameBillingAddress] = useState(true);
  const [selectedBillingAddressId, setSelectedBillingAddressId] = useState<string | null>(null);

  useEffect(() => {
    fetchAddresses();
  }, []);

  useEffect(() => {
    // Set default address if available
    if (addresses.length > 0) {
      const defaultAddress = addresses.find(addr => addr.isDefault);
      if (defaultAddress) {
        setSelectedAddressId(defaultAddress._id);
        updateCheckoutData({ shippingAddress: defaultAddress });
      } else {
        setSelectedAddressId(addresses[0]._id);
        updateCheckoutData({ shippingAddress: addresses[0] });
      }
    }
  }, [addresses]);

  const handleAddressSelect = (address: ShippingAddress) => {
    setSelectedAddressId(address._id);
    updateCheckoutData({ shippingAddress: address });
  };

  const handleBillingAddressSelect = (address: ShippingAddress) => {
    setSelectedBillingAddressId(address._id);
    updateCheckoutData({ billingAddress: address });
  };

  const handleSameBillingAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isSame = e.target.checked;
    setSameBillingAddress(isSame);
    updateCheckoutData({ sameBillingAddress: isSame });
    
    if (isSame && selectedAddressId) {
      const shippingAddress = addresses.find(addr => addr._id === selectedAddressId);
      if (shippingAddress) {
        updateCheckoutData({ billingAddress: shippingAddress });
      }
    }
  };

  const handleContinue = () => {
    if (!selectedAddressId) {
      alert('Please select a shipping address');
      return;
    }

    if (!sameBillingAddress && !selectedBillingAddressId) {
      alert('Please select a billing address');
      return;
    }

    if (onContinue) {
      onContinue();
    }
  };

  if (loading && addresses.length === 0) {
    return <div className={styles.loading}>Loading addresses...</div>;
  }

  if (error && addresses.length === 0) {
    return <div className={styles.error}>Error loading addresses: {error}</div>;
  }

  return (
    <div className={styles.shippingDetailsContainer}>
      <h2 className={styles.title}>Shipping Details</h2>
      
      <div className={styles.addressSelection}>
        <h3>Select Shipping Address</h3>
        {addresses.length > 0 ? (
          <div className={styles.addressGrid}>
            {addresses.map(address => (
              <div 
                key={address._id}
                className={`${styles.addressCard} ${selectedAddressId === address._id ? styles.selected : ''}`}
                onClick={() => handleAddressSelect(address)}
              >
                {address.isDefault && <span className={styles.defaultBadge}>Default</span>}
                <h4>{address.fullName}</h4>
                <p>{address.addressLine1}</p>
                {address.addressLine2 && <p>{address.addressLine2}</p>}
                <p>{address.city}, {address.state} {address.zipCode}</p>
                <p>{address.country}</p>
                <p>{address.phoneNumber}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noAddresses}>
            No shipping addresses found. Please add a new address.
          </p>
        )}
      </div>
      
      <div className={styles.billingAddressSection}>
        <div className={styles.sameBillingOption}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={sameBillingAddress}
              onChange={handleSameBillingAddressChange}
            />
            Use same address for billing
          </label>
        </div>
        
        {!sameBillingAddress && (
          <div className={styles.billingAddressSelection}>
            <h3>Select Billing Address</h3>
            {addresses.length > 0 ? (
              <div className={styles.addressGrid}>
                {addresses.map(address => (
                  <div 
                    key={`billing-${address._id}`}
                    className={`${styles.addressCard} ${selectedBillingAddressId === address._id ? styles.selected : ''}`}
                    onClick={() => handleBillingAddressSelect(address)}
                  >
                    {address.isDefault && <span className={styles.defaultBadge}>Default</span>}
                    <h4>{address.fullName}</h4>
                    <p>{address.addressLine1}</p>
                    {address.addressLine2 && <p>{address.addressLine2}</p>}
                    <p>{address.city}, {address.state} {address.zipCode}</p>
                    <p>{address.country}</p>
                    <p>{address.phoneNumber}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.noAddresses}>
                No billing addresses found. Please add a new address.
              </p>
            )}
          </div>
        )}
      </div>
      
      <div className={styles.actionButtons}>
        <button 
          className={styles.continueButton}
          onClick={handleContinue}
          disabled={!selectedAddressId || (!sameBillingAddress && !selectedBillingAddressId)}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default ShippingDetails;