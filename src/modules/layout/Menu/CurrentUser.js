import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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

const CurrentUser = ({user}) => (
  <div style={currentUserStyle}>
    <Avatar />
    <div style={textBlockStyle}>
      <div style={nameStyle}>{user.name}</div>
      <div style={logoutStyle}>Logout</div>
    </div>
  </div>
);

CurrentUser.propTypes = {
  // wouldn't actully use .object in production, would define a custom PropType instead
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: selectMeUser(state),
});

export default connect(mapStateToProps)(CurrentUser);
