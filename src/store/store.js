import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/authReducer';
import postsReducer from './reducers/postsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({authReducer, postsReducer});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
