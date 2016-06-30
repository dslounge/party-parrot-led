import {
  SET_BOARD,
  setBoard,
} from '../../src/app/actions';

describe('actions', () => {
  it('setBoard generates correct action', () => {
    const testVal = [];
    const testAction = setBoard(testVal);
    expect(testAction.type).to.equal(SET_BOARD);
    expect(testAction.value).to.equal(testVal);
  });
});
