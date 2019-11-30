import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import {
  MULTICHOICE_QUESTION,
  RATING_AND_TEXT_QUESTION,
  TEXT_ONLY_QUESTION,
} from 'modules/store';

import RatingScale from './RatingScale';

const itemStyle = {
  border: '1px solid #D9DCDE',
  padding: '20px',
};

const tooltipId = id => `tooltip-${id}`;

const TextOnlyItem = ({question, answer}) => (
  <div>
    <div>{question}</div>
    <p>{answer}</p>
  </div>
);

TextOnlyItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string,
};

const RatingScaleItem = ({id, question, answer, rating, scale}) => (
  <div style={{display: 'flex', width: '100%'}}>
    <div style={{flexBasis: '50%'}}>{question}</div>
    <RatingScale rating={rating} scale={scale} tooltipId={tooltipId(id)} />
    {answer && (
      <ReactTooltip id={tooltipId(id)}>
        <span>{answer}</span>
      </ReactTooltip>
    )}
  </div>
);

RatingScaleItem.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string,
  rating: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
};

const FeedbackViewItem = ({id, type, question, answer, rating, scale}) => (
  <div style={itemStyle}>
    {type === TEXT_ONLY_QUESTION ? (
      <TextOnlyItem question={question} answer={answer} />
    ) : (
      <RatingScaleItem
        id={id}
        question={question}
        answer={answer}
        rating={rating}
        scale={scale}
      />
    )}
  </div>
);

FeedbackViewItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf([
    MULTICHOICE_QUESTION,
    RATING_AND_TEXT_QUESTION,
    TEXT_ONLY_QUESTION,
  ]).isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string,
  rating: PropTypes.number,
  scale: PropTypes.number,
};

export default FeedbackViewItem;
