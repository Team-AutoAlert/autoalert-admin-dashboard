import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LeftNavBar from '../components/LeftNavBar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import PaymentService from '../services/PaymentService';
import './Payment.css';

function Payment() {
  const [paymentData, setPaymentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await PaymentService.getAllPayments();
        // Check if response.data exists and is an array
        if (response && response.data && Array.isArray(response.data)) {
          setPaymentData(response.data);
        } else {
          setPaymentData([]); // Set empty array if no data
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching payments:', err);
        setError('Failed to fetch payment data. Please try again later.');
        setPaymentData([]); // Set empty array on error
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paymentData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <LeftNavBar />
        <div className="main-content">
          <Header />
          <div className="payment-body">
            <div className="loading-message">Loading payment data...</div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <LeftNavBar />
      <div className="main-content">
        <Header />
        <div className="payment-body">
          <h1 className="page-title">Payment Receipts</h1>
          {error && <div className="error-message">{error}</div>}
          <div className="payment-table-container">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Driver ID</th>
                  <th>Mechanic ID</th>
                  <th>Amount</th>
                  <th>Order Type</th>
                  <th>Status</th>
                  <th>Services</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((payment) => (
                    <tr key={payment._id}>
                      <td>{new Date(payment.createdAt).toLocaleDateString()}</td>
                      <td>{payment.driverId}</td>
                      <td>{payment.mechanicId}</td>
                      <td>${payment.amount}</td>
                      <td>{payment.orderType}</td>
                      <td>
                        <span className={`status-badge ${payment.status}`}>
                          {payment.status}
                        </span>
                      </td>
                      <td>
                        {payment.services && payment.services.length > 0 ? (
                          <ul className="services-list">
                            {payment.services.map((service, index) => (
                              <li key={index}>
                                {service.name} - ${service.charge}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          'No services'
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="no-data-message">
                      No payment records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {paymentData.length > 0 && (
            <Pagination
              totalItems={paymentData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Payment;
