import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '@/img/home-appliances.jpg';
import '@/css/Hero.css';

const CartHero: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="site-header-overlay">
      {/* Background Image with parallax effect */}
      <Image
        src={HeroImage}
        alt="bg-img"
        className="bg-image"
        id="parallax-image"
        layout="fill"
        objectFit="cover"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }} // Adjust the parallax speed factor
      />

      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Page Title */}
      <h1 className="page-title">My Orders</h1>

      {/* Breadcrumb Links */}
      <div className="links">
        <Link href="/" legacyBehavior>
          <a><span className="home">Discount Center</span></a>
        </Link>
        <span className="page-name"> &gt; My Orders</span>
      </div>
      </div>
    );
};

export default CartHero;