import * as counterActions from '../../src/actions/counter';
import { COUNTER } from '../../src/utils/actionTypes';

describe('counter actions', () => {
  it('increase action', () => {
    expect(counterActions.increase()).toEqual({ type: COUNTER.INCREASE });
  });

  it('decrease action', () => {
    expect(counterActions.decrease()).toEqual({ type: COUNTER.DECREASE });
  });
});
