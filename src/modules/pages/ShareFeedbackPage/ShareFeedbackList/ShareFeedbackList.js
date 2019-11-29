import React from 'react';

import ShareFeedbackItem from './ShareFeedbackItem';

const ShareFeedbackList = () => (
  <div>
    <ShareFeedbackItem userid={0} name="Sarah Johnson" type="fill-out" />
    <ShareFeedbackItem userid={1} name="Samantha Parker" type="view-submission" />
    <ShareFeedbackItem userid={2} name="Elizabeth Baker" type="view-submission" />
    <ShareFeedbackItem userid={3} name="Mary Macleod" type="view-submission" />
  </div>
);

export default ShareFeedbackList;
