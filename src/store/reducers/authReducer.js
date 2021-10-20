import {LOGIN_REQUEST, LOGOUT_REQUEST} from '../actions/actionTypes';

const INITIAL_STATE = {
  isLogin: false,
  email: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLogin: true,
        email: action.payload.email,
      };
    }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLogin: false,
        email: '',
      };
    default:
      return state;
  }
};
