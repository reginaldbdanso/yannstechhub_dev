import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileInfo = styled.article`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 63px 80px 103px;
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    padding: 20px;
    margin-top: 16px;
  }
`;

const WelcomeHeading = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

const SectionHeading = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 2;
  color: #000;
  margin: -7px 0 0;
`;

const UserDetails = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 40px;
  color: #000;
  margin-top: 33px;
`;

const ActionButtons = styled.div`
  display: flex;
  margin-top: 44px;
  gap: 37px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
  border: none;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  min-height: 45px;
  padding: 13px 59px;
  background-color: ${props => props.variant === 'primary' ? '#0055b6' : '#000'};

  @media (max-width: 991px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding: 10px 12px;
  }
`;

const Form = styled.form`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  color: #000;
  font-weight: 500;
`;

const FormRow = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 15px;
`;

const FormGroup = styled.div`
  flex: 1;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  width: 100%;
  height: 49px;
  padding: 0 15px;
`;

const SaveButton = styled.button`
  display: block;
  width: 250px;
  margin: 22px auto 0;
  border-radius: 30px;
  background-color: #0055b6;
  color: #ffffff;
  font-weight: 700;
  padding: 13px;
  border: none;
  cursor: pointer;
  text-align: center;
`;

const MyAccount: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Clopy',
    lastName: 'Studios',
    email: 'Clopy01@gmail.com',
    phoneNumber: '0540234571',
    dateOfBirth: '2024-01-11'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <ProfileInfo>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <FormLabel>First Name</FormLabel>
              <FormInput
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Last Name</FormLabel>
              <FormInput
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormRow>
            <FormGroup>
              <FormLabel>Phone number</FormLabel>
              <FormInput
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Date of Birth</FormLabel>
              <FormInput
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </FormGroup>
          </FormRow>

          <SaveButton type="submit">Save</SaveButton>
        </Form>
      </ProfileInfo>
    );
  }

  if (isChangingPassword) {
    return (
      <ProfileInfo>
        <Form onSubmit={(e) => {
          e.preventDefault();
          setIsChangingPassword(false);
        }}>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput type="email" value={formData.email} readOnly />
          </FormGroup>

          <FormGroup>
            <FormLabel>Current password</FormLabel>
            <FormInput type="password" />
          </FormGroup>

          <FormGroup>
            <FormLabel>New password</FormLabel>
            <FormInput type="password" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Confirm password</FormLabel>
            <FormInput type="password" />
          </FormGroup>

          <SaveButton type="submit">Save</SaveButton>
        </Form>
      </ProfileInfo>
    );
  }

  return (
    <ProfileInfo>
      <WelcomeHeading>Welcome, {formData.firstName}</WelcomeHeading>
      <SectionHeading>Personal information</SectionHeading>
      <UserDetails>
        Name: {formData.firstName} {formData.lastName}<br />
        Email: {formData.email}<br />
        Phone Number: {formData.phoneNumber}<br />
        Date of Birth: {formData.dateOfBirth}
      </UserDetails>
      <ActionButtons>
        <Button variant="primary" onClick={() => setIsChangingPassword(true)}>
          Change Password
        </Button>
        <Button variant="secondary" onClick={() => setIsEditing(true)}>
          Edit
        </Button>
      </ActionButtons>
    </ProfileInfo>
  );
};

export default MyAccount; 