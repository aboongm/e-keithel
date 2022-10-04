import url from '../../helpers/apiUrl';
import { AUTHENTICATED, NOT_AUTHENTICATED } from '../../helpers/constants';

const setToken = (token) => {
  localStorage.setItem('token', token);
  localStorage.setItem('lastLoginTime', new Date(Date.now()).getTime());
};

const getToken = () => {
  const now = new Date(Date.now()).getTime();
  const thirtyMinutes = 1000 * 60 * 30;
  const timeSinceLastLogin = now - localStorage.getItem('lastLoginTime');
  if (timeSinceLastLogin < thirtyMinutes) {
    return localStorage.getItem('token');
  }
};

export const loginUser = (credentials) => (dispatch) => {
  // console.log('email&password: ', credentials);
  fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: credentials,
    }),
  }).then((res) => {
    if (res.ok) {
      console.log(res.headers.get('Authorization'));
      setToken(res.headers.get('Authorization'));
      return res
        .json()
        .then((userJson) =>
          dispatch({ type: AUTHENTICATED, payload: userJson })
        );
    } else {
      return res.json().then((errors) => {
        dispatch({ type: NOT_AUTHENTICATED });
        return Promise.reject(errors);
      });
    }
  });
};

export const signupUser = (credentials) => {
  return (dispatch) => {
    return fetch(`${url}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: credentials }),
    }).then((res) => {
      if (res.ok) {
        setToken(res.headers.get('Authorization'));
        return res
          .json()
          .then((userJson) =>
            dispatch({ type: AUTHENTICATED, payload: userJson })
          );
      } else {
        return res.json().then((errors) => {
          dispatch({ type: NOT_AUTHENTICATED });
          return Promise.reject(errors);
        });
      }
    });
  };
};

export const logoutUser = () => {
  console.log('from logoutUser');
  return (dispatch) => {
    return fetch(`${url}/logout`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
    }).then((res) => {
      console.log('Logged out');
      if (res.ok) {
        return dispatch({ type: NOT_AUTHENTICATED });
      } else {
        return res.json().then((errors) => {
          dispatch({ type: NOT_AUTHENTICATED });
          return Promise.reject(errors);
        });
      }
    });
  };
};
