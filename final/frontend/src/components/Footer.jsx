

import React from 'react';

// Import the CSS file in Footer.js
import '../Footer.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobileAlt, faWifi } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: fiberr!!@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Plans</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        {/* <p>&copy; {new Date().getFullYear()} Your Recharge Portal. All rights reserved.</p> */}
      </div>
      <br></br>

      <footer className="foo">
      <div className="footersection">
      <div className="footericons">
        <FontAwesomeIcon icon={faCreditCard} />
        <div style={{marginLeft:20}}>

        <FontAwesomeIcon icon={faMobileAlt} />
        </div>
        <div style={{marginLeft:20}}>

        <FontAwesomeIcon icon={faWifi} />
        </div>
        {/* Add more icons as needed */}
      </div>
      <p>&copy; 2024 Fiberr!!!</p>
      <p>All rights reserved</p>
      </div>
    </footer>
    </footer>
  );
};

export default Footer;
