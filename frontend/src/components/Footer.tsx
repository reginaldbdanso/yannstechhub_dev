import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  padding-top: 10px;
  width: 100%;
  margin-top: auto;
`;

const FooterContent = styled.div`
  padding: 73px 70px 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

const FooterSections = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 50%;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    align-items: start;
    text-align: start;
    gap: 5rem;
    justify-content: center;
  }
`;

const FooterLogoSocial = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 19px;
  gap: 33px;

  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.img`
  width: 18px;
  aspect-ratio: 1;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FooterHeading = styled.h3`
  color: #dedede;
  font-size: 17px;
  font-weight: 700;
  font-family: Inter, sans-serif;
`;

const FooterLink = styled(Link)`
  color: #fff;
  font: 300 12px Inter, sans-serif;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Create a separate styled component for social links
const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Copyright = styled.div`
  background-color: #191919;
  color: #fff;
  text-align: center;
  padding: 7px 70px 13px;
  font: 400 10px Inter, sans-serif;

  @media (max-width: 991px) {
    padding: 7px 20px;
  }
`;

const Logo = styled.img`
  aspect-ratio: 4.13;
  object-fit: contain;
  object-position: center;
  width: 132px;
  max-width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSections>
          <FooterLogoSocial>
            <Logo src="/imgs/Logo (1).png" alt="YannsTechHub Footer Logo" />
            <SocialIcons>
              <SocialLink href="#" aria-label="Facebook">
                <SocialIcon src="/imgs/Facebook.png" alt="" />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <SocialIcon src="/imgs/Twitter.png" alt="" />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <SocialIcon src="/imgs/Instagram.png" alt="" />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <SocialIcon src="/imgs/LinkedIn.png" alt="" />
              </SocialLink>
              <SocialLink href="#" aria-label="YouTube">
                <SocialIcon src="/imgs/YouTube.png" alt="" />
              </SocialLink>
              <SocialLink href="#" aria-label="TikTok">
                <SocialIcon src="/imgs/TikTok.png" alt="" />
              </SocialLink>
            </SocialIcons>
          </FooterLogoSocial>
          <FooterLinks>
            <FooterHeading>Company</FooterHeading>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
          </FooterLinks>
          <FooterLinks>
            <FooterHeading>Help</FooterHeading>
            <FooterLink to="/legal">Legal</FooterLink>
            <FooterLink to="/faqs">FAQs</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterSections>
      </FooterContent>
      <Copyright>@yannstechhub2025</Copyright>
    </FooterContainer>
  );
};

export default Footer; 