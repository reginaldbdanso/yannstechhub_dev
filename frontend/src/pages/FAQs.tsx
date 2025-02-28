import React from 'react';
import '../styles/FAQs.css';

const FAQs: React.FC = () => {
  return (
    <div className="faqs">
      <div className="faqs-container">
        <div className="main-content">
          <h1 className="faq-title">Purpose of FAQs</h1>
          <p className="faq-description">
            The FAQs section serves as a comprehensive resource to address common
            queries customers might have about your platform, products, policies, and
            processes. It's designed to provide quick answers, reduce customer service
            workload, and improve the overall shopping experience.
          </p>

          <section className="faq-content">
            <h2 className="section-title">Key Topics to Include in FAQs</h2>
            <p>
              Below are the main categories and examples of questions that could appear
              in the FAQ section, along with elaboration:
            </p>

            <article className="faq-section">
              <h3 className="topic-title">1. About Yannstech Hub</h3>
              <ul className="faq-list">
                <li>What is Yannstech Hub?</li>
                <p>Yannstech Hub is an e-commerce platform specializing in gadgets and devices, offering customers a wide range of tech products at competitive prices.</p>
                <li>Where is Yannstech Hub located?</li>
                <p>Yannstech Hub operates globally with headquarters in [Your City, Country]. All orders are processed and shipped from our regional warehouses.</p>
                <li>What makes Yannstech Hub unique?</li>
                <p>We focus on offering high-quality tech products, fast delivery, and exceptional customer service. Additionally, we provide a secure and user-friendly online shopping experience.</p>
              </ul>
            </article>

            {/* Additional FAQ sections */}
            <article className="faq-section">
              <h3 className="topic-title">2. Account Management</h3>
              <ul className="faq-list">
                <li>How do I create an account?</li>
                <p>To create an account, click on the "Sign Up" button on our homepage, fill in your details, and verify your email address.</p>
                <li>I forgot my password. What should I do?</li>
                <p>Click on the "Forgot Password?" link on the login page. Enter your registered email, and you will receive instructions to reset your password.</p>
                <li>Can I place an order without creating an account?</li>
                <p>Yes, we offer a guest checkout option, but creating an account allows you to track orders, save shipping details, and enjoy faster checkouts in the future.</p>
              </ul>
            </article>

            <article className="faq-section">
              <h3 className="topic-title">3. Product Information</h3>
              <ul className="faq-list">
                <li>Are all products genuine and original?</li>
                <p>Yes, Yannstech Hub only offers 100% authentic products from trusted manufacturers and distributors.</p>
                <li>Do the gadgets come with warranties?</li>
                <p>Most of our gadgets come with a manufacturer's warranty. Warranty details can be found on the product page or in the packaging.</p>
                <li>How can I find detailed specifications for a product?</li>
                <p>Each product page includes detailed specifications, features, and images to help you make an informed decision.</p>
              </ul>
            </article>

            <article className="faq-section">
              <h3 className="topic-title">4. Ordering Process</h3>
              <ul className="faq-list">
                <li>How do I place an order?</li>
                <p>Browse our catalog, add your desired products to the cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.</p>
                <li>Can I modify or cancel my order after placing it?</li>
                <p>Orders can be modified or canceled within [X] hours of placement. Contact our customer support team for assistance.</p>
                <li>What payment methods are accepted?</li>
                <p>Yannstech Hub accepts credit/debit cards, PayPal, bank transfers, and other local payment methods, depending on your location.</p>
              </ul>
            </article>

            <article className="faq-section">
              <h3 className="topic-title">5. Shipping and Delivery</h3>
              <ul className="faq-list">
                <li>How long will it take to receive my order?</li>
                <p>Delivery times vary based on your location and the chosen shipping method. Estimated delivery timelines are provided at checkout.</p>
                <li>Do you ship internationally?</li>
                <p>Yes, Yannstech Hub ships to most countries worldwide. Shipping fees and delivery times will vary depending on your location.</p>
                <li>How can I track my order?</li>
                <p>Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the courier's site.</p>
              </ul>
            </article>

            <article className="faq-section">
              <h3 className="topic-title">6. Returns and Refunds</h3>
              <ul className="faq-list">
                <li>What is your return policy?</li>
                <p>We accept returns for eligible products within [X] days of delivery. Items must be unused, in their original packaging, and accompanied by a receipt.</p>
                <li>How do I request a return?</li>
                <p>To request a return, log in to your account, go to "My Orders," select the order you want to return, and follow the return process.</p>
                <li>When will I receive my refund?</li>
                <p>Refunds are processed within [X] business days of receiving and inspecting the returned item. The refund will be issued to the original payment method.</p>
                <li>What should I do if I receive a defective product?</li>
                <p>Contact our customer support team immediately with your order details and photos of the defective product. We will arrange for a replacement or refund.</p>
              </ul>
            </article>

            <article className="faq-section">
              <h3 className="topic-title">7. Payment and Security</h3>
              <ul className="faq-list">
                <li>Is it safe to shop on Yannstech Hub?</li>
                <p>Yes, our platform uses SSL encryption to protect your personal and payment information.</p>
                <li>What currencies can I pay in?</li>
                <p>Yannstech Hub accepts multiple currencies. Your currency options will depend on your location and payment method.</p>
                <li>Why was my payment declined?</li>
                <p>Payments may be declined due to incorrect details, insufficient funds, or technical issues. Double-check your information or contact your bank for assistance.</p>
                <li>Are there additional charges for international orders?</li>
                <p>International orders may be subject to customs duties or taxes, which are the responsibility of the customer.</p>
              </ul>
            </article>

            <article className="faq-section">
              <h3 className="topic-title">8. Promotions and Discounts</h3>
              <ul className="faq-list">
                <li>How can I find current promotions?</li>
                <p>Check our "Offers" page or subscribe to our newsletter for updates on discounts and special deals.</p>
                <li>Can I use multiple discount codes on a single order?</li>
                <p>Only one discount code can be applied per order unless stated otherwise.</p>
                <li>Do you offer student or military discounts?</li>
                <p>Yes, we offer special discounts for students and military personnel. Contact our support team for verification.</p>
              </ul>
            </article>

            <article className="faq-section">
              <h3 className="topic-title">9. Customer Support</h3>
              <ul className="faq-list">
                <li>How can I contact customer support?</li>
                <p>You can reach us via email, live chat, or by calling our customer support hotline. Contact details are available on our "Contact Us" page.</p>
                <li>What are your customer support hours?</li>
                <p>Our support team is available [X] days a week, from [X AM] to [X PM].</p>
                <li>Do you offer technical support for gadgets?</li>
                <p>Yes, we provide basic technical support. For advanced issues, please refer to the manufacturer's support service.</p>
              </ul>
            </article>

            <article className="faq-section">
              <h3 className="topic-title">10. Legal and Policies</h3>
              <ul className="faq-list">
                <li>Where can I find your terms and conditions?</li>
                <p>Our Terms and Conditions, Privacy Policy, and other legal documents are available in the footer of our website.</p>
                <li>Do you comply with international privacy laws?</li>
                <p>Yes, we comply with privacy laws such as GDPR (Europe) and CCPA (California).</p>
                <li>How are disputes resolved?</li>
                <p>Disputes are resolved through arbitration or as per the governing laws of [Your Region].</p>
              </ul>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQs;