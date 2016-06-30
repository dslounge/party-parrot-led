import board from '../../src/app/reducers/board';

import {
  setBoard,
} from '../../src/app/actions';

describe('board reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      board: Array(10).fill().map(() => {
        return Array(20).fill(0);
      }),
    };
  });

  it('sets the right initial state', () => {
    expect(board(undefined, {})).to.deep.equal(initialState);
  });

  it('sets board correctly', () => {
    const testVal = [];
    const action = setBoard(testVal);
    const expectedState = {
      board: testVal,
    };
    expect(board(initialState, action)).to.deep.equal(expectedState);
  });
});
