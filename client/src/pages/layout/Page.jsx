import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Menu from './Menu';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <Menu />
      <div className="shadow off-white-bg border-box max-width-4 mx-auto my2 p2">
        {children}
      </div>
    </div>
  );
}

Page.propTypes = { children: PropTypes.node.isRequired };
