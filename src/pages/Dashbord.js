import React, { useState, useEffect } from 'react';
import LeftNavBar from '../components/LeftNavBar'; // Import LeftNavBar
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import UserService from '../services/UserService';
import './Dashboard.css'; // Assuming a CSS file for the dashboard

function Dashboard() {
  const [stats, setStats] = useState({
    drivers: 0,
    mechanics: 0,
    ongoingJobs: 50 // Keeping this as static for now
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await UserService.getAllUsers();
        const users = response.data;
        
        const userStats = {
          drivers: users.filter(user => user.role === 'driver').length,
          mechanics: users.filter(user => user.role === 'mechanic').length,
          ongoingJobs: 50 // Keeping this as static for now
        };
        
        setStats(userStats);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user statistics');
        setLoading(false);
      }
    };

    fetchUserStats();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="dashboard-container">
      <LeftNavBar />
      <div className="main-content">
        <Header />
        <div className="dashboard-body">
          <div className="stats-cards">
            <div className="stat-card">
              <div className="card-title">Number of Drivers</div>
              <div className="card-value">{stats.drivers}</div>
            </div>
            <div className="stat-card">
              <div className="card-title">Number of Mechanics</div>
              <div className="card-value">{stats.mechanics}</div>
            </div>
            <div className="stat-card">
              <div className="card-title">Ongoing Jobs</div>
              <div className="card-value">{stats.ongoingJobs}</div>
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
