import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LoginContainer = styled.div`
  background-color: #fff;
`;

const LoginWrapper = styled.div`
  background-color: #eef2f4;
  padding-top: 21px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 160px;
`;

const MainContent = styled.main`
  margin-top: 61px;
  width: 100%;
  max-width: 70%;
  align-self: center;
`;

const ContentGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10%;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

const ImageSection = styled.section`
  width: 50%;
  border-radius: 20px 0 0 20px;
  background-color: #182126;
  padding: 47px 10px;
  overflow: hidden;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const HeroImage = styled.img`
  height: 578px;
  align-self: center;
  width: 100%;
  object-fit: cover;
`;

const FormSection = styled.section`
  width: 50%;
  border-radius: 0 20px 20px 0;
  background-color: #fff;
  padding: 47px 60px;
  font-family: "Open Sans", -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    width: 100%;
    padding: 47px 10px;
  }
`;

const FormTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #182126;
  text-align: center;
  margin: 0 0 27px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 991px) {
    padding: 0px 60px;
  }
`;

const FormInput = styled.input`
  background-color: #f7f7fa;
  padding: 10px 23px;
  font-size: 12px;
  color: #182126;
  border: none;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const InputGroup = styled.div`
  background-color: #f7f7fa;
  display: flex;
  align-items: center;
  padding: 9px 22px;
  gap: 20px;
`;

const InputIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`;

const UsernameNote = styled.p`
  color: #423eff;
  font-size: 8px;
  margin: 10px 0 0 23px;
`;

const SubmitButton = styled(Link)`
  background-color: #000;
  color: #fff;
  border: none;
  width: 95%;
  border-radius: 20px;
  padding: 10px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: none;
  display: block;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 24px 0;
`;

const DividerLine = styled.span`
  flex-grow: 1;
  height: 1px;
  background-color: rgba(24, 33, 38, 0.3);
`;

const DividerText = styled.span`
  font-size: 12px;
  color: #182126;
`;

const SocialLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 8px 0;
`;

const SocialText = styled.p`
  font-size: 12px;
  color: #182126;
  margin: 0;
`;

const SocialLoginIcons = styled.div`
  display: flex;
  gap: 8px;
`;

const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const LoginLink = styled.p`
  text-align: center;
  margin: 15px 0 0;
  font-size: 12px;
`;

const LinkBlue = styled(Link)`
  color: #423eff;
  text-decoration: none;
`;

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <Header />
        <MainContent>
          <ContentGrid>
            <ImageSection>
              <HeroImage src="/imgs/sign-up.png" alt="Login hero image" loading="lazy" />
            </ImageSection>

            <FormSection>
              <FormTitle>Create a new Account</FormTitle>
              
              <SignupForm onSubmit={handleSubmit}>
                <FormInput
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <FormInput
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                
                <InputGroup>
                  <FormInput
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <InputIcon src="/imgs/User.png" alt="Username icon" loading="lazy" />
                </InputGroup>
                <UsernameNote>*Can't change username</UsernameNote>
                
                <InputGroup>
                  <FormInput
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputIcon src="/imgs/Gmail.png" alt="Email icon" loading="lazy" />
                </InputGroup>
                
                <InputGroup>
                  <FormInput
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <InputIcon src="/imgs/Lock.png" alt="Password icon" loading="lazy" />
                </InputGroup>
                
                <InputGroup>
                  <FormInput
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <InputIcon src="/imgs/Lock.png" alt="Password icon" loading="lazy" />
                </InputGroup>
                
                <SubmitButton to="/login">Get Started</SubmitButton>
              </SignupForm>

              <Divider>
                <DividerLine />
                <DividerText>Or</DividerText>
                <DividerLine />
              </Divider>

              <SocialLogin>
                <SocialText>Create account with</SocialText>
                <SocialLoginIcons>
                  <SocialIcon src="/imgs/Google.png" alt="Google login" loading="lazy" />
                  <SocialIcon src="/imgs/Apple.png" alt="Apple login" loading="lazy" />
                </SocialLoginIcons>
              </SocialLogin>

              <LoginLink>
                Already have an account? <LinkBlue to="/login">Log in</LinkBlue>
              </LoginLink>
            </FormSection>
          </ContentGrid>
        </MainContent>
        <Footer />
      </LoginWrapper>
    </LoginContainer>
  );
};

export default SignUp; 