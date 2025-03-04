import React from 'react';
import { Link } from 'react-router-dom';

const AccountInfo: React.FC = () => {
  return (
    <article className="profile-info">
      <h1 className="welcome-heading">Welcome, Clopy</h1>
      <h2 className="section-heading">Personal information</h2>
      <div className="user-details">
        Name: Clopy Studios<br />
        Email: Clopy01@gmail.com<br />
        Phone Number: 0540234571<br />
        Date of Birth: 11-01-2024
      </div>
      <div className="action-buttons">
        <button className="btn btn-primary">
          <Link to="/account/change-password">Change Password</Link>
        </button>
        <button className="btn btn-secondary">
          <Link to="/account/edit">Edit</Link>
        </button>
      </div>
    </article>
  );
};

export default AccountInfo;