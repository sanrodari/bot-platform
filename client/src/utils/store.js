import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducers from '../ducks';

export const history = createHistory();

export default function setupStore() {
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))),
  );

  if (module.hot) {
    module.hot.accept('../ducks', () => {
      const nextRootReducer = require('../ducks/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
