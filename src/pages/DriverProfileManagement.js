import React, { useState } from 'react';
import Header from '../components/Header';
import LeftNavBar from '../components/LeftNavBar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import './DriverProfileManagement.css'; // Assuming a CSS file for this page

function DriverProfileManagement() {
  // Placeholder data
  const driversData = [
    { regDate: '16/10/2024', fullName: 'Kamal Perera', address: 'Address 1', transactions: 34 },
    { regDate: '16/10/2024', fullName: 'Kamal Perera', address: 'Address 2', transactions: 23 },
    { regDate: '16/10/2024', fullName: 'Kamal Perera', address: 'Address 3', transactions: 12 },
    { regDate: '16/10/2024', fullName: 'Kamal Perera', address: 'Address 4', transactions: 23 },
     { regDate: '16/10/2024', fullName: 'Kamal Perera', address: 'Address 1', transactions: 30 },
    { regDate: '16/10/2024', fullName: 'Kamal Perera', address: 'Address 2', transactions: 25 },
    { regDate: '16/10/2024', fullName: 'Kamal Perera', address: 'Address 3', transactions: 15 },
    { regDate: '16/10/2024', fullName: 'Kamal Perera', address: 'Address 4', transactions: 20 },
    // Add more data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Set items per page, adjust as needed

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = driversData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                  <th>Reg Date</th>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>Number of Transactions</th>
                  <th>Action</th> {/* Column for Edit button */}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.regDate}</td>
                    <td>{item.fullName}</td>
                    <td>{item.address}</td>
                    <td>{item.transactions}</td>
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