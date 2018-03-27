import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

import counter from './counter';
import login from './login';

export default combineReducers({
  form,
  router,
  counter,
  login,
});
