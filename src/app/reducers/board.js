import { SET_MATRIX, SET_SIZE } from '../actions/';

const createMatrix = (rows, columns) => {
  return Array(rows).fill().map(() => {
    return Array(columns).fill(0);
  });
};

const initialState = {
  matrix: createMatrix(10, 20),
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIZE:
      return { ...state,
         matrix: createMatrix(action.value.rows, action.value.columns),
       };
    case SET_MATRIX:
      return { ...state, matrix: action.value };
    default:
      return state;
  }
};

export default board;
