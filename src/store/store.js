import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import positionReducer from './reducers/positionReducer';
import candidateReducer from './reducers/candidateReducer';
import appReducer from './reducers/appReducer';


let rootReducer = combineReducers({
  positions: positionReducer,
  candidates: candidateReducer,
  app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
