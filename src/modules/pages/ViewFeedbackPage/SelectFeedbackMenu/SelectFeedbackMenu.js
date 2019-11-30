import React from 'react';

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

const users = [
  {id: 0, name: 'Sarah Johnson', active: true},
  {id: 1, name: 'Samantha Parker', active: false},
  {id: 2, name: 'Elizabeth Baker', active: false},
  {id: 3, name: 'Mary Macleod', active: false},
];

const SelectFeedbackMenu = () => (
  <div style={menuStyle}>
    <div style={feedbackReceivedTextStyle}>FEEDBACK RECEIVED</div>
    {users.map(({id, name, active}) => (
      <SelectFeedbackMenuItem key={id} name={name} active={active} />
    ))}
  </div>
);

export default SelectFeedbackMenu;
