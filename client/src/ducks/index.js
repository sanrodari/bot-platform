import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

import counter from './counter';
import user from './user';

export default combineReducers({
  form,
  router,
  counter,
  user,
});
