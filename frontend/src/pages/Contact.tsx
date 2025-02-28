import React, { FormEvent } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="contact">
      <main className="main-section">
        <h1 className="page-title">Contact</h1>

        <main className="contact-content">
          <section className="contact-info">
            <div className="address-block">
              <img
                src="/src/assets/location-icon.png"
                alt="Location"
                className="info-icon"
              />
              <p className="address-text">
                Number 1 Lindsay Park,<br />
                Achimota. Accra, Ghana
              </p>
            </div>

            <div className="phone-block">
              <img
                src="/src/assets/phone-icon.png"
                alt="Phone"
                className="info-icon"
              />
              <p className="phone-text">+233 (0)302 449 037</p>
            </div>

            <div className="email-block">
              <img
                src="/src/assets/email-icon.png"
                alt="Email"
                className="info-icon"
              />
              <p className="email-text">info@yannstechhub.com</p>
            </div>
          </section>

          <section className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input 
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                  required
                />
                <div className="input-underline" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input 
                    type="tel"
                    className="form-input"
                    placeholder="+233 XX XXX XXXX"
                    required
                  />
                  <div className="input-underline" />
                </div>

                <div className="form-group">
                  <label className="form-label">E-mail</label>
                  <input 
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                  <div className="input-underline" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  className="message-text"
                  rows={4}
                  placeholder="Type your message here..."
                  required
                />
                <div className="form-underline" />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </section>
        </main>
      </main>
    </div>
  );
};

export default Contact;