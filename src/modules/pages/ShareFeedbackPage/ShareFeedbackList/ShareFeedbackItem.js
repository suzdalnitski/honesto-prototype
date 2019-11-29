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

const ShareFeedbackItem = ({userid, name, type}) => (
  <div style={shareFeedbackItemStyle} className={cssStyles.item}>
    <Avatar />
    <div style={usernameStyle}>{name}</div>
    <FlexSpacer />
    <ShareFeedbackButton type={type} goto={`/share-feedback/${userid}`} />
  </div>
);

ShareFeedbackItem.propTypes = {
  userid: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([FILL_OUT, VIEW_SUBMISSION]).isRequired,
};

export default ShareFeedbackItem;
