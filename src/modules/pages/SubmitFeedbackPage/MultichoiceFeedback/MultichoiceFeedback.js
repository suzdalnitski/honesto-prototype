import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {pipe, map} from 'lodash/fp';

import {selectQuestionAnswerIds, selectAnswer} from 'modules/store';

import Option from './Option';

const answerSelector = questionId => state =>
  pipe(
    questionId => selectQuestionAnswerIds(questionId)(state),
    map(answer => selectAnswer(answer)(state)),
  )(questionId);

const MultichoiceFeedback = ({onSelect, questionId}) => {
  const [selection, setSelection] = useState(-1);

  const answers = useSelector(answerSelector(questionId));

  return (
    <div>
      {answers.map(({id, text, title}) => (
        <Option
          key={id}
          title={title}
          text={text}
          selected={selection === id}
          // In production I would memoize the onClick event handler
          onClick={() => {
            setSelection(id);
            onSelect(id);
          }}
        />
      ))}
    </div>
  );
};

MultichoiceFeedback.propTypes = {
  questionId: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MultichoiceFeedback;
