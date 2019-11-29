import React from 'react';

import ShareFeedbackItem from './ShareFeedbackItem';

const ShareFeedbackList = () => (
  <div>
    <ShareFeedbackItem name="Sarah Johnson" type="fill-out" />
    <ShareFeedbackItem name="Samantha Parker" type="view-submission" />
    <ShareFeedbackItem name="Elizabeth Baker" type="view-submission" />
    <ShareFeedbackItem name="Mary Macleod" type="view-submission" />
  </div>
);

export default ShareFeedbackList;
