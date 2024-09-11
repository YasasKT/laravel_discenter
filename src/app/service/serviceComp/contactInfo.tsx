import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import contactImage from '../../img/contact_us.png';
import '../../css/ContactInfo.css';

const ContactSection: React.FC = () => {
  return (
    <div className="contact-section">
      <div className="top-content">
        {/* Left side: Contact Info */}
        <div className="contact-info-container">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" /> 
              <div>
                <div className="contact-label">Give Us a Call</div>
                <div className="contact-value"><a href='tel:+94778545114'>+94 778 545 114</a></div>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" /> 
              <div>
                <div className="contact-label">Send Us an Email</div>
                <div className="contact-value"><a href='mailto:yasaskt@gmail.com'>contact@service.com</a></div>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" /> 
              <div>
                <div className="contact-label">Come See Us</div>
                <div className="contact-value"><a href='https://maps.app.goo.gl/R88P2ygmpzg2BLUEA'>393, 2 Dehiwala Rd, Boralesgamuwa.</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="contact-image-container">
          <Image
            src={contactImage}
            alt="Contact Us"
            layout="fill"
            objectFit="cover"
            className="contact-image"
          />
        </div>
      </div>

      {/* Google Map Below Contact Info and Image */}
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d63377.29431567976!2d79.84101528275818!3d6.880912245143043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e9!4m3!3m2!1d6.9218386!2d79.8562055!4m5!1s0x3ae25a912bcd18ad%3A0xd33fb31643e1e16e!2s393%2C%202%20Dehiwala%20Rd%2C%20Boralesgamuwa!3m2!1d6.8414144!2d79.9052117!5e0!3m2!1sen!2slk!4v1725647900918!5m2!1sen!2slk" 
          width="80%" 
          height="650" 
          style={{ border: '0'}} 
          allowFullScreen={true}
          loading="lazy" 
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;



