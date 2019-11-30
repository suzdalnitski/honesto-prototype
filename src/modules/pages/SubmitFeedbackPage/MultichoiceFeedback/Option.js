import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import cssStyles from './Option.module.css';

const optionStyle = {
  backgroundColor: '#F2F3F4',
  borderRadius: '3px',
  padding: '25px',
  marginTop: '10px',
};

const Option = ({title, children, selected, onClick}) => (
  <div
    onClick={onClick}
    style={optionStyle}
    className={classNames({
      [cssStyles.option]: true,
      [cssStyles.selected]: selected,
    })}>
    <div>{title}</div>
    <div>{children}</div>
  </div>
);

Option.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Option;
