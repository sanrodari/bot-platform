import React from 'react';
import Favicon from 'react-favicon';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import Router from '../pages/Router';
import { checkAuth } from '../ducks/user';
import favicon from '../assets/favicon.ico';
import setupStore from '../utils/store';
import '../styles/index.scss';

const store = setupStore();
store.dispatch(checkAuth());

export default function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <div>
          <Favicon url={favicon} />
          <Router />
        </div>
      </Provider>
    </AppContainer>
  );
}
