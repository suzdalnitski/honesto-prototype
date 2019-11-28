import React from 'react';

import LoginBox from './LoginBox'

import LoginBackground from './login_background.svg';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${LoginBackground})`,
  backgroundSize: 'cover',
};

const LoginPage = () => (
  <div style={style}>
    <LoginBox />
  </div>
);

export default LoginPage;
