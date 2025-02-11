import React from 'react';
import '../styles/FAQs.css';

const FAQs: React.FC = () => {
  return (
    <div className="faqs-container">
      <div className="main-content">
        <div className="divider-top"></div>
        <div className="faqs-header">Frequently Asked Questions</div>
        <div className="faqs-content">
          <div className="faq-item">
            <h3>How do I track my order?</h3>
            <p>Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.</p>
          </div>

          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and mobile money payments. For specific regions, we also offer cash on delivery.</p>
          </div>

          <div className="faq-item">
            <h3>What is your return policy?</h3>
            <p>We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Please check our return policy page for detailed information.</p>
          </div>

          <div className="faq-item">
            <h3>Do you offer international shipping?</h3>
            <p>Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check our shipping information during checkout.</p>
          </div>

          <div className="faq-item">
            <h3>How can I contact customer support?</h3>
            <p>You can reach our customer support team through our contact page, email at support@yannstechhub.com, or call us at 1-800-TECH-HUB during business hours.</p>
          </div>

          <div className="faq-item">
            <h3>Do you offer warranty on products?</h3>
            <p>All products come with a manufacturer's warranty. The warranty period varies by product. Extended warranty options are available for select items.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;