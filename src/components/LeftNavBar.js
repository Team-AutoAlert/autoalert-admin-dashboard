import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LeftNavBar.css'; // Assuming a CSS file for the LeftNavBar

function LeftNavBar() {
  const location = useLocation();

  const navLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/payment', label: 'Payment Management' },
    { to: '/certificates-management', label: 'Certificates Management' },
    { to: '/nic-verification', label: 'NIC Verification' },
    { to: '/driver-profile-management', label: 'Driver Profile Management' },
    { to: '/mechanic-profile-management', label: 'Mechanic Profile Management' },
    // { to: '/revenue', label: 'Revenue' },
  ];

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
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default LeftNavBar; 