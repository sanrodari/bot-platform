import { fetch, authFetch } from './utils';

export const login = (email, password) =>
  fetch('/users/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

export const me = token =>
  authFetch('/users/me', {}, token);

export default { login, me };
