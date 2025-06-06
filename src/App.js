import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashbord'; 
import Payment from './pages/Payment'; 
import CertificateManagement from './pages/CertificateManagement'; 
import NicVerification from './pages/NicVerification';
import DriverProfileManagement from './pages/DriverProfileManagement';
import MechanicProfileManagement from './pages/MechanicProfileManagement';

function App() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ** IMPORTANT: Add your login verification logic here **
    // For demonstration, we'll assume login is successful and navigate
    console.log('Login button clicked'); // Placeholder for login logic

    // After successful verification, navigate to the dashboard
    // Example placeholder for verification:
    const username = document.getElementById('adminName').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') { // Replace with your actual verification
      console.log('Login successful, navigating to dashboard');
      navigate('/dashboard');
    } else {
      console.log('Login failed');
      // Handle login failure (e.g., show error message)
    }
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="login-container">
          <div className="login-content">
            <div className="logo-section">
              {/* Replace with actual logo image */}
              <img src="#" alt="AutoAlert Logo" className="app-logo-placeholder" />
              <div className="app-title">AUTOALERT</div>
              <div className="app-subtitle">GUARDING YOUR VEHICLE, EVERY MILE.</div>
            </div>

            <div className="login-form">
              <div className="input-group">
                <label htmlFor="adminName">Admin Name</label>
                <input type="text" id="adminName" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button className="login-button" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      } />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/certificates-management" element={<CertificateManagement />} />
      <Route path="/nic-verification" element={<NicVerification />} />
      <Route path="/driver-profile-management" element={<DriverProfileManagement />} />
      <Route path="/mechanic-profile-management" element={<MechanicProfileManagement />} />
    </Routes>
  );
}

export default App;
