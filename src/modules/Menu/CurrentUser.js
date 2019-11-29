import React from 'react';

import Avatar from 'modules/Avatar';

const currentUserStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}

const textBlockStyle = {
  marginLeft: '15px'
}

const nameStyle = {
  fontSize: '16px',
  color: '#031323'
}

const logoutStyle = {
  fontSize: '12px',
  color: '#59636E'
}

const CurrentUser = () => (
  <div style={currentUserStyle}>
    <Avatar />
    <div style={textBlockStyle}>
      <div style={nameStyle}>Jane Smith</div>
      <div style={logoutStyle}>Logout</div>
    </div>
  </div>
);

export default CurrentUser;
