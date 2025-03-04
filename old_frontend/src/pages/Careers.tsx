import React from 'react';
import '../styles/Careers.css';

const Careers: React.FC = () => {
  return (
    <div className="careers">
      <main className="main-content">
        <h1 className="page-title">Career opportunities</h1>
        <p className="page-description">
          Explore our open roles for working with the team, either full-time
          employment or internship.
        </p>

        <section className="job-stats">
          <h2 className="total-jobs">4 open roles</h2>
          <div className="job-types">
            <span>Regular - 4</span>
            <span className="internship-count">Internship - 0</span>
          </div>
        </section>

        <section className="job-listings">
          <article className="job-card">
            <div className="job-image-container">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce79820243537fb1d8ef4c32e91a585c07b6f81b6a44cf178ace962523852e93"
                className="job-image"
                alt="Sales Executive position"
              />
              <span className="status-badge">Open</span>
            </div>
            <div className="job-details">
              <div>
                <h3 className="job-title">Sales Executive</h3>
                <p className="job-type">Regular</p>
              </div>
              <button className="apply-btn">Apply now</button>
            </div>
          </article>

          <article className="job-card">
            <div className="job-image-container">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b99136c20bdf94a80ed4e8786239d999cba60f97b07bbd485e922bd364fb4aa5"
                className="job-image"
                alt="Security Officer position"
              />
              <span className="status-badge">Open</span>
            </div>
            <div className="job-details">
              <div>
                <h3 className="job-title">Security Officer</h3>
                <p className="job-type">Regular</p>
              </div>
              <button className="apply-btn">Apply now</button>
            </div>
          </article>

          <article className="job-card">
            <div className="job-image-container">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9849731508e899b16aaeb83952265aa09a09ad04bbd52f3438bf5cc04e309c7e"
                className="job-image"
                alt="HR Officer position"
              />
              <span className="status-badge">Open</span>
            </div>
            <div className="job-details">
              <div>
                <h3 className="job-title">HR Officer</h3>
                <p className="job-type">Regular</p>
              </div>
              <button className="apply-btn">Apply now</button>
            </div>
          </article>

          <article className="job-card">
            <div className="job-image-container">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/802588a2e33d31387422e089139df3866d662e57e85e376a368caeec0a362c5b"
                className="job-image"
                alt="Delivery Rider position"
              />
              <span className="status-badge closed">Closed</span>
            </div>
            <div className="job-details">
              <div>
                <h3 className="job-title">Delivery Rider</h3>
                <p className="job-type">Regular</p>
              </div>
              <button className="apply-btn" disabled>Apply now</button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Careers;