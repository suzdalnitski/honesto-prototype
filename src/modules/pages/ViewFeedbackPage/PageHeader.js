import React from 'react';

import {FeedbackPeriod, Button,  FlexSpacer} from 'modules/components';

const pageHeaderStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
};

const buttonStyle = {
  marginLeft: '20px',
  padding: '20px 20px'
}

const PageHeader = () => (
  <div style={pageHeaderStyle}>
    <h1 style={{fontSize: '30px'}}>My Feedback</h1>
    <FlexSpacer  />
    <FeedbackPeriod />
    <Button primary text="Publish Feedback" style={buttonStyle} />
  </div>
);

export default PageHeader;
