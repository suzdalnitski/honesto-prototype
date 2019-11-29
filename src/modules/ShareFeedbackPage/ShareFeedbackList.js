import React from 'react';

import Avatar from 'modules/Avatar';
import {Button, FlexSpacer} from 'modules/components';

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

const buttonStyle = {
  alignSelf: 'stretch',
  justifySelf: 'flex-end',
  width: '150px',
  height: '50px',
};

const BUTTON_TYPE_FILLOUT = 'BUTTON_TYPE_FILLOUT';
const BUTTON_TYPE_VIEW_SUBMISSION = 'BUTTON_TYPE_VIEW_SUBMISSION';

const ShareFeedbackButton = () => (
  <Button style={buttonStyle} text="Fill Out" />
);

const ShareFeedbackItem = () => (
  <div style={shareFeedbackItemStyle}>
    <Avatar />
    <div style={usernameStyle}>Chris Johnson</div>
    <FlexSpacer />
    <ShareFeedbackButton />
  </div>
);

const ShareFeedbackList = () => (
  <div>
    <ShareFeedbackItem />
    <ShareFeedbackItem />
    <ShareFeedbackItem />
  </div>
);

export default ShareFeedbackList;
