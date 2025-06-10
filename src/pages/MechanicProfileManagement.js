import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LeftNavBar from '../components/LeftNavBar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import UserService from '../services/UserService';
import './MechanicProfileManagement.css';

function MechanicProfileManagement() {
  const [mechanicsData, setMechanicsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        const mechanics = await UserService.getMechanics();
        setMechanicsData(mechanics);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch mechanics data');
        setLoading(false);
      }
    };

    fetchMechanics();
  }, []);

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mechanicsData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="dashboard-container">
      <LeftNavBar />
      <div className="main-content">
        <Header />
        <div className="mechanic-profile-body">
          <h1 className="page-title">Mechanics' Profiles</h1>
          <div className="mechanic-profile-table-container">
            <table>
              <thead>
                <tr>
                  <th>Registration Date</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((mechanic) => (
                  <tr key={mechanic._id}>
                    <td>{new Date(mechanic.createdAt).toLocaleDateString()}</td>
                    <td>{`${mechanic.firstName} ${mechanic.lastName}`}</td>
                    <td>{mechanic.email}</td>
                    <td>{mechanic.phoneNumber}</td>
                    <td>{mechanic.status}</td>
                    <td><button className="edit-button">Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            totalItems={mechanicsData.length}
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

export default MechanicProfileManagement; 