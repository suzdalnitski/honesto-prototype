import React from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import {useSelector} from 'react-redux';

import {selectFeedbackForUser} from 'modules/store';

import FeedbackViewItem from './FeedbackViewItem';

const feedbackViewStyle = {
  flex: '1 0 70%',
};

const headerTextStyle = {
  fontSize: '22px',
  padding: '20px',
};

// ensures that freeform text is rendered at the end
const orderFeedbackList = feedbackList =>
  orderBy(feedbackList, ['type'], ['asc']);

const FeedbackView = ({username, fromUser, toUser}) => {
  const feedbackList = useSelector(state =>
    selectFeedbackForUser(state)({fromUser, toUser}),
  );

  return (
    <div style={feedbackViewStyle}>
      <h1 style={headerTextStyle}>{username}'s Feedback</h1>
      {orderFeedbackList(feedbackList).map(
        ({type, question, answer, answerText, rating, scale}, index) => (
          <FeedbackViewItem
            key={index}
            id={index}
            type={type}
            question={question.text}
            answer={answerText || answer.text}
            rating={rating || (answer && answer.rating)}
            scale={scale}
          />
        ),
      )}
    </div>
  );
};

FeedbackView.propTypes = {
  username: PropTypes.string.isRequired,
  fromUser: PropTypes.number.isRequired,
  toUser: PropTypes.number.isRequired,
};

export default FeedbackView;
