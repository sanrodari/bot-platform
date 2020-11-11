import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from '../utils/store';

import Page from './layout/Page';
import Home from './Home';
import Test from './Test';
import Counter from './Counter';
import Login from './Login';

export default function Router() {
  return (
    <ConnectedRouter history={history}>
      <Page>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/test" component={Test} />
        <Route path="/counter" component={Counter} />
      </Page>
    </ConnectedRouter>
  );
}
