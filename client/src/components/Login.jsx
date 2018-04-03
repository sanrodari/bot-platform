import React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { login } from '../ducks/user';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <div>
          <input
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            value={email}
            placeholder="Email..."
          />
        </div>
        <div>
          <input
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            value={password}
            placeholder="Password..."
          />
        </div>
        <button
          onClick={() => this.props.login(this.state.email, this.state.password)}
        >
          Login
        </button>
        {get(this.props, 'user.email')}
        {get(this.props, 'user.token')}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
