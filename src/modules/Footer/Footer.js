import React from 'react';

import TheoremLogo from './theorem_logo.svg';

const footerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
  backgroundColor: '#031323',
  height: '54px',
  color: '#ffffff',
};

const logoStyle = {
  //marginLeft: 'auto'
};

const copyrightStyle = {
  marginLeft: '150px',
};

const Footer = () => (
  <div style={footerStyle}>
    <img src={TheoremLogo} alt="Theorem Logo" style={logoStyle} />
    <p style={copyrightStyle}>
      Copyright © 2019 Theorem, LLC. All Rights Reserved.
    </p>
  </div>
);

export default Footer;
