import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import RatingScale from './RatingScale';

const itemStyle = {
  display: 'flex',
  border: '1px solid #D9DCDE',
  padding: '20px',
};

const tooltipId = id => `tooltip-${id}`;

const FeedbackViewItem = ({id, question, answer, rating, scale}) => (
  <div style={itemStyle}>
    <div style={{flexBasis: '50%'}}>{question}</div>
    <RatingScale rating={rating} scale={scale} tooltipId={tooltipId(id)} />
    {answer && (
      <ReactTooltip id={tooltipId(id)}>
        <span>{answer}</span>
      </ReactTooltip>
    )}
  </div>
);

FeedbackViewItem.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string,
  rating: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
};

export default FeedbackViewItem;
