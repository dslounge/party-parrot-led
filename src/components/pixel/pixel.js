import React from 'react';
import classnames from 'classnames';
require('./pixel-style.css');

const Pixel = (props) => {
  const className = classnames('pixel', { on: props.on, off: !props.on });

  return (
    <div className={className} />
  );
};

Pixel.propTypes = {
  on: React.PropTypes.bool,
};

export default Pixel;
