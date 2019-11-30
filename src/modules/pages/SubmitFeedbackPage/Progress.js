import React from 'react';
import PropTypes from 'prop-types';

const progressStyle = {
  marginTop: '30px',
};

const questionsCompletedTextStyle = {
  fontSize: '12px',
  fontWeight: '800',
  letterSpacing: '0.15em',
  marginTop: '10px',
};

const progressBarStyle = {
  width: '100%',
  height: '10px',
  backgroundColor: '#dddddd',
  borderRadius: '4px',
  overflow: 'hidden'
};

const progressBarFillStyle = {
  height: '100%',
  backgroundColor: 'cyan',
};

const ProgressBar = ({progress}) => (
  <div style={progressBarStyle}>
    <div style={{...progressBarFillStyle, width: `${progress * 100}%`}}></div>
  </div>
);

const Progress = ({completed, outOf}) => (
  <div style={progressStyle}>
    <ProgressBar progress={completed / outOf} />
    <div style={questionsCompletedTextStyle}>QUESTIONS COMPLETED</div>
    <div>
      {completed}/{outOf}
    </div>
  </div>
);

Progress.propTypes = {
  completed: PropTypes.number.isRequired,
  outOf: PropTypes.number.isRequired,
};

export default Progress;
