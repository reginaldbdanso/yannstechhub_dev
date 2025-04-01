import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer_module.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSections">
          <div className="footerLogoSocial">
            <img src="/imgs/Logo (1).png" alt="YannsTechHub Footer Logo" className="logo" />
            <div className="socialIcons">
              <a href="#" className="socialLink" aria-label="Facebook">
                <img src="/imgs/Facebook.png" alt="" className="socialIcon" />
              </a>
              <a href="#" className="socialLink" aria-label="Twitter">
                <img src="/imgs/Twitter.png" alt="" className="socialIcon" />
              </a>
              <a href="#" className="socialLink" aria-label="Instagram">
                <img src="/imgs/Instagram.png" alt="" className="socialIcon" />
              </a>
              <a href="#" className="socialLink" aria-label="LinkedIn">
                <img src="/imgs/LinkedIn.png" alt="" className="socialIcon" />
              </a>
              <a href="#" className="socialLink" aria-label="YouTube">
                <img src="/imgs/YouTube.png" alt="" className="socialIcon" />
              </a>
              <a href="#" className="socialLink" aria-label="TikTok">
                <img src="/imgs/TikTok.png" alt="" className="socialIcon" />
              </a>
            </div>
          </div>
          <div className="footerLinks">
            <h3 className="footerHeading">Company</h3>
            <Link to="/about" className="footerLink">About Us</Link>
            <Link to="/careers" className="footerLink">Careers</Link>
          </div>
          <div className="footerLinks">
            <h3 className="footerHeading">Help</h3>
            <Link to="/legal" className="footerLink">Legal</Link>
            <Link to="/faqs" className="footerLink">FAQs</Link>
            <Link to="/contact" className="footerLink">Contact</Link>
          </div>
        </div>
      </div>
      <div className="copyright">@yannstechhub2025</div>
    </footer>
  );
};

export default Footer;