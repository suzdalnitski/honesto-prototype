import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {pipe, map} from 'lodash/fp';

import {selectQuestionAnswerIds, selectAnswer} from 'modules/store';

const answerSelector = questionId => state =>
  pipe(
    questionId => selectQuestionAnswerIds(questionId)(state),
    map(answer => selectAnswer(answer)(state)),
  )(questionId);

const RatingAndTextFeedback = ({onSelect, questionId}) => {
  const [selection, setSelection] = useState(-1);

  const answers = useSelector(answerSelector(questionId));

  return (
    <div>
      {answers.map(({id, text, title}) => (
        <div />
      ))}
    </div>
  );
};

RatingAndTextFeedback.propTypes = {
  questionId: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default RatingAndTextFeedback;
