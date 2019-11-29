import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {useHistory} from 'react-router-dom';

import cssStyles from './Button.module.css';

const defaultStyle = {
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: '600',
  padding: '5px',
};

const primaryStyle = {
  backgroundColor: '#AB61E5',
  color: '#ffffff',
};

const outlineStyle = {
  backgroundColor: 'transparent',
  color: '#031323',
  border: '1px solid #D9DCDE',
  boxSizing: 'border-box',
};

const transparentStyle = {
  backgroundColor: 'transparent',
  color: '#031323',
};

const secondaryStyle = {
  backgroundColor: '#ACB1B6',
  color: '#ffffff',
};

const Button = ({
  style,
  text,
  primary,
  outline,
  secondary,
  transparent,
  goto,
  onClick,
}) => {
  const history = useHistory();

  const _onClick = () => {
    goto && history.push(goto);
    onClick && onClick();
  };

  return (
    <button
      onClick={_onClick}
      style={{
        ...defaultStyle,
        ...(primary ? primaryStyle : {}),
        ...(outline ? outlineStyle : {}),
        ...(secondary ? secondaryStyle : {}),
        ...(transparent ? transparentStyle : {}),
        ...style,
      }}
      className={classNames({
        [cssStyles.primary]: primary,
        [cssStyles.outline]: outline,
        [cssStyles.secondary]: secondary,
        [cssStyles.transparent]: transparent,
      })}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  style: {},
};

Button.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  secondary: PropTypes.bool,
  transparent: PropTypes.bool,
  goto: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
