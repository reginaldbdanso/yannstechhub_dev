import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/components/PaymentMobile.module.css';
import { useCart } from '../context/CartContext';
import Header from './Header';
import Footer from './Footer';

const PaymentMobile: React.FC = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, subtotal } = useCart();
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

  const calculateTotal = () => {
    const cartSubtotal = subtotal;
    const shipping = 5.00;
    return {
      subtotal: cartSubtotal,
      shipping,
      total: cartSubtotal + shipping
    };
  };

  const totals = calculateTotal();

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
    <div className={styles.paymentMobileContainer}>
      <div className={styles.mainContainer}>
        <Header />
        <div className={styles.dividerTop} />
        <div className={styles.breadcrumbSort}>
          <div className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbItem}>Cart</Link>
            <Link to="/shipping" className={styles.breadcrumbItem}>Shipping</Link>
            <Link to="/payment" className={styles.breadcrumbItem}>Payment</Link>
            <Link to="/approval" className={`${styles.breadcrumbItem} ${styles.breadcrumbItemActive}`}>Approval</Link>
          </div>
        </div>
        <div className={styles.dividerNormal} />

        <div className={styles.mainContent}>
          <section className={styles.paymentSection}>
            <h1 className={styles.paymentTitle}>Payment Method</h1>
            <div className={styles.paymentForm}>
              <div className={styles.paymentTabs}>
                <div className={styles.tabGroup}>
                  <button
                    className={styles.tabButton}
                    onClick={() => setActiveTab('momo')}
                  >
                    Mobile Money
                  </button>
                  <div className={activeTab === 'momo' ? styles.tabIndicatorActive : styles.tabIndicator} />
                </div>
                <div className={styles.tabGroup}>
                  <button
                    className={styles.tabButton}
                    onClick={() => setActiveTab('card')}
                  >
                    Card
                  </button>
                  <div className={activeTab === 'card' ? styles.tabIndicatorActive : styles.tabIndicator} />
                </div>
              </div>

              <div className={activeTab === 'momo' ? styles.paymentDetailsActive : styles.paymentDetails}>
                <div className={styles.paymentProvider}>
                  <div className={`${styles.customSelect} custom-select`}>
                    <div className={styles.selectedOption} onClick={() => setShowOptions(!showOptions)}>
                      <img src={selectedProvider.icon} alt={selectedProvider.name} className={styles.providerIcon} />
                      <span>{selectedProvider.name}</span>
                    </div>
                    <ul className={showOptions ? styles.optionsListShow : styles.optionsList}>
                      {providers.map((provider) => (
                        <li
                          key={provider.name}
                          className={styles.optionItem}
                          onClick={() => {
                            setSelectedProvider(provider);
                            setShowOptions(false);
                          }}
                        >
                          <img src={provider.icon} alt={provider.name} className={styles.providerIcon} />
                          <span>{provider.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className={styles.changeButton} onClick={() => setShowOptions(!showOptions)}>
                    <span>Change</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d416a212f7eda943315abbc16f9eb418e0c44b37aef97f5f6f38538b2d414b1"
                      alt="Change icon"
                      className={styles.changeIcon}
                    />
                  </button>
                </div>

                <div className={styles.paymentPhone}>
                  <div className={styles.phoneInfo}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/afeaea94ec4bf72161507bc26b978113574005a314df0f8df4da204bb977c662"
                      alt="Phone icon"
                      className={styles.phoneIcon}
                    />
                    <input
                      type="tel"
                      placeholder="+233 54*******42"
                      className={styles.phoneNumber}
                    />
                  </div>
                </div>

                <div className={styles.paymentAmount}>
                  <div className={styles.amountInfo}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea28c42ad763c50754410221e02154f79df70f07903bbfecf526f46e807a0a89"
                      alt="Amount icon"
                      className={styles.amountIcon}
                    />
                    <input
                      type="number"
                      placeholder="Enter Amount (GHS)"
                      min="0"
                      className={styles.amountValue}
                    />
                  </div>
                </div>

                <div className={styles.paymentSecurity}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/019049c0e90a7169b8dcb06d9ac93eed81b07dadad55bf7a87f9f7e36e71f98c"
                    alt="Security icon"
                    className={styles.securityIcon}
                  />
                  <div className={styles.securityBadges}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/21100b53cb7d691fdf947ded4d15b8bd99f12be24160215a2ff8d814aec85822"
                      alt="Security badge 1"
                      className={styles.badge}
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3f218578efe236f050f49e2d1766b7b00d0cd1d999bd715eb493a4f590e1ce1"
                      alt="Security badge 2"
                      className={styles.badge}
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/352fbdd8cd8d9c091ede6fcca7cdf422c41250a54cab4d3bc1a61fd84010929c"
                      alt="Security badge 3"
                      className={styles.badge}
                    />
                  </div>
                </div>
              </div>

              <button onClick={handleCheckout} className={styles.paymentButton}>
                Make Payment
              </button>
            </div>
          </section>

          <section className={styles.orderSection}>
            <div className={styles.orderSummary}>
              <div className={styles.summaryHeader}>
                <h2>Order Summary</h2>
                <span>{cart.length} items</span>
              </div>

              <div className={styles.orderItems}>
                {cart.map((item) => (
                  <div key={item.id} className={styles.orderItem}>
                    <img src={item.image} alt={item.title} className={styles.itemImage} />
                    <div className={styles.itemDetails}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                      <div className={styles.quantityControl}>
                        <button
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.totalSection}>
                <div className={styles.totalRow}>
                  <span>Subtotal</span>
                  <span>${totals.subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Shipping</span>
                  <span>${totals.shipping.toFixed(2)}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Total</span>
                  <span>${totals.total.toFixed(2)}</span>
                </div>
                <p className={styles.shippingInfo}>
                  Shipping costs are calculated based on your location
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentMobile;