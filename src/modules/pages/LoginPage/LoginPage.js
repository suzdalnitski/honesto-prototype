import React from 'react';

import LoginBox from './LoginBox'
import LoginBackground from './login_background.svg';

const FOOTER_HEIGHT = '54px';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: `calc(100vh - ${FOOTER_HEIGHT})`,
  backgroundImage: `url(${LoginBackground})`,
  backgroundSize: 'cover',
};

const LoginPage = () => (
  <div style={style}>
    <LoginBox />
  </div>
);

export default LoginPage;
