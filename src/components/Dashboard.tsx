import React, { useState } from 'react';
import '../styles/components/Dashboard_module.css';
import Header from './Header';
import Footer from './Footer';
import MyAccount from './dashboard/MyAccount';
import MyChart from './dashboard/MyChart';
import MySaved from './dashboard/MySaved';
import AddressManagement from './dashboard/AddressManagement';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('my-account');

  const renderContent = () => {
    switch (activeTab) {
      case 'my-account':
        return <MyAccount />;
      case 'my-charts':
        return <MyChart />;
      case 'my-saved':
        return <MySaved />;
      case 'address-management':
        return <AddressManagement />;
      default:
        return <MyAccount />;
    }
  };

  return (
    <div className="dashboardContainer">
      <div className="mainContents">
        <Header />
        <div className="dividerTop" />
        <div className="breadcrumbSort">
          <div className="breadcrumb">
            <span className="breadcrumbItemActive">yannstechub</span>
            <span className="breadcrumbItem">/ Daily deals</span>
          </div>
        </div>
        <div className="dividerNormal" />

        <div className="contentGrid">
          <aside className="sidebar">
            <nav className="sidebarNav">
              <ul className="sidebarMenu">
                <li>
                  <button
                    className={activeTab === 'my-account' ? "menuItemActive" : "menuItem"}
                    onClick={() => setActiveTab('my-account')}
                  >
                    My Account
                  </button>
                </li>
                <li>
                  <button
                    className={activeTab === 'my-charts' ? "menuItemActive" : "menuItem"}
                    onClick={() => setActiveTab('my-charts')}
                  >
                    My Chart
                  </button>
                </li>
                <li>
                  <button
                    className={activeTab === 'my-saved' ? "menuItemActive" : "menuItem"}
                    onClick={() => setActiveTab('my-saved')}
                  >
                    My Saved
                  </button>
                </li>
                <li>
                  <button
                    className={activeTab === 'address-management' ? "menuItemActive" : "menuItem"}
                    onClick={() => setActiveTab('address-management')}
                  >
                    Address Management
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          <section className="mainContent">
            {renderContent()}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;