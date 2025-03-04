import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

// Styled Components
const FAQsPage = styled.div`
  background-color: #fff;
  padding-top: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FAQsContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: start;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 15px;
  color: #000;
  font-weight: 300;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const MainContent = styled.div`
  align-self: center;
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%;
    align-items: start;
    padding-bottom: 40px;
  }
`;

const FAQTitle = styled.h1`
  margin: 40px;
  font-family: Inter, sans-serif;

  @media (max-width: 991px) {
    text-align: center;
    margin: 40px 0 20px 10px;
  }
`;

const FAQDescription = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 23px;
  text-align: justify;
  padding-right: 20px;
  margin-left: 77px;
  font-family: "Inter", sans-serif;
`;

const FAQContent = styled.section`
  background-color: #fff;
  margin-top: 10px;
  padding: 30px 70px 94px;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  color: #000;
  font-weight: 300;
  line-height: 23px;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px 110px;
  }
`;

const SectionTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 1em;
`;

const FAQSection = styled.article`
  display: flex;
  flex-direction: column;
`;

const TopicTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 2;
  font-family: "Inter", sans-serif;
`;

const FAQList = styled.ul`
  list-style-type: none;
  padding-left: 25px;

  p {
    padding-bottom: 1rem;
    margin: 0;
  }

  li {
    list-style: disc;
  }
`;

// Component Definition
const FAQs: React.FC = () => {
  return (
    <FAQsPage>
      <FAQsContainer>
        <Header />
      </FAQsContainer>

      <MainContent>
        <FAQTitle>Purpose of FAQs</FAQTitle>
        <FAQDescription>
          The FAQs section serves as a comprehensive resource to address common
          queries customers might have about your platform, products, policies, and
          processes. It's designed to provide quick answers, reduce customer service
          workload, and improve the overall shopping experience.
        </FAQDescription>

        <FAQContent>
          <SectionTitle>Key Topics to Include in FAQs</SectionTitle>
          <p>
            Below are the main categories and examples of questions that could appear
            in the FAQ section, along with elaboration:
          </p>

          {/* Previous sections remain the same */}
          <FAQSection>
            <TopicTitle>3. Product Information</TopicTitle>
            <FAQList>
              <li>Are all products genuine and original?</li>
              <p>Yes, Yannstech Hub only offers 100% authentic products from trusted manufacturers and distributors.</p>
              <li>Do the gadgets come with warranties?</li>
              <p>Most of our gadgets come with a manufacturer's warranty. Warranty details can be found on the product page or in the packaging.</p>
              <li>How can I find detailed specifications for a product?</li>
              <p>Each product page includes detailed specifications, features, and images to help you make an informed decision.</p>
            </FAQList>
          </FAQSection>

          {/* Ordering Process Section */}
          <FAQSection>
            <TopicTitle>4. Ordering Process</TopicTitle>
            <FAQList>
              <li>How do I place an order?</li>
              <p>Browse our catalog, add your desired products to the cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.</p>
              <li>Can I modify or cancel my order after placing it?</li>
              <p>Orders can be modified or canceled within [X] hours of placement. Contact our customer support team for assistance.</p>
              <li>What payment methods are accepted?</li>
              <p>Yannstech Hub accepts credit/debit cards, PayPal, bank transfers, and other local payment methods, depending on your location.</p>
              <li>Will I receive an order confirmation?</li>
              <p>Yes, you will receive a confirmation email and/or SMS with your order details once your payment is successful.</p>
            </FAQList>
          </FAQSection>

          {/* Shipping and Delivery Section */}
          <FAQSection>
            <TopicTitle>5. Shipping and Delivery</TopicTitle>
            <FAQList>
              <li>How long will it take to receive my order?</li>
              <p>Delivery times vary based on your location and the chosen shipping method. Estimated delivery timelines are provided at checkout.</p>
              <li>Do you ship internationally?</li>
              <p>Yes, Yannstech Hub ships to most countries worldwide. Shipping fees and delivery times will vary depending on your location.</p>
              <li>How can I track my order?</li>
              <p>Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the courier's site.</p>
              <li>What happens if my order is delayed?</li>
              <p>If your order is delayed, contact our support team, and we will investigate the issue with the courier service.</p>
            </FAQList>
          </FAQSection>

          {/* Returns and Refunds Section */}
          <FAQSection>
            <TopicTitle>6. Returns and Refunds</TopicTitle>
            <FAQList>
              <li>What is your return policy?</li>
              <p>We accept returns for eligible products within [X] days of delivery. Items must be unused, in their original packaging, and accompanied by a receipt.</p>
              <li>How do I request a return?</li>
              <p>To request a return, log in to your account, go to "My Orders," select the order you want to return, and follow the return process.</p>
              <li>When will I receive my refund?</li>
              <p>Refunds are processed within [X] business days of receiving and inspecting the returned item. The refund will be issued to the original payment method.</p>
              <li>What should I do if I receive a defective product?</li>
              <p>Contact our customer support team immediately with your order details and photos of the defective product. We will arrange for a replacement or refund.</p>
            </FAQList>
          </FAQSection>

          {/* Payment and Security Section */}
          <FAQSection>
            <TopicTitle>7. Payment and Security</TopicTitle>
            <FAQList>
              <li>Is it safe to shop on Yannstech Hub?</li>
              <p>Yes, our platform uses SSL encryption to protect your personal and payment information.</p>
              <li>What currencies can I pay in?</li>
              <p>Yannstech Hub accepts multiple currencies. Your currency options will depend on your location and payment method.</p>
              <li>Why was my payment declined?</li>
              <p>Payments may be declined due to incorrect details, insufficient funds, or technical issues. Double-check your information or contact your bank for assistance.</p>
              <li>Are there additional charges for international orders?</li>
              <p>International orders may be subject to customs duties or taxes, which are the responsibility of the customer.</p>
            </FAQList>
          </FAQSection>

          {/* Promotions and Discounts Section */}
          <FAQSection>
            <TopicTitle>8. Promotions and Discounts</TopicTitle>
            <FAQList>
              <li>How can I find current promotions?</li>
              <p>Check our "Offers" page or subscribe to our newsletter for updates on discounts and special deals.</p>
              <li>Can I use multiple discount codes on a single order?</li>
              <p>Only one discount code can be applied per order unless stated otherwise.</p>
              <li>Do you offer student or military discounts?</li>
              <p>Yes, we offer special discounts for students and military personnel. Contact our support team for verification.</p>
            </FAQList>
          </FAQSection>

          {/* Customer Support Section */}
          <FAQSection>
            <TopicTitle>9. Customer Support</TopicTitle>
            <FAQList>
              <li>How can I contact customer support?</li>
              <p>You can reach us via email, live chat, or by calling our customer support hotline. Contact details are available on our "Contact Us" page.</p>
              <li>What are your customer support hours?</li>
              <p>Our support team is available [X] days a week, from [X AM] to [X PM].</p>
              <li>Do you offer technical support for gadgets?</li>
              <p>Yes, we provide basic technical support. For advanced issues, please refer to the manufacturer's support service.</p>
            </FAQList>
          </FAQSection>

          {/* Legal and Policies Section */}
          <FAQSection>
            <TopicTitle>10. Legal and Policies</TopicTitle>
            <FAQList>
              <li>Where can I find your terms and conditions?</li>
              <p>Our Terms and Conditions, Privacy Policy, and other legal documents are available in the footer of our website.</p>
              <li>Do you comply with international privacy laws?</li>
              <p>Yes, we comply with privacy laws such as GDPR (Europe) and CCPA (California).</p>
              <li>How are disputes resolved?</li>
              <p>Disputes are resolved through arbitration or as per the governing laws of [Your Region].</p>
            </FAQList>
          </FAQSection>
        </FAQContent>
      </MainContent>
      <Footer />
    </FAQsPage>
  );
};

export default FAQs; 