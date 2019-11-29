import React from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
  borderRadius: '4px',
  backgroundColor: '#AB61E5',
  fontSize: '16px',
  color: '#ffffff',
  padding: '5px'
};

const Button = ({style, text}) => (
  <button style={{...defaultStyle, ...style}}>{text}</button>
);

Button.defaultProps = {
  style: {},
};

Button.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
};

export default Button;
