import React, { useState, useEffect } from 'react';
import styles from '../styles/components/ShippingAddress.module.css';
import { useShipping, ShippingAddress as ShippingAddressType } from '@/hooks/useShipping';

interface ShippingAddressProps {
  onAddressSelect?: (address: ShippingAddressType) => void;
  selectedAddressId?: string;
}

const ShippingAddress: React.FC<ShippingAddressProps> = ({ onAddressSelect, selectedAddressId }) => {
  const { addresses, loading, error, fetchAddresses,
    //  addAddress, updateAddress, 
     deleteAddress, setDefaultAddress } = useShipping();
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newAddress, setNewAddress] = useState<Partial<ShippingAddressType>>({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phoneNumber: '',
    isDefault: false,
  });

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setNewAddress(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddressSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newAddress.fullName || !newAddress.addressLine1 || !newAddress.city || 
        !newAddress.state || !newAddress.zipCode || !newAddress.country || !newAddress.phoneNumber) {
      alert('Please fill in all required fields');
      return;
    }
    
    alert('Functionality not yet built');
    // try {
    //   if (newAddress._id) {
    //     // Update existing address
    //     await updateAddress(newAddress._id, newAddress as ShippingAddressType);
    //   } else {
    //     // Add new address
    //     await addAddress(newAddress as ShippingAddressType);
    //   }
      
    //   setIsAddingNew(false);
    //   setNewAddress({
    //     fullName: '',
    //     addressLine1: '',
    //     addressLine2: '',
    //     city: '',
    //     state: '',
    //     zipCode: '',
    //     country: '',
    //     phoneNumber: '',
    //     isDefault: false,
    //   });
      
    //   await fetchAddresses();
    // } catch (err) {
    //   console.error('Error saving address:', err);
    // }
  };

  const handleEditAddress = (address: ShippingAddressType) => {
    setNewAddress(address);
    setIsAddingNew(true);
  };

  const handleDeleteAddress = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      await deleteAddress(id);
      await fetchAddresses();
    }
  };

  const handleSetDefault = async (id: string) => {
    await setDefaultAddress(id);
  };

  const handleSelectAddress = (address: ShippingAddressType) => {
    if (onAddressSelect) {
      onAddressSelect(address);
    }
  };

  if (loading && addresses.length === 0) {
    return <div className={styles.loading}>Loading addresses...</div>;
  }

  if (error && addresses.length === 0) {
    return <div className={styles.error}>Error loading addresses: {error}</div>;
  }

  return (
    <div className={styles.shippingAddressContainer}>
      <h2 className={styles.title}>Shipping Addresses</h2>
      
      {addresses.length > 0 ? (
        <div className={styles.addressList}>
          {addresses.map((address) => (
            <div 
              key={address._id} 
              className={`${styles.addressCard} ${selectedAddressId === address._id ? styles.selectedAddress : ''}`}
              onClick={() => handleSelectAddress(address)}
            >
              {address.isDefault && <span className={styles.defaultBadge}>Default</span>}
              <h3>{address.fullName}</h3>
              <p>{address.addressLine1}</p>
              {address.addressLine2 && <p>{address.addressLine2}</p>}
              <p>{address.city}, {address.state} {address.zipCode}</p>
              <p>{address.country}</p>
              <p>{address.phoneNumber}</p>
              
              <div className={styles.addressActions}>
                <button 
                  className={styles.editButton} 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditAddress(address);
                  }}
                >
                  Edit
                </button>
                <button 
                  className={styles.deleteButton} 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteAddress(address._id);
                  }}
                >
                  Delete
                </button>
                {!address.isDefault && (
                  <button 
                    className={styles.defaultButton} 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSetDefault(address._id);
                    }}
                  >
                    Set as Default
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noAddresses}>No shipping addresses found. Please add a new address.</p>
      )}
      
      {!isAddingNew ? (
        <button className={styles.addButton} onClick={() => setIsAddingNew(true)}>
          Add New Address
        </button>
      ) : (
        <div className={styles.addressForm}>
          <h3>{newAddress._id ? 'Edit Address' : 'Add New Address'}</h3>
          <form onSubmit={handleAddressSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={newAddress.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="addressLine1">Address Line 1 *</label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                value={newAddress.addressLine1}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="addressLine2">Address Line 2</label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={newAddress.addressLine2 || ''}
                onChange={handleInputChange}
              />
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={newAddress.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="state">State/Province *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={newAddress.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="zipCode">Zip/Postal Code *</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={newAddress.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="country">Country *</label>
                <select
                  id="country"
                  name="country"
                  value={newAddress.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Japan">Japan</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={newAddress.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={newAddress.isDefault}
                  onChange={handleInputChange}
                />
                Set as default shipping address
              </label>
            </div>
            
            <div className={styles.formActions}>
              <button type="submit" className={styles.saveButton}>
                {newAddress._id ? 'Update Address' : 'Save Address'}
              </button>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => {
                  setIsAddingNew(false);
                  setNewAddress({
                    fullName: '',
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    country: '',
                    phoneNumber: '',
                    isDefault: false,
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShippingAddress;