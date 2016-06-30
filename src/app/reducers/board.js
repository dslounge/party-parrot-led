import { SET_BOARD } from '../actions/';

const initialState = {
  board: Array(10).fill().map(() => {
    return Array(20).fill(0);
  }),
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return { ...state, board: action.value };
    default:
      return state;
  }
};

export default board;
