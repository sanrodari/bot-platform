import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Input from './common/Input';

export default function Login({ handleSubmit, processLogin }) {
  return (
    <div className="p3">
      <form onSubmit={handleSubmit(processLogin)}>
        <div className="py1">
          <label htmlFor="email">
            Email:
            <Field name="email" placeholder="Enter your email addres" type="text" component={Input} />
          </label>
        </div>

        <div className="py1">
          <label htmlFor="password">
            Password:
            <Field name="password" placeholder="Enter your password" type="password" component={Input} />
          </label>
        </div>

        <div className="py1">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  processLogin: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
