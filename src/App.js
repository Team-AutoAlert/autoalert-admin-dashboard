import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashbord'; // Import the Dashboard component
import Payment from './pages/Payment'; // Import the Payment component

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
    </Routes>
  );
}

export default App;
