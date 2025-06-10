import React from 'react';
import './Header.css'; // Assuming a CSS file for the Header

function Header() {
  return (
    <header className="dashboard-header">
      <div className="admin-info">
        {/* Placeholder for admin icon */}
        <span className="admin-icon">👤</span>
        <span className="admin-name">Admin</span>
      </div>
    </header>
  );
}

export default Header; 