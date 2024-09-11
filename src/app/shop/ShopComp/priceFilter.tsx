import React, { useState } from 'react';
import '../../css/PriceFilter.css';

const PriceFilter: React.FC = () => {
    const [minPrice, setMinPrice] = useState(150);
    const [maxPrice, setMaxPrice] = useState(445000);
    const minRange = 150;
    const maxRange = 445000;

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(parseInt(e.target.value), maxPrice - 1); // Prevent min from crossing max
        setMinPrice(value);
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(parseInt(e.target.value), minPrice + 1); // Prevent max from crossing min
        setMaxPrice(value);
    };

    const applyFilter = () => {
        console.log(`Filtering products between Rs. ${minPrice} and Rs. ${maxPrice}`);
    };

    return (
        <div className="filter-container">
            <h3>FILTER BY PRICE</h3>
            <div className="range-slider-container">
                <input
                    type="range"
                    min={minRange}
                    max={maxRange}
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="range-slider"
                />
                <input
                    type="range"
                    min={minRange}
                    max={maxRange}
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="range-slider"
                />
                {/* The div below visually shows the range between min and max */}
                <div className="slider-range" style={{ left: `${(minPrice / maxRange) * 100}%`, right: `${100 - (maxPrice / maxRange) * 100}%` }}></div>
            </div>
            <div className="price-range">
                Rs. {minPrice} - Rs. {maxPrice}
            </div>
            <button className="filter-btn" onClick={applyFilter}>
                FILTER
            </button>
        </div>
    );
};

export default PriceFilter;
