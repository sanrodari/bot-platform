import React from 'react';

import HeaderComponent from './pages/layout/Header';
import headerContainer from './containers/header';

export default function Header() {
  const EnhancedHeader = headerContainer(HeaderComponent);

  return (
    <EnhancedHeader />
  );
}
