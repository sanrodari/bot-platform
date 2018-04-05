import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
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
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
