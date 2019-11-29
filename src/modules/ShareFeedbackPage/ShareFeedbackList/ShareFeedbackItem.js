import React from 'react';

import Avatar from 'modules/Avatar';
import {FlexSpacer} from 'modules/components';

import ShareFeedbackButton from './ShareFeedbackButton';

const shareFeedbackItemStyle = {
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  padding: '20px',
};

const usernameStyle = {
  marginLeft: '30px',
  color: '#59636E',
  fontSize: '22px',
};

const ShareFeedbackItem = () => (
  <div style={shareFeedbackItemStyle}>
    <Avatar />
    <div style={usernameStyle}>Chris Johnson</div>
    <FlexSpacer />
    <ShareFeedbackButton />
  </div>
);

export default ShareFeedbackItem;
