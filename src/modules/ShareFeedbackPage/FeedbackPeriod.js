import React from 'react';

const feedbackPeriodTextStyle = {
  color: '#59636E',
  fontSize: '12px',
  letterSpacing: '0.15em',
};

const selectStyle = {
  width: '300px',
  padding: '10px',
  marginTop: '5px',
  outline: 'none',
};

const FeedbackPeriod = () => (
  <div>
    <h3 style={feedbackPeriodTextStyle}>FEEDBACK PERIOD</h3>
    <select style={selectStyle}>
      <option>October 2018</option>
    </select>
  </div>
);

export default FeedbackPeriod;
