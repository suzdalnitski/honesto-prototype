import React from 'react';
import {useSelector} from 'react-redux';

import {
  selectNotMeUsers,
  selectIsAllFeedbackComplete,
} from 'modules/store';

import ShareFeedbackItem from './ShareFeedbackItem';

const getFeedbackItemType = feedbackSubmitted =>
  feedbackSubmitted ? 'view-submission' : 'fill-out';

const ShareFeedbackList = () => {
  const notMeUsers = useSelector(selectNotMeUsers);

  const isFeedbackCompleteForUser = useSelector(selectIsAllFeedbackComplete);

  return (
    <div>
      {notMeUsers.map(({id, name}) => (
        <ShareFeedbackItem
          key={id}
          userid={id}
          name={name}
          type={getFeedbackItemType(isFeedbackCompleteForUser[id])}
        />
      ))}
    </div>
  );
};

export default ShareFeedbackList;
