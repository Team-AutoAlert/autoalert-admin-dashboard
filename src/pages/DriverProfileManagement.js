import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LeftNavBar from '../components/LeftNavBar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import UserService from '../services/UserService';
import './DriverProfileManagement.css'; // Assuming a CSS file for this page

function DriverProfileManagement() {
  const [driversData, setDriversData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Set items per page, adjust as needed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const drivers = await UserService.getDrivers();
        setDriversData(drivers);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch drivers data');
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = driversData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="dashboard-container"> {/* Reusing the dashboard container style */}
      <LeftNavBar />
      <div className="main-content"> {/* Reusing the main content style */}
        <Header />
        <div className="driver-profile-body"> {/* New class for this page's body */}
          <h1 className="page-title">Drivers' Profiles</h1>
          <div className="driver-profile-table-container"> {/* New class for table container */}
            <table>
              <thead>
                <tr>
                  <th>Registration Date</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Status</th>
                  <th>Action</th> {/* Column for Edit button */}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((driver) => (
                  <tr key={driver._id}>
                    <td>{new Date(driver.createdAt).toLocaleDateString()}</td>
                    <td>{`${driver.firstName} ${driver.lastName}`}</td>
                    <td>{driver.email}</td>
                    <td>{driver.phoneNumber}</td>
                    <td>{driver.status}</td>
                    <td><button className="edit-button">Edit</button></td> {/* Edit button, reusing the style */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            totalItems={driversData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DriverProfileManagement; 