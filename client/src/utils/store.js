import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from '../ducks';

export default function setupStore() {
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)),
  );

  if (module.hot) {
    module.hot.accept('../ducks', () => {
      const nextRootReducer = require('../ducks/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
