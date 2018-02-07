import React from 'react';
import { Helmet } from 'react-helmet';

import CounterComponent from '../components/Counter';
import counterContainer from '../containers/counter';

export default function Counter() {
  const EnhancedCounter = counterContainer(CounterComponent);

  return (
    <div>
      <Helmet>
        <title>Redux counter</title>
      </Helmet>
      <h1>Counter using redux</h1>

      <EnhancedCounter />
    </div>
  );
}
