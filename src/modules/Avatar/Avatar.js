import React from 'react';

import Person1 from './person1.jpg';

const style = {
  borderRadius: '50%',
  overflow: 'hidden',
  width: '60px',
  height: '60px',
};

const imgStyle = {
  objectFit: 'cover',
  width: '100%',
  height: '100%'
};

const Avatar = () => (
  <div style={style}>
    <img src={Person1} alt="avatar" style={imgStyle} />
  </div>
);

export default Avatar;
