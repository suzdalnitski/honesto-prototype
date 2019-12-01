import React from 'react';
import {useSelector} from 'react-redux';

import {Avatar} from 'modules/components';
import {selectMeUser} from 'modules/store';

const currentUserStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
};

const textBlockStyle = {
  marginLeft: '15px',
};

const nameStyle = {
  fontSize: '16px',
  color: '#031323',
};

const logoutStyle = {
  fontSize: '12px',
  color: '#59636E',
};

const CurrentUser = () => {
  const user = useSelector(selectMeUser);

  return (
    <div style={currentUserStyle}>
      <Avatar />
      <div style={textBlockStyle}>
        <div style={nameStyle}>{user.name}</div>
        <div style={logoutStyle}>Logout</div>
      </div>
    </div>
  );
};

export default CurrentUser;
