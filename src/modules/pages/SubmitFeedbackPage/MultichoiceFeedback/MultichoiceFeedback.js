import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {pipe, map} from 'lodash/fp';

import {selectQuestionAnswerIds, selectAnswer} from 'modules/store';

import Option from './Option';

const MultichoiceFeedback = ({answers}) => {
  const [selection, setSelection] = useState(-1);

  return (
    <div>
      {answers.map(({id, text, title}) => (
        // In production I would memoize the onClick event handler
        <Option
          key={id}
          title={title}
          text={text}
          selected={selection === id}
          onClick={() => setSelection(id)}
        />
      ))}
    </div>
  );
};

MultichoiceFeedback.propTypes = {
  answers: PropTypes.array.isRequired,
  questionId: PropTypes.number.isRequired,
};

const mapStateToProps = (state, {questionId}) => ({
  answers: pipe(
    selectQuestionAnswerIds(state),
    map(selectAnswer(state)),
  )(questionId),
});

export default connect(mapStateToProps)(MultichoiceFeedback);
