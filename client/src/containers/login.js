import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { processLogin } from '../ducks/login';

export default function (LoginComponent) {
  const ReduxConnected = connect(null, { processLogin })(LoginComponent);
  return reduxForm({ form: 'Login' })(ReduxConnected);
}
