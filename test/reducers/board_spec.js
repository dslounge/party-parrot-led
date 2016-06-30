import board from '../../src/app/reducers/board';

import {
  setSize,
  setMatrix,
} from '../../src/app/actions';

describe('board reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      matrix: Array(10).fill().map(() => {
        return Array(20).fill(0);
      }),
    };
  });

  it('sets the right initial state', () => {
    expect(board(undefined, {})).to.deep.equal(initialState);
  });

  it('sets size correctly', () => {
    const action = setSize(7, 9);
    const expectedState = {
      matrix: Array(7).fill().map(() => {
        return Array(9).fill(0);
      }),
    };
    expect(board(initialState, action)).to.deep.equal(expectedState);
  });

  it('sets matrix correctly', () => {
    const testVal = [];
    const action = setMatrix(testVal);
    const expectedState = {
      matrix: testVal,
    };
    expect(board(initialState, action)).to.deep.equal(expectedState);
  });
});
