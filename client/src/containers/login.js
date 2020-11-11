import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { login } from '../ducks/user';

const mapDispatchToProps = {
  login,
};

export default function (LoginComponent) {
  const ReduxConnected = connect(null, mapDispatchToProps)(LoginComponent);
  return reduxForm({ form: 'Login' })(ReduxConnected);
}
