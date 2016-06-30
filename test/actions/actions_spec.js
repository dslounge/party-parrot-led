import {
  SET_SIZE,
  SET_MATRIX,
  setSize,
  setMatrix,
} from '../../src/app/actions';

describe('actions', () => {
  it('setBoard generates correct action', () => {
    const testVal = [];
    const testAction = setMatrix(testVal);
    expect(testAction.type).to.equal(SET_MATRIX);
    expect(testAction.value).to.equal(testVal);
  });

  it('setSize generates correct action', () => {
    const testAction = setSize(7, 9);
    expect(testAction.type).to.equal(SET_SIZE);
    expect(testAction.value).to.deep.equal({ rows: 7, columns: 9 });
  });
});
