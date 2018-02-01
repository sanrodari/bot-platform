import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="inline-block py2 pr2">
        {NAME}
      </div>
      <div className="inline-block">
        <Link to="/" className="p2">Home</Link>
        <Link to="/test" className="p2">Test</Link>
        <Link to="/counter" className="p2">Counter</Link>
      </div>
    </header>
  );
}
