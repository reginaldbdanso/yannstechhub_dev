import React from 'react';
import '../styles/Legal.css';

const Legal: React.FC = () => {
  return (
    <div className="legal">
      <div className="legal-container">
        <div className="main-content">
          <h1 className="legal-title">Legal Overview</h1>
          <p className="legal-intro">
            Legal information serves as the foundation for the relationship between
            Yannstech Hub and its users. These policies are essential to outline the
            rights, obligations, and protections for both the platform and its
            customers. Here's an in-depth breakdown of the key legal points:
          </p>
          <section className="legal-highlights">
            <article className="highlight-item">
              <h2 className="highlight-title">Privacy Policy:</h2>
              <p className="highlight-text">
                "Learn how we collect, use, and protect your personal information when
                you use Yannstech Hub."
              </p>
            </article>
            <article className="highlight-item">
              <h2 className="highlight-title">Cookie Policy:</h2>
              <p className="highlight-text">
                "Understand how we use cookies to enhance your shopping experience and
                manage your preferences."
              </p>
            </article>
            <article className="highlight-item">
              <h2 className="highlight-title">Compliance & Security:</h2>
              <p className="highlight-text">
                "Discover the steps we take to ensure your data and transactions are
                secure."
              </p>
            </article>
          </section>
          <section className="legal-content">
            <article className="policy-section">
              <h2 className="section-title">1. Privacy Policy</h2>
              <p>The Privacy Policy outlines how Yannstech Hub collects, uses, stores, and protects customer data.</p>
              <ul className="policy-list">
                <li>Data Collection: We collect personal information such as your name, email address, shipping details, and payment methods to process orders and enhance your shopping experience.</li>
                <li>Usage of Data: Your data may be used for order processing, customer support, marketing communications (with your consent), and improving our website's functionality.</li>
                <li>Third-Party Sharing: Yannstech Hub may share data with third-party partners, such as payment processors or delivery services, to fulfill your order.</li>
                <li>Customer Rights: You have the right to access, correct, or delete your data. You may also request to opt out of marketing communications at any time.</li>
              </ul>

              <h2 className="section-title">2. Terms of Service</h2>
              <p>The Terms of Service govern your use of Yannstech Hub's platform. By accessing or purchasing through the website, you agree to abide by these terms.</p>
              <ul className="policy-list">
                <li>User Responsibilities: You must provide accurate information when creating an account or placing an order.</li>
                <li>Product Descriptions: While we strive for accuracy, product images and descriptions are for illustrative purposes only.</li>
                <li>Account Suspension: Yannstech Hub reserves the right to suspend or terminate accounts found violating these terms.</li>
              </ul>

              <h2 className="section-title">3. Refund and Returns Policy</h2>
              <p>The Refund and Returns Policy defines the process for handling returns, exchanges, and refunds.</p>
              <ul className="policy-list">
                <li>Return Window: Customers have 30 days from the date of delivery to request a return.</li>
                <li>Eligibility: Products must be unused, undamaged, and in their original packaging to qualify for a return.</li>
                <li>Refund Processing: Refunds are issued to the original payment method and may take up to 7 business days to process.</li>
              </ul>

              <h2 className="section-title">4. Security</h2>
              <p>Security measures are implemented to protect customer data and ensure safe transactions.</p>
              <ul className="policy-list">
                <li>Encryption: Yannstech Hub uses advanced SSL encryption to safeguard sensitive information.</li>
                <li>Two-Factor Authentication: We encourage users to enable two-factor authentication (2FA) for added security.</li>
                <li>Incident Reporting: If you suspect unauthorized access to your account, notify us immediately.</li>
              </ul>

              <h2 className="section-title">5. Shipping and Delivery</h2>
              <p>The Shipping Policy ensures transparency about how products are delivered.</p>
              <ul className="policy-list">
                <li>Delivery Timeline: Estimated delivery dates are provided at checkout.</li>
                <li>Shipping Costs: These are calculated based on the shipping method, location, and package weight.</li>
                <li>Lost or Damaged Goods: Customers must report issues promptly to initiate a claim.</li>
              </ul>

              <h2 className="section-title">6. Intellectual Property</h2>
              <p>All content on Yannstech Hub is protected under copyright and trademark laws.</p>
              <ul className="policy-list">
                <li>Ownership: Yannstech Hub owns or licenses all intellectual property displayed on the platform.</li>
                <li>Restrictions: Users are prohibited from reproducing or distributing content without permission.</li>
                <li>Trademarks: Third-party trademarks are the property of their respective owners.</li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;