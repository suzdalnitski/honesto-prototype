import React from 'react';

import {Page} from 'modules/components';

import FeedbackPeriod from './FeedbackPeriod';
import ShareFeedbackList from './ShareFeedbackList';

const pageHeaderStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
};

const ShareFeedbackPage = () => (
  <Page>
    <div style={pageHeaderStyle}>
      <h1 style={{fontSize: '30px'}}>Share Feedback</h1>
      <FeedbackPeriod />
    </div>
    <ShareFeedbackList />
  </Page>
);

export default ShareFeedbackPage;
