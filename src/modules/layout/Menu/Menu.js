import React from 'react';

import {useLocation} from 'react-router-dom';

import Tab from './Tab';
import NextFeedbackCycle from './NextFeedbackCycle';
import CurrentUser from './CurrentUser';

const menuStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '90vw',
  height: '75px',
  color: '#031323',
};

const honestoTextStyle = {
  color: '#000000',
  fontSize: '24px',
};

const Menu = () => {
  const location = useLocation();

  const isPath = pathname => location.pathname.includes(pathname);

  return (
    <div style={menuStyle}>
      <h2 style={honestoTextStyle}>Honesto</h2>
      <Tab
        text="Share Feedback"
        goto="/share-feedback"
        selected={isPath('/share-feedback')}
        notifications={2}
      />
      <Tab
        text="My Feedback"
        goto="/view-feedback/my"
        selected={isPath('/view-feedback/my')}
        notifications={8}
      />
      <Tab
        text="Team Feedback"
        goto="/view-feedback/team"
        selected={isPath('/view-feedback/team')}
      />
      <Tab text="Teams" />
      <NextFeedbackCycle />
      <CurrentUser />
    </div>
  );
};

export default Menu;
