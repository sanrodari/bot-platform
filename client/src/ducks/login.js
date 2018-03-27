import axios from 'axios';
import { push } from 'react-router-redux';
import swal from 'sweetalert2';

// Actions
const LOGIN = 'login/LOGIN';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILED = 'login/LOGIN_FAILED';
const LOGOUT = 'login/LOGOUT';

const CHECK_AUTH = 'login/CHECK_AUTH';
const CHECK_AUTH_SUCCESS = 'login/CHECK_AUTH_SUCCESS';
const CHECK_AUTH_FAILED = 'login/CHECK_AUTH_FAILED';

const initialState = {
  isAuthenticated: false,
  loading: false,
};

// Reducer
export default function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case LOGIN:
    case CHECK_AUTH:
      return { ...state, loading: true };

    case CHECK_AUTH_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, loading: false };

    case CHECK_AUTH_FAILED:
    case LOGIN_FAILED:
    case LOGOUT:
      return { ...state, isAuthenticated: false, loading: false };

    default:
      return state;
  }
}

export function checkAuth() {
  return async (dispatch) => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return;
    }
    dispatch({ type: CHECK_AUTH });
    try {
      await axios.get('/api/users/me', {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      });
      dispatch({ type: CHECK_AUTH_SUCCESS });
    } catch (error) {
      dispatch({ type: CHECK_AUTH_FAILED });
    }
  };
}

export function processLogin({ email, password }) {
  return async (dispatch) => {
    dispatch({ type: LOGIN });
    try {
      const { data } = await axios.post('/api/users/login', { email, password });
      dispatch({ type: LOGIN_SUCCESS });
      localStorage.setItem('access_token', data.token);
      dispatch(push('/'));
    } catch (error) {
      dispatch({ type: LOGIN_FAILED });
      swal({
        title: 'Error',
        text: 'Wrong email/password combination, please try again',
        type: 'error',
      });
    }
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('access_token');
    dispatch({ type: LOGOUT });
    dispatch(push('/'));
  };
}
