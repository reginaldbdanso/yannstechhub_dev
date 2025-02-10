import React from "react";
import './Footer.css';

function Footer() {
  return (
      <div className="main-content">
        <footer className="footer">
            <div className="footer-content">
              <div className="footer-sections">
                <div className="footer-logo-social">
                  <img src="/imgs/Logo (1).png" alt="YannsTechHub Footer Logo" className="logo" />
                  <div className="social-icons">
                    <a href="#" aria-label="Facebook">
                      <img src="/imgs/Facebook.png" alt="" className="social-icon" />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <img src="/imgs/Twitter.png" alt="" className="social-icon" />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <img src="/imgs/Instagram.png" alt="" className="social-icon" />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <img src="/imgs/LinkedIn.png" alt="" className="social-icon" />
                    </a>
                    <a href="#" aria-label="YouTube">
                      <img src="/imgs/YouTube.png" alt="" className="social-icon" />
                    </a>
                    <a href="#" aria-label="TickTok">
                      <img src="/imgs/TikTok.png" alt="" className="social-icon" />
                    </a>
                  </div>
                </div>
                <div className="footer-links">
                  <h3 className="footer-heading">Company</h3>
                  <a href="#about" className="footer-link">About Us</a>
                  <a href="#careers" className="footer-link">Careers</a>
                </div>
                <div className="footer-links">
                  <h3 className="footer-heading">Help</h3>
                  <a href="#legal" className="footer-link">Legal</a>
                  <a href="#faqs" className="footer-link">FAQs</a>
                  <a href="#contact" className="footer-link">Contact</a>
                </div>
              </div>
            </div>
            <div className="copyright">@yannstechhub2025</div>
      </footer>
    </div>
    );
}

export default Footer;