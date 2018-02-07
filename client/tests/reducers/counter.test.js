import counter from '../../src/reducers/counter';
import { COUNTER } from '../../src/utils/actionTypes';

describe('counter reducer', () => {
  it('default', () => {
    expect(counter(undefined, {})).toBe(0);
  });

  it('increase', () => {
    expect(counter(0, { type: COUNTER.INCREASE })).toBe(1);
  });

  it('decrease', () => {
    expect(counter(0, { type: COUNTER.DECREASE })).toBe(-1);
  });
});
