import React from 'react';
import _ from 'lodash';
import Pixel from './components/pixel/pixel';

const PixelBoard = (props) => {

  const rows = matrix.map((row) => {
    const pixels = row.map((val) => {
      return (
        <Pixel on={val === '1'} />
      );
    });

  return (
  );
};

Pixel.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  on: React.PropTypes.bool,
};

export default PixelBoard;
