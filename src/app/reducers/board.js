const initialState = {
  board: Array(10).fill().map(() => {
    return Array(20).fill(0);
  }),
};

const board = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default board;
