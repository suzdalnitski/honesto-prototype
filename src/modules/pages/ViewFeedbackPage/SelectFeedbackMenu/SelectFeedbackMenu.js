import React from 'react';
import PropTypes from 'prop-types';

import SelectFeedbackMenuItem from './SelectFeedbackMenuItem';

const menuStyle = {
  flex: '0 1 30%',
};

const feedbackReceivedTextStyle = {
  fontSize: '12px',
  color: '#59636E',
  letterSpacing: '0.15em',
  padding: '5px',
  margin: '10px',
};

const SelectFeedbackMenu = ({users, selectedUser, onSelect}) => (
  <div style={menuStyle}>
    <div style={feedbackReceivedTextStyle}>FEEDBACK RECEIVED</div>
    {users.map(({id, name}) => (
      <SelectFeedbackMenuItem
        key={id}
        name={name}
        selected={selectedUser === id}
        onClick={() => onSelect(id)}
      />
    ))}
  </div>
);

SelectFeedbackMenu.propTypes = {
  users: PropTypes.array.isRequired,
  selectedUser: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
};

export default SelectFeedbackMenu;
