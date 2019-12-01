import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import {selectQuestion} from 'modules/store';
import {RatingScale} from 'modules/components';

const ScaleFeedback = ({questionId, onRate}) => {
  const question = useSelector(selectQuestion(questionId));
  const [rating, setRating] = useState(0);

  return (
    <div>
      <p style={{padding: '15px'}}>{question.details}</p>
      <RatingScale
        rating={rating}
        scale={10}
        color="#AB61E5"
        style={{marginTop: '20px'}}
        showEmpty
        onRate={(rating, _scale) => {
          setRating(rating);
          onRate(rating);
        }}
      />
    </div>
  );
};

ScaleFeedback.propTypes = {
  questionId: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  onRate: PropTypes.func.isRequired,
};

export default ScaleFeedback;
