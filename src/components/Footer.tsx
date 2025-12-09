import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="container">
      <p>
        &copy; {new Date().getFullYear()} Fay Nguyen. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;