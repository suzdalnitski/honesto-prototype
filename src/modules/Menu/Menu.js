import React from 'react';

import Tab from './Tab';
import NextFeedbackCycle from './NextFeedbackCycle';
import CurrentUser from './CurrentUser';

const menuStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '90vh',
  height: '75px',
  color: '#031323',
};

const honestoTextStyle = {
  color: '#000000',
  fontSize: '24px',
};

const Avatar = () => <div></div>;

const Menu = () => (
  <div style={menuStyle}>
    <h2 style={honestoTextStyle}>Honesto</h2>
    <Tab text="Share Feedback" selected notifications={2} />
    <Tab text="My Feedback" notifications={8} />
    <Tab text="Team Feedback" />
    <Tab text="Teams" />
    <NextFeedbackCycle />
    <Avatar />
    <CurrentUser />
  </div>
);

export default Menu;
