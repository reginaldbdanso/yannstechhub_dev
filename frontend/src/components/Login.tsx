import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LoginContainer = styled.div`
  background-color: #eef2f4;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainContent = styled.div`
  background-color: #eef2f4;
  display: flex;
  width: 100%;
  align-self: center;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 0;
  position: relative;
  flex: 1;
`;

const Form = styled.div`
  background-color: #eef2f4;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const LoginFormContainer = styled.main`
  border-radius: 20px;
  background-color: #fff;
  align-self: center;
  margin: 40px 0;
  width: 100%;
  max-width: 30%;
  padding: 55px;

  @media (max-width: 991px) {
    max-width: 80%;
    margin: 40px 20px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-size: 12px;
`;

const LoginTitle = styled.h1`
  font-size: 20px;
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  align-self: center;
  margin: 0;
`;

const InputGroup = styled.div`
  background-color: #f7f7fa;
  display: flex;
  margin-top: 10px;
  min-height: 35px;
  padding: 9px 22px;
  align-items: center;
  gap: 40px;
  justify-content: space-between;

  &:first-of-type {
    margin-top: 63px;
  }
`;

const LoginInput = styled.input`
  border: none;
  background: transparent;
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 12px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const InputIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 18px;
`;

const SubmitButton = styled.button`
  border-radius: 20px;
  background-color: #000;
  margin-top: 10px;
  min-height: 35px;
  padding: 10px;
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  border: none;
  cursor: pointer;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;
    display: block;
    width: 100%;
  }
`;

const FormFooter = styled.div`
  display: flex;
  margin-top: 14px;
  align-items: stretch;
  gap: 33px;
`;

const SignupText = styled.p`
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  margin: 0;
`;

const SignupLink = styled(Link)`
  color: #423eff;
  text-decoration: none;
`;

const ForgotPassword = styled(Link)`
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password });
    // Navigate to user-account after successful login
    navigate('/user-account');
  };

  return (
    <LoginContainer>
      <MainContent>
        <Header />
        <Form>
          <LoginFormContainer>
            <LoginForm onSubmit={handleSubmit}>
              <LoginTitle>Log In</LoginTitle>

              <InputGroup>
                <LoginInput
                  type="text"
                  placeholder="Username or Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <InputIcon src="/imgs/User.png" alt="" />
              </InputGroup>

              <InputGroup>
                <LoginInput
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputIcon src="/imgs/Lock.png" alt="" />
              </InputGroup>

              <SubmitButton type="submit">
                <Link to="/user-account">Submit</Link>
              </SubmitButton>

              <FormFooter>
                <SignupText>
                  Don't have an account?{' '}
                  <SignupLink to="/signup">Sign up</SignupLink>
                </SignupText>
                <ForgotPassword to="/reset-password">
                  Forget password Reset
                </ForgotPassword>
              </FormFooter>
            </LoginForm>
          </LoginFormContainer>
        </Form>
      </MainContent>
      <Footer />
    </LoginContainer>
  );
};

export default Login; 