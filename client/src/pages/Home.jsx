import React from 'react';
import { Helmet } from 'react-helmet';

import Login from '../components/Login';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home page title</title>
      </Helmet>
      <h1>Home page</h1>
      <Login />
    </div>
  );
}
