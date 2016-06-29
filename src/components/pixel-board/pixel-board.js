import React from 'react';
import Pixel from '../pixel/pixel';

const PixelBoard = (props) => {
  const matrix = props.matrix.map((row, x) => {
    const cols = row.map((val, y) => {
      return (<Pixel key={`${x}_${y}`} on={val === '1'} />);
    });
    return (<div key={`row_${x}`} className="matrix-row">{cols}</div>);
  });
  return (
    <div>{matrix}</div>
  );
};

PixelBoard.propTypes = {
  matrix: React.PropTypes.array,
};

export default PixelBoard;
