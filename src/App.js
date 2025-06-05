import './App.css';

function App() {
  return (
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
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
