import React from 'react';
import { Helmet } from 'react-helmet';

import LoginComponent from './components/Login';
import loginContainer from './containers/login';

export default function Login() {
  const EnhancedLogin = loginContainer(LoginComponent);

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <EnhancedLogin />
    </div>
  );
}
