import React from 'react';
// import _ from 'lodash';
import Pixel from '../pixel/pixel';

const PixelBoard = (props) => {
  const matrix = Array(props.rows).fill().map((a, x) => {
    const cols = Array(props.columns).fill().map((b, y) => {
      return (
        <Pixel key={`${x}_${y}`} />
      );
    });
    return (
      <div key={`row_${x}`}className="matrix-row">
        {cols}
      </div>
    );
  });
  return (
    <div>
      {matrix}
    </div>
  );
};

PixelBoard.propTypes = {
  rows: React.PropTypes.number,
  columns: React.PropTypes.number,
};

export default PixelBoard;
