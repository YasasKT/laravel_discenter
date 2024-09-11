import React, { useState } from 'react';
import '../../css/FilterDropdowns.css';

const FilterDropdowns: React.FC = () => {
    const [productsToShow, setProductsToShow] = useState('10'); // Default value is 10
    const [sortOrder, setSortOrder] = useState('latest'); // Default sorting is 'latest'

    const handleProductsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductsToShow(e.target.value);
        console.log(`Show ${e.target.value} products`);
    };

    const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value);
        console.log(`Sort by ${e.target.value}`);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-group">
                <label htmlFor="products-to-show">Show:</label>
                <select
                    id="products-to-show"
                    value={productsToShow}
                    onChange={handleProductsChange}
                    className="dropdown"
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                </select>
            </div>

            <div className="dropdown-group">
                <label htmlFor="sort-order">Sort By:</label>
                <select
                    id="sort-order"
                    value={sortOrder}
                    onChange={handleSortOrderChange}
                    className="dropdown"
                >
                    <option value="latest">Latest</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default FilterDropdowns;
