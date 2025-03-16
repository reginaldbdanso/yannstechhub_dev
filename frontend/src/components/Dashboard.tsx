import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import MyAccount from './dashboard/MyAccount';
import MyChart from './dashboard/MyChart';
import MySaved from './dashboard/MySaved';
import AddressManagement from './dashboard/AddressManagement';

const DashboardContainer = styled.div`
  background-color: #eef2f4;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 100vh;
`;

const MainContents = styled.div`
  background-color: #eef2f4;
  display: flex;
  align-self: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 21px 0 179px;
`;

const Divider = styled.div<{ isTop?: boolean }>`
  align-self: stretch;
  min-height: 0px;
  margin-top: ${props => props.isTop ? '100px' : '10px'};
  width: 99.9%;
  border: 1px solid #d5d5d5;
`;

const BreadcrumbSort = styled.div`
  display: flex;
  width: 100%;
  max-width: 70%;
  gap: 2px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 9px 0 0 0px;

  @media (max-width: 991px) {
    width: 70%;
    justify-content: center;
    gap: 2rem;
  }
`;

const Breadcrumb = styled.div`
  align-self: start;
  display: flex;
  gap: 12px;
  color: #000;
  font: 15px Open Sans, sans-serif;
`;

const BreadcrumbItem = styled.span<{ isActive?: boolean }>`
  align-self: stretch;
  border-radius: 10px;
  background-color: #fff;
  padding: 4px 14px;
  font: ${props => props.isActive ? '700' : '400'} 15px Open Sans, sans-serif;
`;

const ContentGrid = styled.div`
  display: flex;
  gap: 20px;
  margin: 38px auto 0;
  max-width: 70%;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
    max-width: 95%;
  }
`;

const Sidebar = styled.aside`
  width: 25%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SidebarNav = styled.nav`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 24px 17px;
  padding-bottom: 260px;

  @media (max-width: 991px) {
    padding: 20px;
    margin-top: 16px;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 40px;
`;

const MenuItem = styled.button<{ isActive?: boolean }>`
  margin-top: 10px;
  text-decoration: none;
  color: ${props => props.isActive ? '#000' : '#0000006d'} !important;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  font-weight: ${props => props.isActive ? '700' : '500'};
  width: 100%;
  text-align: left;
`;

const MainContent = styled.section`
  width: 75%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

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
    <DashboardContainer>
      <MainContents>
        <Header />
        <Divider isTop />
        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem isActive>yannstechub</BreadcrumbItem>
            <BreadcrumbItem>/ Daily deals</BreadcrumbItem>
          </Breadcrumb>
        </BreadcrumbSort>
        <Divider />

        <ContentGrid>
          <Sidebar>
            <SidebarNav>
              <SidebarMenu>
                <li>
                  <MenuItem
                    isActive={activeTab === 'my-account'}
                    onClick={() => setActiveTab('my-account')}
                  >
                    My Account
                  </MenuItem>
                </li>
                <li>
                  <MenuItem
                    isActive={activeTab === 'my-charts'}
                    onClick={() => setActiveTab('my-charts')}
                  >
                    My Chart
                  </MenuItem>
                </li>
                <li>
                  <MenuItem
                    isActive={activeTab === 'my-saved'}
                    onClick={() => setActiveTab('my-saved')}
                  >
                    My Saved
                  </MenuItem>
                </li>
                <li>
                  <MenuItem
                    isActive={activeTab === 'address-management'}
                    onClick={() => setActiveTab('address-management')}
                  >
                    Address Management
                  </MenuItem>
                </li>
              </SidebarMenu>
            </SidebarNav>
          </Sidebar>

          <MainContent>
            {renderContent()}
          </MainContent>
        </ContentGrid>
      </MainContents>
      <Footer />
    </DashboardContainer>
  );
};

export default Dashboard; 