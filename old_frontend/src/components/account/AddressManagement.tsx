import React from 'react';

const AddressManagement: React.FC = () => {
  return (
    <section className="address-details">
      <div className="user-info">
        <p>Name: Clopy Studios</p>
        <p>Email: Clopy01@gmail.com</p>
        <p>Phone Number: 0540234571</p>
        <p>Address: Accra Ghana -Dans bar north kaneshie</p>
      </div>
      <button className="edit-button">Edit</button>
    </section>
  );
};

export default AddressManagement;