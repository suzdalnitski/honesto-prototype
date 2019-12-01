import React from 'react';
import PropTypes from 'prop-types';

const textAreaStyle = {
  width: '100%',
  minHeight: '200px',
  border: 'none',
  outline: 'none',
};

const TextOnlyFeedback = ({onChange, value}) => (
  <div>
    <textarea
      style={textAreaStyle}
      value={value || ""}
      placeholder="Say something"
      onChange={event => {
        onChange(event.target.value);
      }}
    />
  </div>
);

TextOnlyFeedback.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default TextOnlyFeedback;
