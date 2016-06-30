export const SET_MATRIX = 'SET_MATRIX';
export const SET_SIZE = 'SET_SIZE';

export const setMatrix = (matrix) => {
  return {
    type: SET_MATRIX,
    value: matrix,
  };
};

export const setSize = (rows, columns) => {
  return {
    type: SET_SIZE,
    value: { rows, columns },
  };
};
