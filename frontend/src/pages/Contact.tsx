import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="main-content">
        <div className="divider-top"></div>
        <div className="contact-header">Contact Us</div>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We're here to help! Please feel free to reach out to us using any of the following methods:</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Customer Support</h3>
                <p>Email: support@yannstechhub.com</p>
                <p>Phone: 1-800-TECH-HUB</p>
                <p>Hours: Monday - Friday, 9:00 AM - 6:00 PM EST</p>
              </div>
              
              <div className="contact-method">
                <h3>Business Inquiries</h3>
                <p>Email: business@yannstechhub.com</p>
                <p>Phone: 1-800-TECH-BIZ</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;