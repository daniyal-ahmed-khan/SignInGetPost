import {GET_DATA, POST_DATA} from '../actions/actionTypes';

const INITIAL_STATE = {
  posts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        posts,
      };
    case POST_DATA:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
