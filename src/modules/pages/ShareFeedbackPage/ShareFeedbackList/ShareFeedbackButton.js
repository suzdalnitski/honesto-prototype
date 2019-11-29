import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'modules/components';

import {FILL_OUT, VIEW_SUBMISSION} from './itemType';

const buttonStyle = {
  alignSelf: 'stretch',
  justifySelf: 'flex-end',
  width: '150px',
  height: '50px',
};

const ShareFeedbackButton = ({type}) => (
  <>
    {type === FILL_OUT && <Button primary style={buttonStyle} text="Fill Out" />}
    {type === VIEW_SUBMISSION && (
      <Button secondary style={buttonStyle} text="View Submission" />
    )}
  </>
);

ShareFeedbackButton.propTypes = {
  type: PropTypes.oneOf([FILL_OUT, VIEW_SUBMISSION]).isRequired,
};

export default ShareFeedbackButton;
