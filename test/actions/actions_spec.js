import {
  SET_MATRIX,
  setMatrix,
} from '../../src/app/actions';

describe('actions', () => {
  it('setBoard generates correct action', () => {
    const testVal = [];
    const testAction = setMatrix(testVal);
    expect(testAction.type).to.equal(SET_MATRIX);
    expect(testAction.value).to.equal(testVal);
  });
});
