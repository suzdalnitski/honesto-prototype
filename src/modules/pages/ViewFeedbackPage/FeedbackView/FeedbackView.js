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

const FREEFORM = 'freeform';
const RATING_SCALE = 'rating-scale';

const feedbackList = [
  {
    id: 0,
    question: 'Do you have any other feedback for this person?',
    answer:
      'Hey Sarah, You are doing great, keep up the good work!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a euismod dolor, non blandit nisl. Sed euismod enim in semper consectetur. Duis elementum venenatis finibus. Sed quis neque diam. Aliquam nec blandit mi, et cursus dolor. Duis pharetra purus nunc, in facilisis ex auctor id. Duis nec metus arcu. Curabitur in semper tellus. Cras luctus tellus lectus, a lobortis velit convallis non. Praesent cursus vel velit eget hendrerit.',
    type: FREEFORM,
  },
  {
    id: 1,
    question: 'How well did this person do X thing last month?',
    rating: 2,
    scale: 3,
    type: RATING_SCALE,
  },
  {
    id: 2,
    question: 'How well did this person do X thing last month?',
    rating: 1,
    scale: 3,
    type: RATING_SCALE,
  },
  {
    id: 3,
    question: 'How well did this person do X thing last month?',
    rating: 3,
    scale: 3,
    type: RATING_SCALE,
  },
  {
    id: 4,
    question: 'How well did this person do X thing last month?',
    answer: 'Meh',
    rating: 2,
    scale: 10,
    type: RATING_SCALE,
  },
  {
    id: 5,
    question: 'How well did this person do X thing last month?',
    answer: 'Ok',
    rating: 6,
    scale: 10,
    type: RATING_SCALE,
  },
  {
    id: 6,
    question: 'How well did this person do X thing last month?',
    answer: 'Super',
    rating: 10,
    scale: 10,
    type: RATING_SCALE,
  },
];

// ensures that freeform text is rendered at the end
const orderFeedbackList = feedbackList =>
  orderBy(feedbackList, ['type'], ['asc']);

const FeedbackView = ({username, fromUser, toUser}) => {
  const feedbackList = useSelector(state =>
    selectFeedbackForUser(state)({fromUser, toUser}),
  );

  console.log(feedbackList);

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
            rating={rating || answer && answer.rating}
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
