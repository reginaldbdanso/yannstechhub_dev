import React from 'react';
import { Link } from 'react-router-dom';
import './AddressManagement.css';

const AddressManagement: React.FC = () => {
  const userAddress = {
    name: 'Clopy Studios',
    email: 'Clopy01@gmail.com',
    phoneNumber: '0540234571',
    address: 'Accra Ghana -Dans bar north kaneshie'
  };

  return (
    <section className="address-details">
      <div className="user-info">
        <p>Name: {userAddress.name}</p>
        <p>Email: {userAddress.email}</p>
        <p>Phone Number: {userAddress.phoneNumber}</p>
        <p>Address: {userAddress.address}</p>
      </div>
      <Link to="/shipping-address" className="edit-button">Edit</Link>
    </section>
  );
};

export default AddressManagement;

