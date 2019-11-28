import React from 'react';

import AppIcon from './app_icon.svg';

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '#ffffff',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  width: '30vh',
  height: '30vh',
};

const textStyle = {
  fontSize: '24px',
  lineHeight: '28px',
};

const buttonStyle = {
  width: '200px',
  height: '50px',
  borderRadius: '4px',
  backgroundColor: '#AB61E5',
  fontSize: '16px',
  lineHeight: '19px',
  fontFamily: 'inherit',
  color: '#ffffff',
};

const LoginButton = () => <button style={buttonStyle}>Login</button>;

const LoginBox = () => (
  <div style={boxStyle}>
    <img src={AppIcon} alt="App Icon" />
    <p style={textStyle}> Honesto</p>
    <LoginButton />
  </div>
);

export default LoginBox;
