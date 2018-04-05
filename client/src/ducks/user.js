import * as usersApi from '../api/users';

// Actions
const LOGIN = 'user/LOGIN';
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_FAILED = 'user/LOGIN_FAILED';
const LOGOUT = 'user/LOGOUT';

const CHECK_AUTH = 'user/CHECK_AUTH';
const CHECK_AUTH_SUCCESS = 'user/CHECK_AUTH_SUCCESS';
const CHECK_AUTH_FAILED = 'user/CHECK_AUTH_FAILED';

const initialState = {
  loading: false,
  email: null,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
    case CHECK_AUTH:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
    case CHECK_AUTH_SUCCESS: {
      const { user: { email } } = action;
      return { ...state, loading: false, email };
    }

    case LOGIN_FAILED:
    case LOGOUT:
    case CHECK_AUTH_FAILED:
      return { ...state, loading: false, email: null };

    default:
      return state;
  }
}

// Action creators
export function login(email, password) {
  return (dispatch) => {
    usersApi
      .login(email, password)
      .then(({ token }) => (token || Promise.reject()))
      .then(token => Promise.all([token, usersApi.me(token)]))
      .then(([token, user]) => {
        localStorage.setItem('access_token', token);
        return { ...user, token };
      })
      .then(user => dispatch({ type: LOGIN_SUCCESS, user }))
      .catch(() => dispatch({ type: LOGIN_FAILED }));
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('access_token');
    dispatch({ type: LOGOUT });
  };
}

export function checkAuth() {
  return async (dispatch) => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return;
    }

    dispatch({ type: CHECK_AUTH });

    try {
      const user = await usersApi.me(accessToken);

      dispatch({ type: CHECK_AUTH_SUCCESS, user });
    } catch (error) {
      dispatch({ type: CHECK_AUTH_FAILED });
    }
  };
}
