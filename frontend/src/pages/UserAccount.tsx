import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import '../styles/UserAccount.css';

const UserAccount: React.FC = () => {
  const location = useLocation();

  return (
    <div className="dashboard">
      <div className="main-contents">
        <div className="divider-top"></div>

        <div className="breadcrumb-sort">
          <div className="breadcrumb">
            <span className="breadcrumb-item y">yannstechub</span>
            <span className="breadcrumb-item">/ Personal Dashboard</span>
          </div>
        </div>

        <div className="divider"></div>

        <main className="content-grid">
          <aside className="sidebar">
            <nav className="sidebar-nav">
              <ul className="sidebar-menu">
                <li className={`menu-item ${location.pathname === '/account' ? 'active' : ''}`}>
                  <NavLink to="/account">My Account</NavLink>
                </li>
                <li className={`menu-item ${location.pathname === '/account/chart' ? 'active' : ''}`}>
                  <NavLink to="/account/chart">My Chart</NavLink>
                </li>
                <li className={`menu-item ${location.pathname === '/account/saved' ? 'active' : ''}`}>
                  <NavLink to="/account/saved">My Saved</NavLink>
                </li>
                <li className={`menu-item ${location.pathname === '/account/address' ? 'active' : ''}`}>
                  <NavLink to="/account/address">Address Management</NavLink>
                </li>
              </ul>
            </nav>
          </aside>

          <section className="outlet-content">
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserAccount;