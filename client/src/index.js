import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const element = document.getElementById('app');
function render(el) { ReactDOM.render(React.createElement(App), el); }

render(element);
if (module.hot) {
  module.hot.accept('./components/App', () => render(element));
}
