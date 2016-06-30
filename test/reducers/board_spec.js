import board from '../../src/app/reducers/board';

import {
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

  it('sets board correctly', () => {
    const testVal = [];
    const action = setMatrix(testVal);
    const expectedState = {
      matrix: testVal,
    };
    expect(board(initialState, action)).to.deep.equal(expectedState);
  });
});
