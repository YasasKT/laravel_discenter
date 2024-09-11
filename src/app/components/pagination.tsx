import React from 'react';
import '../css/Pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`page-number ${i === currentPage ? 'active' : ''}`}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="pagination-container">
            <button
                onClick={() => handlePageClick(currentPage - 1)}
                className="pagination-btn"
                disabled={currentPage === 1}
            >
                Previous
            </button>

            <div className="page-numbers">
                {renderPageNumbers()}
            </div>

            <button
                onClick={() => handlePageClick(currentPage + 1)}
                className="pagination-btn"
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
