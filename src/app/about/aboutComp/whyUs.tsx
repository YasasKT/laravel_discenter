import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import whyChooseUsImage from '../../img/whyUs.png'; // Replace with your actual image path
import '../../css/AboutUs.css';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="why-choose-us-section">
      {/* Left side: Image */}
      <div className="why-choose-us-image">
        <Image
          src={whyChooseUsImage}
          alt="Why Choose Us"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Right side: Content */}
      <div className="why-choose-us-content">
        <h2>Why <br />US</h2>
        <ul>
          <li><FaCheckCircle className="check-icon" /> <strong>Unbeatable Prices:</strong><span>We offer the best prices on high-quality products, ensuring value for your money.</span></li>
          <li><FaCheckCircle className="check-icon" /> <strong>Wide Product Selection:</strong><span>Everything you need, from electronics and home appliances to clothing and accessories.</span></li>
          <li><FaCheckCircle className="check-icon" /> <strong>Customer-Centric Approach:</strong><span>Your satisfaction is our priority, with excellent customer service to assist you.</span></li>
          <li><FaCheckCircle className="check-icon" /> <strong>Fast & Reliable Shipping:</strong><span>Our logistics network ensures your orders arrive quickly and safely.</span></li>
          <li><FaCheckCircle className="check-icon" /> <strong>Secure Shopping:</strong><span>We provide a secure online shopping environment to protect your data.</span></li>
          <li><FaCheckCircle className="check-icon" /> <strong>Loyalty Rewards:</strong><span>We reward customer loyalty with exclusive deals, promotions, and discounts.</span></li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
