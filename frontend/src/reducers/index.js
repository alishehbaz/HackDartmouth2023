// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';
import ResponseReducer from './response-reducer';

const rootReducer = combineReducers({
  responses: ResponseReducer,
});

export default rootReducer;
