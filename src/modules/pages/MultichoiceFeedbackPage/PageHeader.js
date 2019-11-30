import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'modules/components';

const pageHeaderStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
};

const shareYourFeedbackTextStyle = {
  fontSize: '12px',
  fontWeight: '600',
  letterSpacing: '0.15em',
  color: '#ACB1B6',
  textTransform: 'uppercase',
};

const PageHeader = ({username, question}) => (
  <div style={pageHeaderStyle}>
    <div>
      <h1 style={{fontSize: '30px'}}>{question}</h1>
      <div style={shareYourFeedbackTextStyle}>
        SHARE YOUR FEEDBACK FOR {username}
      </div>
    </div>
    <Avatar />
  </div>
);

PageHeader.propTypes = {
  username: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};

export default PageHeader;
