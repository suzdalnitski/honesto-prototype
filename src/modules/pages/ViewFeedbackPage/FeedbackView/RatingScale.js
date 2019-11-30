import React from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import interpolate from 'color-interpolate';

import {FlexSpacer} from 'modules/components';

const ratingScaleStyle = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '10px',
};

const itemStyle = ({color, width}) => ({
  height: '30px',
  flexBasis: `${width * 100.0}%`,
  backgroundColor: color,
  marginLeft: '5px',
});

const RatingScaleItem = ({color, width}) => (
  <div style={itemStyle({color, width})}></div>
);

RatingScaleItem.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

const calcColor = ({rating, scale}) =>
  interpolate(['#DE521D', '#F5DD07', '#2BBF6A'])((rating - 1) / (scale - 1));

const calcWidth = ({scale}) => (1.0 / scale) * 0.9;

const RatingScale = ({rating, scale, tooltipId}) => (
  <div style={ratingScaleStyle} data-tip data-for={tooltipId}>
    {range(rating).map(i => (
      <RatingScaleItem
        key={i}
        color={calcColor({rating, scale})}
        width={calcWidth({scale})}
      />
    ))}
    <FlexSpacer />
  </div>
);

RatingScale.propTypes = {
  tooltipId: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scale: PropTypes.oneOf([3, 10]).isRequired,
};

export default RatingScale;
