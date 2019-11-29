import React from 'react';
import {useHistory} from 'react-router-dom';

import {Button} from 'modules/components';

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
};

const LoginBox = () => {
  const history = useHistory();

  const onLoginClick = () => {
    history.push('/share-feedback');
  };

  return (
    <div style={boxStyle}>
      <img src={AppIcon} alt="App Icon" />
      <p style={textStyle}>Honesto</p>
      <Button onClick={onLoginClick} primary style={buttonStyle} text="Login" />
    </div>
  );
};

export default LoginBox;
