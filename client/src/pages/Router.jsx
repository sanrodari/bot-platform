import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Page from './layout/Page';
import Home from './Home';
import Test from './Test';
import Counter from './Counter';

export default function Router() {
  return (
    <BrowserRouter>
      <Page>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/counter" component={Counter} />
      </Page>
    </BrowserRouter>
  );
}
