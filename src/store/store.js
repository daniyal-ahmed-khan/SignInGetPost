import {createStore, combineReducers} from 'redux';
import authReducer from './reducers/authReducer';
import postsReducer from './reducers/postsReducer';

const rootReducer = combineReducers({authReducer, postsReducer});

const store = createStore(rootReducer);

export default store;
