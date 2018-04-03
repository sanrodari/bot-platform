
import nodeFetch from 'node-fetch';

export const BaseUrl = BASE_URL;

export const buildBearer = token => `Bearer ${token}`;

export const fetch = (path, options) =>
  nodeFetch(
    `${BaseUrl}${path}`,
    {
      ...options,
      headers: { ...options.headers, 'Content-Type': 'application/json' },
    },
  )
    .then(res => res.json());

export const authFetch = (path, options, token) =>
  fetch(
    path,
    {
      ...options,
      headers: { ...options.headers, Authorization: buildBearer(token) }
    },
  );


export default {
  BaseUrl,
  fetch,
  buildBearer,
  authFetch,
};
