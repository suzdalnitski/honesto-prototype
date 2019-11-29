import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import cssStyle from './Tab.module.css';

const tabStyle = ({selected}) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  fontWeight: 600,
  height: '100%',
  padding: '25px',
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

const Tab = ({selected = false, notifications = 0, text, goto}) => {
  const history = useHistory();

  const _onClick = () => {
    goto && history.push(goto);
  };

  return (
    <button
      style={tabStyle({selected})}
      className={cssStyle.tab}
      onClick={_onClick}>
      <div style={notificationTextStyle}>
        <span>{text}</span>
        {notifications > 0 && (
          <span style={notificationStyle}>{notifications}</span>
        )}
      </div>
    </button>
  );
};

Tab.propTypes = {
  selected: PropTypes.bool,
  notifications: PropTypes.number,
  text: PropTypes.string.isRequired,
  goto: PropTypes.string,
};

export default Tab;
