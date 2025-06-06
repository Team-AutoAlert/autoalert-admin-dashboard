import React from 'react';
import { Link } from 'react-router-dom';
import './LeftNavBar.css'; // Assuming a CSS file for the LeftNavBar

function LeftNavBar() {
  return (
    <div className="left-nav-bar">
      <div className="app-info">
        {/* Placeholder for logo */}
        <img src="#" alt="AutoAlert Logo" className="app-logo" />
        <div className="app-title">AUTOALERT</div>
        <div className="app-subtitle">GUARDING YOUR VEHICLE, EVERY MILE.</div>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/payment">Payment Management</Link></li>
          <li><Link to="/certificates-management">Certificates Management</Link></li>
          <li><Link to="/nic-verification">NIC Verification</Link></li>
          <li><Link to="/driver-profile-management">Driver Profile Management</Link></li>
          <li><Link to="/mechanic-profile-management">Mechanic Profile Management</Link></li>
          {/* <li><Link to="/revenue">Revenue</Link></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default LeftNavBar; 