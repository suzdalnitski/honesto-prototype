import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {Avatar} from 'modules/components';

import cssStyles from './SelectFeedbackMenuItem.module.css';

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #D9DCDE',
  padding: '15px',
  color: '#59636E',
};

const textStyle = {
  fontSize: '16px',
  fontWeight: '600',
  marginLeft: '15px',
};

const SelectFeedbackMenuItem = ({name, active}) => (
  <div
    style={itemStyle}
    className={classNames({
      [cssStyles.item]: true,
      [cssStyles.itemActive]: active,
    })}>
    <Avatar />
    <div style={textStyle}>{name}</div>
  </div>
);

SelectFeedbackMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default SelectFeedbackMenuItem;
