import React from 'react';

import FeedbackViewItem from './FeedbackViewItem';

const feedbackViewStyle = {
  flex: '1 0 auto',
};

const headerTextStyle = {
  fontSize: '22px',
  padding: '20px',
};

const feedbackList = [
  {
    id: 1,
    question: 'How well did this person do X thing last month?',
    rating: 2,
    scale: 3,
  },
  {
    id: 2,
    question: 'How well did this person do X thing last month?',
    rating: 1,
    scale: 3,
  },
  {
    id: 3,
    question: 'How well did this person do X thing last month?',
    rating: 3,
    scale: 3,
  },
  {
    id: 4,
    question: 'How well did this person do X thing last month?',
    answer: 'Meh',
    rating: 2,
    scale: 10,
  },
  {
    id: 5,
    question: 'How well did this person do X thing last month?',
    answer: 'Ok',
    rating: 6,
    scale: 10,
  },
  {
    id: 6,
    question: 'How well did this person do X thing last month?',
    answer: 'Super',
    rating: 10,
    scale: 10,
  },
];

const FeedbackView = () => (
  <div style={feedbackViewStyle}>
    <h1 style={headerTextStyle}>John Smith's Feedback</h1>
    {feedbackList.map(({id, question, answer, rating, scale}) => (
      <FeedbackViewItem
        key={id}
        id={id}
        question={question}
        answer={answer}
        rating={rating}
        scale={scale}
      />
    ))}
  </div>
);

export default FeedbackView;
