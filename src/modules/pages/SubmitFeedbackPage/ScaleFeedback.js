import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import {selectQuestion} from 'modules/store';
import {RatingScale} from 'modules/components';

const ScaleFeedback = ({questionId, onChange, value}) => {
  const question = useSelector(selectQuestion(questionId));

  return (
    <div>
      <p style={{padding: '15px'}}>{question.details}</p>
      <RatingScale
        rating={value}
        scale={10}
        color="#AB61E5"
        style={{marginTop: '20px'}}
        showEmpty
        onRate={onChange}
      />
    </div>
  );
};

ScaleFeedback.propTypes = {
  questionId: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
};

export default ScaleFeedback;
