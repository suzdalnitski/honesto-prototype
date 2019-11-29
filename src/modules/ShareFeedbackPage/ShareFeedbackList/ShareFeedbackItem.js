import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'modules/Avatar';
import {FlexSpacer} from 'modules/components';

import ShareFeedbackButton from './ShareFeedbackButton';
import {FILL_OUT, VIEW_SUBMISSION} from './itemType';
import cssStyles from './ShareFeedbackItem.module.css';

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

const ShareFeedbackItem = ({name, type}) => (
  <div style={shareFeedbackItemStyle} className={cssStyles.item}>
    <Avatar />
    <div style={usernameStyle}>{name}</div>
    <FlexSpacer />
    <ShareFeedbackButton type={type} />
  </div>
);

ShareFeedbackItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([FILL_OUT, VIEW_SUBMISSION]).isRequired,
};

export default ShareFeedbackItem;
