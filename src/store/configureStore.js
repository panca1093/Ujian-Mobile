import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import employeesReducer from "./reducers/employees";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  employees: employeesReducer,
  auth: authReducer
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureReducer = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureReducer;
