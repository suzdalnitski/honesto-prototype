import React from 'react';


import FeedbackPeriod from './FeedbackPeriod';
import ShareFeedbackList from './ShareFeedbackList';

const menuHeight = '75px';
const footerHeight = '54px';

const pageStyle = {
  minHeight: `calc(100vh - ${menuHeight} - ${footerHeight})`,
  display: 'flex',
  justifyContent: 'center',
};

const pageContentStyle = {
  width: '800px',
  marginTop: '30px',
};

const pageHeaderStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
};

const ShareFeedbackPage = () => (
  <div style={pageStyle}>
    <div style={pageContentStyle}>
      <div style={pageHeaderStyle}>
        <h1 style={{fontSize: '30px'}}>Share Feedback</h1>
        <FeedbackPeriod />
      </div>
      <ShareFeedbackList />
    </div>
  </div>
);

export default ShareFeedbackPage;
