export const SET_BOARD = 'SET_BOARD';

export const setBoard = (board) => {
  return {
    type: SET_BOARD,
    value: board,
  };
};
