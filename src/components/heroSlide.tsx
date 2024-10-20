import React from 'react';
import '../css/heroSlide.css'; // Import the CSS file

const HeroBanner: React.FC = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1 className="sales-heading">Huge Sale!</h1>
        <p className="sale-text">Get up to 50% off on selected items.</p>
        <img src="path-to-your-image.jpg" alt="Sale" className="sale-image" />
        <a href="/shop" className="shop-now-button">Shop Now</a>
      </div>
    </div>
  );
};

export default HeroBanner;
