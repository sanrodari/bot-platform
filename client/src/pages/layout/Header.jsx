import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header({ isAuthenticated, handleLogout }) {
  return (
    <header>
      <div className="inline-block py2 pr2">
        {NAME}
      </div>
      <div className="inline-block">
        <Link to="/" className="p2">Home</Link>
        <Link to="/test" className="p2">Test</Link>
        <Link to="/counter" className="p2">Counter</Link>
        {isAuthenticated ?
          <a className="p2" href="." onClick={handleLogout}>Logout</a> :
          <Link to="/login" className="p2">Login</Link>
        }
      </div>
    </header>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
