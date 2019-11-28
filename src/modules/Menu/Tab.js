import React from 'react';
import PropTypes from 'prop-types';

const tabStyle = ({selected}) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  height: '100%',
  ...(selected
    ? {
        borderBottom: '3px solid #ab61e5',
      }
    : {}),
});

const notificationTextStyle = {
  position: 'relative',
};

const notificationStyle = {
  position: 'absolute',
  top: '-10px',
  right: '-20px',
  width: '15px',
  height: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '11px',
  color: '#ffffff',
  backgroundColor: '#ab61e5',
  borderRadius: '50%',
};

const Tab = ({selected = false, notifications = 0, text}) => (
  <div style={tabStyle({selected})}>
    <div style={notificationTextStyle}>
      <span>{text}</span>
      {notifications > 0 && (
        <span style={notificationStyle}>{notifications}</span>
      )}
    </div>
  </div>
);

Tab.propTypes = {
  selected: PropTypes.bool,
  notifications: PropTypes.number,
  text: PropTypes.string.isRequired,
};

export default Tab;
