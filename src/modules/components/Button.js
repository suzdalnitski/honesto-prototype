import React from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
  borderRadius: '4px',
  fontSize: '16px',
  padding: '5px',
};

const primaryStyle = {
  backgroundColor: '#AB61E5',
  color: '#ffffff',
};

const secondaryStyle = {
  backgroundColor: '#ffffff',
  color: '#031323',
  border: '1px solid #D9DCDE',
  boxSizing: 'border-box',
};

const Button = ({style, text, primary, secondary}) => (
  <button
    style={{
      ...defaultStyle,
      ...(primary ? primaryStyle : {}),
      ...(secondary ? secondaryStyle : {}),
      ...style,
    }}>
    {text}
  </button>
);

Button.defaultProps = {
  style: {},
};

Button.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
