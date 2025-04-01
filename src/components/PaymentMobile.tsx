import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/PaymentMobile_module.css';
import Header from './Header';
import Footer from './Footer';
import OrderSummary from './OrderSummary';

const PaymentMobile: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('momo');
  const [showOptions, setShowOptions] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState({
    name: 'MTN Mobile Money',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/37ad312c54ce04ce416e50c9a8a861c7826ea9e033bf4fb177e779b433ed1964'
  });

  const providers = [
    { name: 'MTN Mobile Money', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/37ad312c54ce04ce416e50c9a8a861c7826ea9e033bf4fb177e779b433ed1964' },
    { name: 'Telecel Cash', icon: '/imgs/T-Cash Red.png' },
    { name: 'AirtelTigo Money', icon: '/imgs/airtel-tigo.png' }
  ];


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.custom-select')) {
        setShowOptions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleCheckout = () => {
    navigate('/payment-approval');
  };

  return (
    <div className="paymentMobileContainer">
      <div className="mainContainer">
        <Header />
        <div className="dividerTop" />
        <div className="breadcrumbSort">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumbItem">Cart</Link>
            <Link to="/shipping" className="breadcrumbItem">Shipping</Link>
            <Link to="/payment" className="breadcrumbItem">Payment</Link>
            <Link to="/approval" className={`$"breadcrumbItem" $"breadcrumbItemActive"`}>Approval</Link>
          </div>
        </div>
        <div className="dividerNormal" />

        <div className="mainContent">
          <section className="paymentSection">
            <h1 className="paymentTitle">Payment Method</h1>
            <div className="paymentForm">
              <div className="paymentTabs">
                <div className="tabGroup">
                  <button
                    className="tabButton"
                    onClick={() => setActiveTab('momo')}
                  >
                    Mobile Money
                  </button>
                  <div className={activeTab === 'momo' ? "tabIndicatorActive" : "tabIndicator"} />
                </div>
                <div className="tabGroup">
                  <button
                    className="tabButton"
                    onClick={() => setActiveTab('card')}
                  >
                    Card
                  </button>
                  <div className={activeTab === 'card' ? "tabIndicatorActive" : "tabIndicator"} />
                </div>
              </div>

              <div className={activeTab === 'momo' ? "paymentDetailsActive" : "paymentDetails"}>
                <div className="paymentProvider">
                  <div className={`$"customSelect" custom-select`}>
                    <div className="selectedOption" onClick={() => setShowOptions(!showOptions)}>
                      <img src={selectedProvider.icon} alt={selectedProvider.name} className="providerIcon" />
                      <span>{selectedProvider.name}</span>
                    </div>
                    <ul className={showOptions ? "optionsListShow" : "optionsList"}>
                      {providers.map((provider) => (
                        <li
                          key={provider.name}
                          className="optionItem"
                          onClick={() => {
                            setSelectedProvider(provider);
                            setShowOptions(false);
                          }}
                        >
                          <img src={provider.icon} alt={provider.name} className="providerIcon" />
                          <span>{provider.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="changeButton" onClick={() => setShowOptions(!showOptions)}>
                    <span>Change</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d416a212f7eda943315abbc16f9eb418e0c44b37aef97f5f6f38538b2d414b1"
                      alt="Change icon"
                      className="changeIcon"
                    />
                  </button>
                </div>

                <div className="paymentPhone">
                  <div className="phoneInfo">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/afeaea94ec4bf72161507bc26b978113574005a314df0f8df4da204bb977c662"
                      alt="Phone icon"
                      className="phoneIcon"
                    />
                    <input
                      type="tel"
                      placeholder="+233 54*******42"
                      className="phoneNumber"
                    />
                  </div>
                </div>

                <div className="paymentAmount">
                  <div className="amountInfo">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea28c42ad763c50754410221e02154f79df70f07903bbfecf526f46e807a0a89"
                      alt="Amount icon"
                      className="amountIcon"
                    />
                    <input
                      type="number"
                      placeholder="Enter Amount (GHS)"
                      min="0"
                      className="amountValue"
                    />
                  </div>
                </div>

                <div className="paymentSecurity">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/019049c0e90a7169b8dcb06d9ac93eed81b07dadad55bf7a87f9f7e36e71f98c"
                    alt="Security icon"
                    className="securityIcon"
                  />
                  <div className="securityBadges">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/21100b53cb7d691fdf947ded4d15b8bd99f12be24160215a2ff8d814aec85822"
                      alt="Security badge 1"
                      className="badge"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3f218578efe236f050f49e2d1766b7b00d0cd1d999bd715eb493a4f590e1ce1"
                      alt="Security badge 2"
                      className="badge"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/352fbdd8cd8d9c091ede6fcca7cdf422c41250a54cab4d3bc1a61fd84010929c"
                      alt="Security badge 3"
                      className="badge"
                    />
                  </div>
                </div>
              </div>

              <button onClick={handleCheckout} className="paymentButton">
                Make Payment
              </button>
            </div>
          </section>

          <section className="orderSection">
            <OrderSummary />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentMobile;