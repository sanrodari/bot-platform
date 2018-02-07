// Actions
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Reducer
export default function reducer(state = 0, action = {}) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

// Action creators
export function increase() {
  return (dispatch) => {
    setTimeout(() => dispatch({ type: INCREASE }), 500);
  };
}
export function decrease() {
  return { type: DECREASE };
}
