import {
  GET_DATA,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  POST_DATA,
} from './actionTypes';

export function loginRequest(email, password) {
  console.log({email, password});
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

export function saveNewPost(post) {
  return {
    type: POST_DATA,
    payload: post,
  };
}

export function saveAllGetData(posts) {
  return {
    type: GET_DATA,
    payload: posts,
  };
}
