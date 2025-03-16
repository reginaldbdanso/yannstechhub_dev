import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const ContactPage = styled.div`
  background-color: #fff;
  display: flex;
  padding-top: 21px;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const MainSection = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 21px 0 100px;
`;

const PageTitle = styled.h1`
  color: #000;
  font-size: 80px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin-top: 100px;

  @media (max-width: 991px) {
    margin-top: 80px;
    font-size: 40px;
  }
`;

const ContactContent = styled.main`
    margin-top: 36px;
    width: 100%;
    max-width: 50%;
    display: flex;
    gap: 20px;

  @media (max-width: 991px) {
    max-width: 80%;
    align-self: center;
    flex-direction: column-reverse;
  }
`;

const ContactInfo = styled.section`
  width: 34%;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #000;
  font-weight: 300;
  line-height: 2;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const InfoBlock = styled.div<{ marginTop?: string }>`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: ${props => props.marginTop || '0'};

  @media (max-width: 991px) {
    margin-top: ${props => props.marginTop === '60px' ? '40px' : props.marginTop};
  }
`;

const InfoIcon = styled.img`
  width: 19px;
  height: 19px;
  object-fit: contain;
`;

const ContactForm = styled.section`
  width: 66%;
  font-family: "Inter", sans-serif;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 31px;
`;

const FormLabel = styled.label`
  color: #010101;
  font-size: 9px;
  font-weight: 400;
`;

const FormInput = styled.input`
  color: #000;
  font-size: 12px;
  font-weight: 300;
  margin-top: 8px;
  margin-bottom: 0px;
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: "Inter", sans-serif;

  &::placeholder {
    color:rgb(172, 167, 167);
  }
`;

const InputUnderline = styled.img`
  width: 100%;
  max-width: 350px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 30px;
`;

const MessageText = styled.textarea`
  color: #000;
  font-size: 12px;
  font-weight: 300;
  line-height: 15px;
  margin-top: 8px;
  border: none;
  margin-right: 25px;
  width: 100%;
  outline: none;
  background: transparent;
  font-family: "Inter", sans-serif;
  resize: vertical;
  min-height: 80px;

  &::placeholder {
    color:rgb(172, 167, 167);
  }

  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const FormUnderline = styled.img`
  width: 100%;
  max-width: 100%;
`;

const SubmitButton = styled.button`
  border-radius: 30px;
  background-color: #0055b6;
  margin-top: 56px;
  width: 250px;
  padding: 13px;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  color: #ffffff;
  font-weight: 700;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <ContactPage>
      <Header />
      
      <MainSection>
        <PageTitle>Contact</PageTitle>

        <ContactContent>
          <ContactInfo>
            <InfoBlock>
              <InfoIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/be23c695d749789f60e0f9917d7896d05deff64dad39430a36bf44807b81be6c"
                alt="Location"
              />
              <p>
                Number 1 Lindsay Park,<br />
                Achimota. Accra, Ghana
              </p>
            </InfoBlock>

            <InfoBlock marginTop="46px">
              <InfoIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9140f9e8d47dae9050877a0d25650864eaeeda7042f8f1fb0c9a3ad72e310764"
                alt="Phone"
              />
              <p>+233 (0)302 449 037</p>
            </InfoBlock>

            <InfoBlock marginTop="60px">
              <InfoIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c85614f5e0fc30d41723ea2a8c20c8daefbaeafee3727e6634732c92a9d0a3b"
                alt="Email"
              />
              <p>info@yannstechhub.com</p>
            </InfoBlock>
          </ContactInfo>

          <ContactForm as="form" onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <FormInput
                id="name"
                name="name"
                type="text"
                placeholder="Clopy Kwesi"
                value={formData.name}
                onChange={handleChange}
              />
              <InputUnderline
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f68e8f7217c63ca8685b7764ee17960359904c2982129583ab5e50cbe307cabd"
                alt=""
              />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormInput
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+233 50 453 7000"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <InputUnderline
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1040dd8ef6693677da77be31e1f3af923351ffbfc8d9e4d7ff957213107a3f"
                  alt=""
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Clopy@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputUnderline
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1040dd8ef6693677da77be31e1f3af923351ffbfc8d9e4d7ff957213107a3f"
                  alt=""
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <MessageText
                id="message"
                name="message"
                rows={4}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu orci, molestie nec eget felis justo, sed."
                value={formData.message}
                onChange={handleChange}
              />
              <FormUnderline
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f68e8f7217c63ca8685b7764ee17960359904c2982129583ab5e50cbe307cabd"
                alt=""
              />
            </FormGroup>

            <SubmitButton type="submit">Submit</SubmitButton>
          </ContactForm>
        </ContactContent>
      </MainSection>

      <Footer />
    </ContactPage>
  );
};

export default Contact; 