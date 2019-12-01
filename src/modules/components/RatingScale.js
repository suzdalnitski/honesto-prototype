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

const RatingScaleItem = ({color, width, onClick}) => (
  // should use button when onClick is present for accessibility
  <div onClick={onClick} style={itemStyle({color, width})}></div>
);

RatingScaleItem.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

const calcColor = ({rating, scale}) =>
  interpolate(['#DE521D', '#F5DD07', '#2BBF6A'])((rating - 1) / (scale - 1));

const calcWidth = ({scale}) => (1.0 / scale) * 0.9;

const RatingScale = ({
  rating,
  scale,
  tooltipId,
  color,
  style,
  showEmpty,
  onRate,
}) => (
  <div style={{...ratingScaleStyle, ...style}} data-tip data-for={tooltipId}>
    {range(rating).map(i => (
      <RatingScaleItem
        key={i}
        color={color || calcColor({rating, scale})}
        width={calcWidth({scale})}
        onClick={() => onRate && onRate(i + 1, scale)}
      />
    ))}
    {// if showEmpty, then display the remaining items as grey
    showEmpty &&
      range(scale - rating).map(i => (
        <RatingScaleItem
          key={i}
          color="#dddddd"
          width={calcWidth({scale})}
          onClick={() => onRate && onRate(rating + i + 1, scale)}
        />
      ))}
    <FlexSpacer />
  </div>
);

RatingScale.propTypes = {
  tooltipId: PropTypes.string,
  rating: PropTypes.number,
  scale: PropTypes.oneOf([3, 10]).isRequired,
  color: PropTypes.string,
  style: PropTypes.object,
  showEmpty: PropTypes.bool,
  onRate: PropTypes.func,
};

export default RatingScale;
