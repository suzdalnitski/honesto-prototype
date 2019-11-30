import React from 'react';

import {Page} from 'modules/layout';

import PageHeader from './PageHeader';
import FeedbackView from './FeedbackView';
import SelectFeedbackMenu from './SelectFeedbackMenu';

const pageContentStyle = {
  display: 'flex',
  width: '100%',
};

const ViewFeedbackPage = () => (
  <Page wide>
    <PageHeader />
    <div style={pageContentStyle}>
      <SelectFeedbackMenu />
      <FeedbackView />
    </div>
  </Page>
);

export default ViewFeedbackPage;
