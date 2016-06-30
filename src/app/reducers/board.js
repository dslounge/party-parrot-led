import { SET_MATRIX } from '../actions/';

const initialState = {
  matrix: Array(10).fill().map(() => {
    return Array(20).fill(0);
  }),
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATRIX:
      return { ...state, matrix: action.value };
    default:
      return state;
  }
};

export default board;
