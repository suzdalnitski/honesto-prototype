import React from 'react';

import {Page, FeedbackPeriod} from 'modules/components';

const pageHeaderStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
};

const ViewFeedbackPage = () => (
  <Page wide>
    <div style={pageHeaderStyle}>
      <h1 style={{fontSize: '30px'}}>My Feedback</h1>
      <FeedbackPeriod />
    </div>
  </Page>
);

export default ViewFeedbackPage;
