import React from 'react';
import LeftNavBar from '../components/LeftNavBar'; // Import LeftNavBar
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import './Dashboard.css'; // Assuming a CSS file for the dashboard

function Dashboard() {
  return (
    <div className="dashboard-container">
      <LeftNavBar />
      <div className="main-content">
        <Header />
        <div className="dashboard-body">
          <div className="stats-cards">
            <div className="stat-card">
              <div className="card-title">Number of Drivers</div>
              <div className="card-value">700</div>
            </div>
            <div className="stat-card">
              <div className="card-title">Number of Mechanics</div>
              <div className="card-value">150</div>
            </div>
            <div className="stat-card">
              <div className="card-title">Ongoing Jobs</div>
              <div className="card-value">50</div>
            </div>
          </div>
          <div className="feedback-buttons">
            <button className="feedback-button">Drivers' Feedbacks</button>
            <button className="feedback-button">Mechanics' Feedbacks</button>
            <button className="feedback-button">SOS Feedbacks</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
