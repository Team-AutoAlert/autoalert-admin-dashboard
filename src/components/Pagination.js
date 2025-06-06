import React from 'react';
import './Pagination.css';

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    // Display first page
    pageNumbers.push(1);

    // Display pages around the current page
    const start = Math.max(2, currentPage - 2);
    const end = Math.min(totalPages - 1, currentPage + 2);

    if (start > 2) {
      pageNumbers.push('...');
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    if (end < totalPages - 1) {
      pageNumbers.push('...');
    }

    // Display last page if not already displayed
    if (totalPages > 1 && !pageNumbers.includes(totalPages)) {
       if (totalPages > 1 && !pageNumbers.includes('...') && pageNumbers[pageNumbers.length -1] < totalPages -1) {
         pageNumbers.push('...');
       }
      pageNumbers.push(totalPages);
    }
     if (totalPages === 1 && !pageNumbers.includes(1)) {
       pageNumbers.push(1);
     }


    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
      {pageNumbers.map((number, index) => (
        number === '...' ?
        <span key={index}>...</span>
        :
        <button
          key={index}
          onClick={() => onPageChange(number)}
          className={number === currentPage ? 'active' : ''}
        >
          {number}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
    </div>
  );
}

export default Pagination; 