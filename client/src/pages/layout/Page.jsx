import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../Header';

export default function Page({ children }) {
  return (
    <div className="px3">
      <Header />
      {children}
    </div>
  );
}

Page.propTypes = { children: PropTypes.node.isRequired };
