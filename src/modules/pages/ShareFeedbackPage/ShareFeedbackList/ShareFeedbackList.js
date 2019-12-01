import React from 'react';
import {useSelector} from 'react-redux';

import {
  selectNotMeUsers,
  selectMeUser,
  selectHasUnansweredQuestions,
} from 'modules/store';

import ShareFeedbackItem from './ShareFeedbackItem';

const getFeedbackItemType = feedbackSubmitted =>
  feedbackSubmitted ? 'view-submission' : 'fill-out';

const ShareFeedbackList = () => {
  const notMeUsers = useSelector(selectNotMeUsers);
  const meUser = useSelector(selectMeUser);

  const hasUnansweredQuestionsMap = useSelector(
    selectHasUnansweredQuestions({fromUser: meUser.id}),
  );

  return (
    <div>
      {notMeUsers.map(({id, name}) => (
        <ShareFeedbackItem
          key={id}
          userid={id}
          name={name}
          type={getFeedbackItemType(!hasUnansweredQuestionsMap[id])}
        />
      ))}
    </div>
  );
};

export default ShareFeedbackList;
