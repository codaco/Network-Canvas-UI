import React from 'react';
import PropTypes from 'prop-types';
import MarkdownLabel from '../MarkdownLabel';

const Tick = ({ tick, getLabelForValue }) => {
  const { value, percent } = tick;
  const label = getLabelForValue(value);

  return (
    <div
      className="form-field-slider__tick"
      style={{
        position: 'absolute',
        left: `${percent}%`,
      }}
    >
      <MarkdownLabel label={label} className="form-field-slider__tick-label" />
    </div>
  );
};

Tick.propTypes = {
  tick: PropTypes.any.isRequired,
  getLabelForValue: PropTypes.func,
};

Tick.defaultProps = {
  tick: null,
  getLabelForValue: () => null,
};

export default Tick;
