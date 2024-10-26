// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2024 Credit and Savings Management System</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white mx-2">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white mx-2">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white mx-2">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
