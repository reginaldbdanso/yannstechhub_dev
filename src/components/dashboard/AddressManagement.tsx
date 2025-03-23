import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddressDetails = styled.section`
  width: 79%;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  padding: 40px 79px 114px;

  @media (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const UserInfo = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  color: #000;
  font-weight: 500;
  line-height: 40px;
`;

const EditButton = styled(Link)`
  display: inline-block;
  width: 135px;
  border-radius: 30px;
  background-color: #000;
  margin-top: 41px;
  min-height: 45px;
  padding: 13px;
  color: #ffffff;
  font-weight: 700;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

const AddressManagement: React.FC = () => {
  const userAddress = {
    name: 'Clopy Studios',
    email: 'Clopy01@gmail.com',
    phoneNumber: '0540234571',
    address: 'Accra Ghana -Dans bar north kaneshie'
  };

  return (
    <AddressDetails>
      <UserInfo>
        <p>Name: {userAddress.name}</p>
        <p>Email: {userAddress.email}</p>
        <p>Phone Number: {userAddress.phoneNumber}</p>
        <p>Address: {userAddress.address}</p>
      </UserInfo>
      <EditButton to="/shipping-address">Edit</EditButton>
    </AddressDetails>
  );
};

export default AddressManagement; 