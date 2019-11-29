import React from 'react';

import {Button} from 'modules/components';

const buttonStyle = {
  alignSelf: 'stretch',
  justifySelf: 'flex-end',
  width: '150px',
  height: '50px',
};

const BUTTON_TYPE_FILLOUT = 'BUTTON_TYPE_FILLOUT';
const BUTTON_TYPE_VIEW_SUBMISSION = 'BUTTON_TYPE_VIEW_SUBMISSION';

const ShareFeedbackButton = () => (
  <Button primary style={buttonStyle} text="Fill Out" />
);

export default ShareFeedbackButton;
