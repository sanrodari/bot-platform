import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logout } from '../../ducks/user';

function Menu({ isAuthenticated, handleLogout }) {
  return (
    <nav className="block navbar blue-bg">
      <div className="max-width-4 mx-auto">
        <ul className="flex m0 p0 main-menu off-white">
          <li className="active">
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/test">Test</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            {isAuthenticated ?
              <a href="." onClick={handleLogout}>Logout</a> :
              <NavLink to="/login">Login</NavLink>
            }
          </li>
        </ul>
      </div>
    </nav>
  );
}

Menu.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

function mapStateToProps({ user: { isAuthenticated } }) {
  return {
    isAuthenticated,
  };
}

const mapDispatchToProps = {
  handleLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
