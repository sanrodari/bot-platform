import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
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
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <input
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            value={password}
            placeholder="Enter your password"
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
};
