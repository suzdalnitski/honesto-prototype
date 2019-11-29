import React from 'react';
import PropTypes from 'prop-types';

import cssStyles from './Option.module.css';

const optionStyle = {
  backgroundColor: '#F2F3F4',
  borderRadius: '3px',
  padding: '25px',
  marginTop: '10px',
};

const Option = ({title, children}) => (
  <div style={optionStyle} className={cssStyles.option}>
    <div>{title}</div>
    <div>{children}</div>
  </div>
);

Option.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Option;
