import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceImage from '../../img/home-appliances.jpg'; // Replace with your service-related image
import '../../css/Hero.css'; // Separate CSS file for service-specific styles

const ServiceHeroSection: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax Effect Handler
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener on component mount
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="site-header-overlay">
      {/* Background Image with parallax effect */}
      <Image
        src={ServiceImage}
        alt="service-bg-img"
        className="bg-image"
        id="parallax-image"
        layout="fill"
        objectFit="cover"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }} // Adjust the parallax speed factor
      />

      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Page Title */}
      <h1 className="page-title">Our Services</h1>

      {/* Breadcrumb Links */}
      <div className="links">
        <Link href="/" legacyBehavior>
          <a><span className="home">Discount Center</span></a>
        </Link>
        <span className="page-name"> &gt; Services</span>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
