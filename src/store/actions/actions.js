import {LOGIN_REQUEST, LOGOUT_REQUEST} from './actionTypes';

export function loginRequest(email, password) {
  return {
    type: LOGIN_REQUEST,
    payload: {email, password},
  };
}

export function logout() {
  return {
    type: LOGOUT_REQUEST,
  };
}
