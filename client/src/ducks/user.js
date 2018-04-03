import * as usersApi from '../api/users';

// Actions
const SET_USER = 'users/SET';

// Reducer
export default function reducer(state = null, action = {}) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}

// Action creators
export const setUser = user => ({ type: SET_USER, user });

export const logout = () => setUser(null);

export function login(email, password) {
  return (dispatch) => {
    usersApi
      .login(email, password)
      .then(({ token }) => (token || Promise.reject()))
      .then(token => Promise.all([token, usersApi.me(token)]))
      .then(([token, user]) => ({ ...user, token }))
      .then(user => dispatch({ type: SET_USER, user }));
  };
}
