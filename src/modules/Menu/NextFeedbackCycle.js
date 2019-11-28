import React from 'react';

const style = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
};

const textDivStyle = {
  //fontSize: '16px',
};

const nextFeedbackTextStyle = {
  color: '#59636e',
  fontSize: '11px',
};

const daysTextStyle = {
  color: '#17bea0'
};

const NextFeedbackCycle = () => (
  <div style={style}>
    <div style={textDivStyle}>
      <div style={nextFeedbackTextStyle}>Next Feedback Cycle:</div>
      <div>
        Sept 2018 -<span style={daysTextStyle}>4 days</span>
      </div>
    </div>
  </div>
);

export default NextFeedbackCycle;
