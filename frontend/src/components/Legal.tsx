import React from 'react';
import styled from 'styled-components';
import Header from './Header';  // Import the shared Header component
import Footer from './Footer';  // Import the shared Footer component

const LegalPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 40px; // Increased top padding to account for fixed header
`;

const LegalTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const LegalIntro = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #666;
`;

const LegalHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const HighlightCard = styled.div`
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  p {
    color: #666;
    line-height: 1.5;
  }
`;

const PolicySection = styled.section`
  margin-bottom: 40px;
  
  p {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #333;
`;

const PolicyList = styled.ul`
  margin: 10px 0;
  padding-left: 20px;
  
  li {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 8px;
    color: #333;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Legal: React.FC = () => {
  return (
    <LegalPage>
      <Header />
      <MainContent>
        <LegalTitle>Legal Overview</LegalTitle>
        <LegalIntro>
          Legal information serves as the foundation for the relationship between
          Yannstech Hub and its users. These policies are essential to outline the
          rights, obligations, and protections for both the platform and its
          customers.
        </LegalIntro>

        <LegalHighlights>
          <HighlightCard>
            <h3>Privacy Policy</h3>
            <p>Learn how we collect, use, and protect your personal information when
              you use Yannstech Hub.</p>
          </HighlightCard>
          <HighlightCard>
            <h3>Cookie Policy</h3>
            <p>Understand how we use cookies to enhance your shopping experience and
              manage your preferences.</p>
          </HighlightCard>
          <HighlightCard>
            <h3>Compliance & Security</h3>
            <p>Discover the steps we take to ensure your data and transactions are
              secure.</p>
          </HighlightCard>
        </LegalHighlights>

        <PolicySection>
          <SectionTitle>1. Privacy Policy</SectionTitle>
          <p>The Privacy Policy outlines how Yannstech Hub collects, uses, stores, and protects customer data.</p>
          <PolicyList>
            <li>Data Collection: We collect personal information such as your name, email address, shipping details, and payment methods.</li>
            <li>Usage of Data: Your data may be used for order processing, customer support, and improving our website's functionality.</li>
            <li>Third-Party Sharing: We may share data with payment processors or delivery services to fulfill your order.</li>
            <li>Customer Rights: You have the right to access, correct, or delete your data.</li>
            <li>Compliance: We comply with data protection laws, such as GDPR and CCPA.</li>
          </PolicyList>
        </PolicySection>

        <PolicySection>
          <SectionTitle>2. Terms of Service</SectionTitle>
          <p>The Terms of Service govern your use of Yannstech Hub's platform.</p>
          <PolicyList>
            <li>User Responsibilities: You must provide accurate information when creating an account.</li>
            <li>Product Descriptions: Product images and descriptions are for illustrative purposes only.</li>
            <li>Account Suspension: We reserve the right to suspend accounts violating these terms.</li>
            <li>Prohibited Actions: Activities like hacking, data scraping, or unauthorized resale are forbidden.</li>
          </PolicyList>
        </PolicySection>

        <PolicySection>
          <SectionTitle>3. Refund and Returns Policy</SectionTitle>
          <p>The Refund and Returns Policy defines the process for handling returns, exchanges, and refunds.</p>
          <PolicyList>
            <li>Return Window: Customers have 30 days from the date of delivery to request a return.</li>
            <li>Eligibility: Products must be unused, undamaged, and in their original packaging.</li>
            <li>Refund Processing: Refunds are issued to the original payment method within 7 business days.</li>
          </PolicyList>
        </PolicySection>
      </MainContent>
      <Footer />
    </LegalPage>
  );
};

export default Legal; 