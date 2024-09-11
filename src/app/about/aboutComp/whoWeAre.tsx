import React from 'react';
import Image from 'next/image';
import whoWeAreImage from '../../img/abousUs.jpg';
import '../../css/AboutUs.css';

const WhoWeAre: React.FC = () => {
    return (
      <div className="who-we-are-section">
        {/* Content */}
        <div className="who-we-are-content">
          <h2>Who We <br />ARE</h2>
          <p>
            At <strong>Discount Center</strong>, we are passionate about providing quality products at unbeatable prices. Our mission is to make high-quality, affordable products accessible to everyone. With a wide range of categories, we are committed to offering exceptional customer service and ensuring every shopping experience is convenient and enjoyable.
          </p>
        </div>
  
        {/* Image */}
        <div className="who-we-are-image-container">
          <Image
            src={whoWeAreImage}
            alt="Who We Are"
            layout="fill"
            objectFit="cover"
            className="who-we-are-image"
          />
        </div>
      </div>
    );
  };
  
  export default WhoWeAre;