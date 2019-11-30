import React from 'react';
import PropTypes from 'prop-types';

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

const PageHeader = ({title}) => (
  <div style={pageHeaderStyle}>
    <h1 style={{fontSize: '30px'}}>{title}</h1>
    <FlexSpacer  />
    <FeedbackPeriod />
    <Button primary text="Publish Feedback" style={buttonStyle} />
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageHeader;
