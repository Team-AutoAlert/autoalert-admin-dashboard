import React, { useState } from 'react';
import Header from '../components/Header';
import LeftNavBar from '../components/LeftNavBar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination'; // Import Pagination
import './Payment.css';

function Payment() {
  // Placeholder data (will replace with actual data later)
  const paymentData = [
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: true, paid: 'Yes' },
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: false, paid: 'No' },
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: true, paid: 'Yes' },
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: false, paid: 'No' },
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: true, paid: 'Yes' },
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: false, paid: 'No' },
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: true, paid: 'Yes' },
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: false, paid: 'No' },
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: true, paid: 'Yes' },
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: false, paid: 'No' },
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: true, paid: 'Yes' },
    { date: '16/10/2024', drivers: 'Kamal Perera', mechanics: 'Nimal Silva', receipts: false, paid: 'No' },
    // Add more data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Set items per page

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paymentData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="dashboard-container"> {/* Using the same container class as Dashboard */}
      <LeftNavBar />
      <div className="main-content"> {/* Using the same main-content class */}
        <Header />
        <div className="payment-body"> {/* New class for payment page body */}
          <h1 className="page-title">Payment Receipts</h1>
          <div className="payment-table-container">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Drivers</th>
                  <th>Mechanics</th>
                  <th>Receipts</th>
                  <th>Paid</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.drivers}</td>
                    <td>{item.mechanics}</td>
                    <td><input type="checkbox" checked={item.receipts} disabled /></td> {/* Use boolean value directly */} 
                    <td>{item.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            totalItems={paymentData.length}
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

export default Payment;
