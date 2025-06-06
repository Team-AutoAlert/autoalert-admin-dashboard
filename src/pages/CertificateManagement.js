import React, { useState } from 'react';
import Header from '../components/Header';
import LeftNavBar from '../components/LeftNavBar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import './CertificateManagement.css'; // Assuming a CSS file for this page

function CertificateManagement() {
  // Placeholder data
  const certificatesData = [
    { date: '16/10/2024', fullName: 'Kamal Perera', address: 'Nimal Silva', certifications: true, verify: 'Yes' },
    { date: '16/10/2024', fullName: 'Kamal Perera', address: 'Nimal Silva', certifications: false, verify: 'No' },
    { date: '16/10/2024', fullName: 'Kamal Perera', address: 'Nimal Silva', certifications: true, verify: 'Yes' },
    { date: '16/10/2024', fullName: 'Kamal Perera', address: 'Nimal Silva', certifications: false, verify: 'No' },
    { date: '16/10/2024', fullName: 'Kamal Perera', address: 'Nimal Silva', certifications: true, verify: 'Yes' },
    { date: '16/10/2024', fullName: 'Kamal Perera', address: 'Nimal Silva', certifications: false, verify: 'No' },
    // Add more data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Set items per page, adjust as needed

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = certificatesData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="dashboard-container"> {/* Reusing the dashboard container style */}
      <LeftNavBar />
      <div className="main-content"> {/* Reusing the main content style */}
        <Header />
        <div className="certificates-body"> {/* New class for this page's body */}
          <h1 className="page-title">Check Certifications</h1>
          <div className="certificates-table-container"> {/* New class for table container */}
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>Certifications</th>
                  <th>Verify</th>
                  <th></th> {/* Column for Edit button */}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.fullName}</td>
                    <td>{item.address}</td>
                    <td><input type="checkbox" checked={item.certifications} disabled /></td> {/* Checkbox for Certifications */}
                    <td>{item.verify}</td>
                    <td><button className="edit-button">Edit</button></td> {/* Edit button */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            totalItems={certificatesData.length}
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

export default CertificateManagement;
